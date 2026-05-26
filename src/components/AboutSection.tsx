"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import AudioButton from "./AudioButton";

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

          <div className="mt-8 opacity-80 -rotate-6 -translate-x-6 -translate-y-4">
            <img 
              src="/Tanmay_Signature.png" 
              alt="Tanmay Signature" 
              className="h-24 md:h-32 w-auto object-contain"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-start md:items-end mt-16 md:mt-0">
          <div className="w-full max-w-md flex flex-col items-start">
            <h3 className="text-white/80 font-medium tracking-widest text-[10px] md:text-xs uppercase mb-6">Work with me</h3>
            
            <div className="flex flex-col gap-4 w-full">
            
            {/* Mail Card */}
            <AudioButton
              color="#22c55e"
              text={copied ? "Copied!" : "tanmaydeegwalofficial@gmail.com"}
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6" stroke="black" strokeWidth="2"></polyline></svg>}
              actionIcon={copied 
                ? <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              }
              onClick={handleCopy}
            />

            {/* Instagram Card */}
            <AudioButton
              color="#ec4899"
              text="@tanmay_deegwal"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>}
              actionIcon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>}
              href="https://ig.me/m/tanmay_deegwal"
            />

            {/* Desktop Let's Work Together Button */}
            <a 
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=tanmaydeegwalofficial@gmail.com&su=${encodeURIComponent("Project Inquiry")}&body=${encodeURIComponent("Hi Tanmay,\n\nI came across your portfolio and would like to discuss a project.\n\nName: \nCompany/Brand: \nProject Type: \nTimeline: \nBudget: \nProject Details: ")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 hidden md:flex items-center justify-center gap-3 w-full py-5 rounded-2xl border border-[#6b21a8]/50 bg-black text-white font-oswald text-sm uppercase tracking-widest hover:bg-[#6b21a8]/10 transition-colors shadow-[0_0_20px_rgba(107,33,168,0.1)] hover:shadow-[0_0_30px_rgba(107,33,168,0.2)]"
            >
              <span>Let's Work Together</span>
              <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>

            {/* Mobile Let's Work Together Button */}
            <a 
              href={`mailto:tanmaydeegwalofficial@gmail.com?subject=${encodeURIComponent("Project Inquiry")}&body=${encodeURIComponent("Hi Tanmay,\n\nI came across your portfolio and would like to discuss a project.\n\nName: \nCompany/Brand: \nProject Type: \nTimeline: \nBudget: \nProject Details: ")}`}
              className="group mt-4 flex md:hidden items-center justify-center gap-3 w-full py-5 rounded-2xl border border-[#6b21a8]/50 bg-black text-white font-oswald text-sm uppercase tracking-widest hover:bg-[#6b21a8]/10 transition-colors shadow-[0_0_20px_rgba(107,33,168,0.1)] hover:shadow-[0_0_30px_rgba(107,33,168,0.2)]"
            >
              <span>Let's Work Together</span>
              <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
