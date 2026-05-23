"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex justify-between items-center pointer-events-none"
    >
      <Link 
        href="/" 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-white font-medium tracking-widest text-xs uppercase pointer-events-auto cursor-pointer hover:text-white/80 transition-colors"
      >
        TANMAY DEEGWAL
      </Link>
      
      <nav className="hidden md:flex items-center gap-8 pointer-events-auto">
        {["WORK", "ABOUT"].map((item) => (
          <a key={item} href={`/#${item.toLowerCase()}`} className="text-white/70 hover:text-white text-xs tracking-widest uppercase transition-colors">
            {item}
          </a>
        ))}
        <button className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-white">
          ↗
        </button>
      </nav>
    </motion.header>
  );
}
