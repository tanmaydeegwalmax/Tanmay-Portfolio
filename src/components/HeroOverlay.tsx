"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";

export default function HeroOverlay() {
  const { scrollY } = useScroll();
  // Fade out opacity as the user scrolls down the first 300px
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div style={{ opacity }} className="fixed inset-0 pointer-events-none z-20 p-6 md:p-12 flex flex-col justify-between">
      {/* Spacer for Header */}
      <div className="h-10"></div>

      {/* Main Content - Right Aligned, 30% width on Desktop */}
      <div className="flex flex-col items-end text-right justify-center flex-grow ml-auto w-full md:w-[30%] px-4 md:px-0 mt-20">
        
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="flex items-center justify-end gap-2 mb-4 w-full"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
          <span className="text-white/80 font-oswald tracking-[0.2em] text-[10px] md:text-xs font-medium uppercase">
            Video Editor & Motion Designer
          </span>
        </motion.div>

        <motion.h1 
          initial="hidden" animate="visible" variants={fadeUp}
          className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-normal uppercase"
        >
          EDITING STORIES.<br />
          <span className="text-white/60">NOT JUST VIDEOS.</span>
        </motion.h1>

        <motion.p 
          initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }}
          className="mt-4 md:mt-6 text-sm md:text-base text-white/70 font-light"
        >
          I help creators and brands turn raw footage into powerful, engaging content that holds attention.
        </motion.p>

      </div>

      {/* Bottom Center */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-white/50 text-xl"
        >
          🖱️
        </motion.div>
        <span className="text-white/50 text-[10px] tracking-widest uppercase">Scroll to explore</span>
      </motion.div>
    </motion.div>
  );
}
