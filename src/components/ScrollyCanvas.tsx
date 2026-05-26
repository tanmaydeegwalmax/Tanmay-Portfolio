"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 47; // 00 to 46

export default function ScrollyCanvas({ onLoaded }: { onLoaded?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef({ frame: 0 });

  useEffect(() => {
    // 1. Preload images
    const loadImages = async () => {
      const isMobile = window.innerWidth < 768;
      const prefix = isMobile 
        ? "/sequence-mobile/Verticle Main Sequence" 
        : "/sequence/Horizontal Main Sequence";
      const getFrame = (index: number) => `${prefix}${index.toString().padStart(2, "0")}.jpg`;

      const promises = [];
      for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.src = getFrame(i);
        const promise = new Promise((resolve) => {
          img.onload = () => resolve(img);
        });
        promises.push(promise);
        imagesRef.current.push(img);
      }
      // Wait for all frames to load to ensure smooth scrolling
      await Promise.all(promises);
      setLoaded(true);
      if (onLoaded) onLoaded();
    };

    loadImages();
  }, [onLoaded]);

  useEffect(() => {
    if (!loaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const render = () => {
      const img = imagesRef.current[frameRef.current.frame];
      if (!img) return;

      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      
      // On mobile, force vertical fit so the top/bottom never get cropped
      const isMobileScreen = window.innerWidth < 768;
      const ratio = isMobileScreen ? vRatio : Math.max(hRatio, vRatio);
      
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
        scrub: 0.2, // Faster, tighter smoothing
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
