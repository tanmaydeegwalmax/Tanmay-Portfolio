"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import { projects, categories } from "@/data/projects";

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  const filteredProjects = projects.filter(
    (p) => p.tag.toLowerCase() === activeCategory.toLowerCase()
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black pt-32 pb-20 px-6 md:px-12 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row gap-12 lg:gap-24 relative">
          
          {/* Sidebar / Left Column */}
          <aside className="w-full md:w-64 flex-shrink-0 md:sticky md:top-32 h-fit">
            <h1 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-white tracking-normal mb-8">
              All Work
            </h1>
            
            <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-left px-4 py-3 rounded-xl tracking-widest text-[10px] md:text-xs uppercase transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-white/10 text-white font-bold border border-white/20"
                      : "text-white/50 hover:text-white hover:bg-white/5 border border-transparent"
                  } whitespace-nowrap`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </aside>

          {/* Right Column / Content Grid */}
          <section className="flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((p) => (
                <VideoCard key={p.id} project={p} />
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="w-full py-20 text-center text-white/50 text-sm tracking-widest uppercase">
                No projects found in this category.
              </div>
            )}
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
