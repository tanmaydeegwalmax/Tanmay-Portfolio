"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-white/10 bg-black px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-[10px] md:text-xs tracking-widest uppercase">
      <div>
        © {new Date().getFullYear()} Tanmay Deegwal. All rights reserved.
      </div>
      <div className="flex items-center gap-4">
        <span>Designed & Built with passion.</span>
        <button 
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors pb-1"
        >
          ↑
        </button>
      </div>
    </footer>
  );
}
