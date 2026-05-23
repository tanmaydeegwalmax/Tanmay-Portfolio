import Header from "@/components/Header";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import HeroOverlay from "@/components/HeroOverlay";
import ClientsSection from "@/components/ClientsSection";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import ToolsSection from "@/components/ToolsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative w-full bg-black">
        <div id="scrolly-container" className="relative w-full h-[250vh]">
          <ScrollyCanvas />
          <HeroOverlay />
        </div>
        
        {/* Sections that follow after the 200vh scroll */}
        <div className="relative z-10 bg-black">
          <ClientsSection />
          <WorkSection />
          <AboutSection />
          <ToolsSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
