"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const handleShare = async () => {
    const shareData = {
      title: 'Tanmay Deegwal - Video Editor',
      text: 'Check out the amazing portfolio of Tanmay Deegwal!',
      url: window.location.origin,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert("Website link copied to clipboard!");
      }
    } catch (err) {
      console.log('Error sharing:', err);
    }
  };

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
        <button 
          onClick={handleShare}
          title="Share Website"
          className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
        </button>
      </nav>
    </motion.header>
  );
}
