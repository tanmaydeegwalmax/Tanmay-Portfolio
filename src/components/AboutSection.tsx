"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("tanmaydeegwalofficial@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="relative w-full bg-black py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      
      {/* Background Portrait Placeholder */}
      <div className="absolute top-0 right-1/2 bottom-0 w-full md:w-1/2 opacity-10 pointer-events-none bg-gradient-to-r from-black via-[#1a0033] to-transparent" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10">
        
        {/* Left Column */}
        <div className="flex flex-col items-start">
          <h3 className="text-white/80 font-medium tracking-widest text-[10px] md:text-xs uppercase mb-6">Who am I?</h3>
          <h2 className="font-oswald text-5xl md:text-7xl font-bold uppercase text-white tracking-normal mb-8 leading-tight">
            Hi, I'm Tanmay
          </h2>
          
          <div className="flex flex-col gap-6 text-white/60 text-sm md:text-base font-light max-w-md">
            <p>
              A passionate freelancer specializing in video editing and motion graphics. I create content that not only looks cinematic but also keeps the audience hooked.
            </p>
            <p>
              Over the years, I've had the privilege of working with some of the top finance and storytelling creators in India.
            </p>
          </div>

          <div className="mt-12 text-5xl md:text-6xl text-[#6b21a8] font-dancing opacity-80 -rotate-6">
            Tanmay
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-start md:items-end mt-16 md:mt-0">
          <div className="w-full max-w-md flex flex-col items-start">
            <h3 className="text-white/80 font-medium tracking-widest text-[10px] md:text-xs uppercase mb-6">Work with me</h3>
            
            <div className="flex flex-col gap-4 w-full">
            
            {/* Mail Card */}
            <button onClick={handleCopy} className="group flex w-full items-center justify-between p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/30 hover:bg-white/[0.05] transition-all text-left">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-white/10 overflow-hidden p-2">
                  {copied ? <span className="text-xl">✅</span> : <img src="/logos/gmail.png" alt="Gmail" className="w-full h-full object-contain" />}
                </div>
                <div>
                  <div className="text-[10px] text-white/50 tracking-widest uppercase mb-1">
                    {copied ? "Copied to clipboard!" : "Mail"}
                  </div>
                  <div className="text-white text-sm">tanmaydeegwalofficial@gmail.com</div>
                </div>
              </div>
              <span className="text-white/30 group-hover:text-white transition-colors">
                {copied ? "✓" : "📋"}
              </span>
            </button>

            {/* Instagram Card */}
            <a href="https://ig.me/m/tanmay_deegwal" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/30 hover:bg-white/[0.05] transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-white/10 overflow-hidden p-1.5">
                  <img src="/logos/instagram.png" alt="Instagram" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="text-[10px] text-white/50 tracking-widest uppercase mb-1">Instagram</div>
                  <div className="text-white text-sm">@tanmay_deegwal</div>
                </div>
              </div>
              <span className="text-white/30 group-hover:text-white transition-colors">↗</span>
            </a>

            {/* Let's Work Together Button */}
            <button className="group mt-4 flex items-center justify-center gap-3 w-full py-5 rounded-2xl border border-[#6b21a8]/50 bg-black text-white font-oswald text-sm uppercase tracking-widest hover:bg-[#6b21a8]/10 transition-colors shadow-[0_0_20px_rgba(107,33,168,0.1)] hover:shadow-[0_0_30px_rgba(107,33,168,0.2)]">
              <span>Let's Work Together</span>
              <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
