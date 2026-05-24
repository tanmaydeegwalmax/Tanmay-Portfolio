"use client";

import Image from "next/image";

export default function ClientsSection() {
  const logos = [
    "Groww.png",
    "LLA.png",
    "Odoo.png",
    "Slice.png",
    "Solarsquare.png",
    "Stable Money.png",
    "TCC.png",
    "Tickertape.png",
    "Upgrad.png",
    "YashTribe.png"
  ];

  // We duplicate the array to create a seamless infinite scroll effect
  const repeatedLogos = [...logos, ...logos];

  return (
    <section id="work" className="w-full bg-black py-20 border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h3 className="text-white/80 font-medium tracking-widest text-[10px] md:text-xs uppercase mb-12">I've worked with</h3>
      </div>
        
      {/* Marquee Container */}
      <div className="w-full overflow-hidden flex whitespace-nowrap mask-image-fade py-8">
        <div className="flex w-max animate-marquee items-center transition-all duration-500 hover:[animation-play-state:paused]">
          {repeatedLogos.map((logo, i) => (
            <div key={i} className="group mx-6 md:mx-20 flex-none relative h-10 w-28 md:h-20 md:w-56 min-w-[112px] md:min-w-[224px] cursor-pointer transition-transform duration-300 hover:scale-110">
              {/* Base Logo (White/Monochrome) */}
              <Image 
                src={`/clients/${logo}`} 
                alt={logo.replace('.png', '')} 
                fill 
                sizes="(max-width: 768px) 112px, 224px"
                className="object-contain opacity-70 group-hover:opacity-0 transition-opacity duration-300" 
              />
              
              {/* Colored Logo (Visible on Hover) */}
              <Image 
                src={`/clients-colored/${logo}`} 
                alt={`${logo.replace('.png', '')} colored`} 
                fill 
                sizes="(max-width: 768px) 112px, 224px"
                className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-2xl" 
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-20">
        <div className="flex items-center justify-center gap-4 text-white/30 text-[10px] md:text-xs tracking-widest">
          <div className="h-[1px] w-12 md:w-32 bg-white/10" />
          <span>and more amazing people...</span>
          <div className="h-[1px] w-12 md:w-32 bg-white/10" />
        </div>
      </div>
    </section>
  );
}
