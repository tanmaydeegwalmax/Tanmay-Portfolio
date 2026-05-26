"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface AudioButtonProps {
  color: string;
  text: string;
  icon: React.ReactNode;
  actionIcon: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  className?: string;
}

export default function AudioButton({
  color,
  text,
  icon,
  actionIcon,
  onClick,
  href,
  className = "",
}: AudioButtonProps) {
  const [bars, setBars] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState<number | null>(null);

  useEffect(() => {
    // Generate base waveform pattern (noise)
    const newBars = Array.from({ length: 250 }, (_, i) => {
      // Create organic peaks and valleys
      const noise = Math.random() * 0.2 + 0.05;
      const wave1 = Math.sin(i * 0.1) * 0.3;
      const wave2 = Math.cos(i * 0.05) * 0.2;
      return Math.max(0.05, noise + Math.abs(wave1 + wave2)); 
    });
    setBars(newBars);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
  };

  const handleMouseLeave = () => {
    setMouseX(null);
  };

  const baseStyles = {
    borderColor: `${color}40`,
    backgroundColor: `${color}0A`,
    boxShadow: `0 4px 30px ${color}10`,
  };

  const Wrapper = href ? "a" : "button";
  
  // @ts-ignore
  return (
    <Wrapper
      href={href}
      onClick={onClick}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className={`group relative flex items-center justify-between w-full h-[105px] rounded-md border overflow-hidden transition-all duration-300 hover:-translate-y-1 ${className}`}
      style={baseStyles}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef as any}
    >
      {/* Thick Left Edge */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-1 z-20 rounded-l-md"
        style={{ backgroundColor: color }}
      />

      {/* Grid overlay for Premiere Pro look */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `linear-gradient(to right, ${color}40 1px, transparent 1px)`,
          backgroundSize: '30px 100%'
        }}
      />

      {/* Center Horizontal Axis Line */}
      <div 
        className="absolute left-2 right-0 h-[1px] pointer-events-none opacity-30 z-0"
        style={{ bottom: '25%', backgroundColor: color }}
      />

      {/* Audio Waveform Background */}
      <div className="absolute left-2 right-0 bottom-0 h-[50%] z-0 flex items-center pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-full h-[90%] flex items-center justify-between gap-[1px]">
          {bars.map((baseHeight, index) => {
            let scale = 1;
            if (mouseX !== null && containerRef.current) {
              const width = containerRef.current.offsetWidth;
              const barX = (index / bars.length) * width;
              const dist = Math.abs(barX - mouseX);
              const maxDist = 100; // wider hover effect radius
              if (dist < maxDist) {
                // Bell curve scaling
                scale = 1 + Math.cos((dist / maxDist) * (Math.PI / 2)) * 2;
              }
            }

            const finalHeight = Math.min(100, baseHeight * scale * 100);
            const isHovered = scale > 1.05;

            return (
              <div
                key={index}
                className="flex-1 transition-all duration-100 ease-out"
                style={{
                  height: `${finalHeight}%`,
                  backgroundColor: color,
                  opacity: isHovered ? 0.9 : 0.4,
                  boxShadow: isHovered ? `0 0 10px ${color}` : "none",
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-between w-full px-6 md:px-10 pl-12 -translate-y-2">
        <div className="flex items-center gap-4">
          <div 
            className="w-10 h-10 rounded-lg border flex items-center justify-center transition-transform duration-300 group-hover:scale-105 bg-black/40 backdrop-blur-sm [&>svg]:w-5 [&>svg]:h-5"
            style={{ borderColor: `${color}80`, color: color }}
          >
            {icon}
          </div>
          <div className="text-white text-xs md:text-sm font-light tracking-wide drop-shadow-md">
            {text}
          </div>
        </div>
        <div 
          className="w-7 h-7 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 drop-shadow-md [&>svg]:w-5 [&>svg]:h-5"
          style={{ color: color }}
        >
          {actionIcon}
        </div>
      </div>
    </Wrapper>
  );
}
