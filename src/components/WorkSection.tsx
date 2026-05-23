"use client";

import { useState } from "react";
import Link from "next/link";
import VideoCard from "@/components/VideoCard";
import { projects, categories } from "@/data/projects";

export default function WorkSection() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  return (
    <section id="work" className="w-full bg-black py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-white/80 font-medium tracking-widest text-[10px] md:text-xs uppercase mb-4">My Work</h3>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <h2 className="font-oswald text-4xl md:text-6xl font-bold uppercase text-white tracking-normal">
            Featured Work
          </h2>
          
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat) => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-[10px] md:text-xs tracking-widest uppercase transition-colors border ${
                  activeCategory === cat 
                    ? "border-white text-white bg-white/10" 
                    : "border-white/20 text-white/50 hover:text-white hover:border-white/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects
            .filter((p) => p.tag.toLowerCase() === activeCategory.toLowerCase())
            .slice(0, 3)
            .map((p) => (
            <VideoCard key={p.id} project={p} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/work" className="group relative flex items-center gap-3 px-8 py-4 border border-white/30 rounded-full text-white font-oswald text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
            <span>View All Work</span>
            <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
