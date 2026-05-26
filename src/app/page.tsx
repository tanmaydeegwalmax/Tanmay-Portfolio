"use client";

import { useState } from "react";
import Header from "@/components/Header";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import HeroOverlay from "@/components/HeroOverlay";
import ClientsSection from "@/components/ClientsSection";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import ToolsSection from "@/components/ToolsSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* Global Loading Screen */}
      {!isLoaded && (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
          <div className="w-12 h-12 border-4 border-white/20 border-t-[#6b21a8] rounded-full animate-spin mb-6" />
          <div className="text-white/50 text-sm tracking-widest uppercase font-mono animate-pulse">
            Loading Experience...
          </div>
        </div>
      )}

      {/* Main Content (Fades in when loaded) */}
      <div className={`transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0 h-screen overflow-hidden"}`}>
        <Header />
        <main className="relative w-full bg-black">
          <div id="scrolly-container" className="relative w-full h-[150vh]">
            <ScrollyCanvas onLoaded={() => setIsLoaded(true)} />
            <HeroOverlay />
          </div>
          
          {/* Sections that follow after the 150vh scroll */}
          <div className="relative z-10 bg-black">
            <ClientsSection />
            <WorkSection />
            <AboutSection />
            <ToolsSection />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
