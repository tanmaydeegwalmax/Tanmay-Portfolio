"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 63; // 00 to 62
const SEQUENCE_PATH = "/sequence/Horizontal Main Sequence";

// Pad number with leading zeros, e.g., 01, 12
const currentFrame = (index: number) =>
  `${SEQUENCE_PATH}${index.toString().padStart(2, "0")}.jpg`;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef({ frame: 0 });

  useEffect(() => {
    // 1. Preload images
    const loadImages = async () => {
      const promises = [];
      for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        const promise = new Promise((resolve) => {
          img.onload = () => resolve(img);
        });
        promises.push(promise);
        imagesRef.current.push(img);
      }
      // Only wait for the first frame to load so the user sees the site immediately
      await promises[0];
      setLoaded(true);
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (!loaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const render = () => {
      const img = imagesRef.current[frameRef.current.frame];
      if (!img) return;

      // Object-fit: cover implementation
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    };

    // Initial sizing and render
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Setup GSAP ScrollTrigger
    const scrollTrigger = gsap.to(frameRef.current, {
      frame: FRAME_COUNT - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: "#scrolly-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // 1 second smoothing
        onUpdate: render,
      },
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      scrollTrigger.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [loaded]);

  return (
    <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      {!loaded && (
        <div className="absolute text-white/50 text-sm tracking-widest uppercase font-mono z-10 animate-pulse">
          Loading sequence...
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
    </div>
  );
}
