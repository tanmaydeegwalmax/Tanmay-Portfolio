"use client";

export default function ToolsSection() {
  const tools = [
    { name: "Pr", color: "text-[#9999ff]", border: "border-[#9999ff]/30", shadow: "shadow-[0_0_20px_rgba(153,153,255,0.15)]", bg: "bg-[#00005c]" },
    { name: "Ae", color: "text-[#9999ff]", border: "border-[#9999ff]/30", shadow: "shadow-[0_0_20px_rgba(153,153,255,0.15)]", bg: "bg-[#00005c]" },
    { name: "Ps", color: "text-[#33ccff]", border: "border-[#33ccff]/30", shadow: "shadow-[0_0_20px_rgba(51,204,255,0.15)]", bg: "bg-[#001e36]" },
    { name: "Ai", color: "text-[#ff9a00]", border: "border-[#ff9a00]/30", shadow: "shadow-[0_0_20px_rgba(255,154,0,0.15)]", bg: "bg-[#330000]" }
  ];

  return (
    <section id="tools" className="w-full bg-black py-20 px-6 md:px-12 border-t border-white/5 border-b">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <h3 className="text-white/80 font-medium tracking-widest text-[10px] md:text-xs uppercase">Tools I Use</h3>
        
        <div className="flex flex-wrap items-center gap-6">
          {tools.map((t, i) => (
            <div 
              key={i} 
              className={`w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center ${t.border} border ${t.bg} ${t.shadow} transition-transform hover:-translate-y-2 cursor-pointer`}
            >
              <span className={`${t.color} font-sans font-bold text-2xl md:text-3xl`}>{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
