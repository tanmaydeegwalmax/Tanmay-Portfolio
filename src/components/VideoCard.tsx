"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Project } from "@/data/projects";

export default function VideoCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (project.localVideo && videoRef.current) {
      if (isHovered) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(() => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(e => console.error("Autoplay completely blocked", e));
          }
        });
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        videoRef.current.muted = true;
      }
    }
  }, [isHovered, project.localVideo]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex flex-col rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-white/30 transition-colors cursor-pointer ${project.tag === "SHORT FORM" ? "max-w-[280px] mx-auto w-full" : "w-full"}`}
    >
      <a 
        href={project.externalLink ? project.externalLink : project.localVideo ? project.localVideo : project.tag === "SHORT FORM" ? `https://youtube.com/shorts/${project.youtubeId}` : `https://youtube.com/watch?v=${project.youtubeId}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="flex flex-col w-full h-full"
      >
        <div className={`relative w-full ${project.tag === "SHORT FORM" ? "aspect-[9/16]" : "aspect-video"} bg-black overflow-hidden`}>
        {project.localVideo ? (
          <>
            <video 
              ref={videoRef}
              src={project.localVideo}
              poster={project.localThumbnail}
              loop
              playsInline
              muted
              className={`w-full h-full transition-transform duration-500 ${project.objectFit === "contain" ? "object-contain bg-black" : "object-cover"} ${isHovered ? "scale-105 opacity-100" : "scale-100 opacity-80"}`}
            />
            {!isHovered && project.localThumbnail && (
              <img 
                src={project.localThumbnail} 
                alt="Video Thumbnail" 
                className={`absolute inset-0 w-full h-full ${project.objectFit === "contain" ? "object-contain bg-black" : "object-cover"} opacity-100 transition-opacity z-10 pointer-events-none`} 
              />
            )}
            {!isHovered && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 pointer-events-none z-20">
                <img src="/logos/play-icon.png" alt="Play" className="w-12 h-12 opacity-60" />
              </div>
            )}
          </>
        ) : project.youtubeId && isHovered ? (
          <iframe 
            className={`w-full h-full scale-105 pointer-events-none ${project.objectFit === "contain" ? "object-contain bg-black" : "object-cover"}`}
            src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=${project.youtubeId}`} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        ) : project.youtubeId ? (
          <>
            <img 
              src={`https://img.youtube.com/vi/${project.youtubeId}/${project.tag === "SHORT FORM" ? "hqdefault.jpg" : "maxresdefault.jpg"}`} 
              alt="Video Thumbnail" 
              className={`w-full h-full ${project.objectFit === "contain" ? "object-contain bg-black" : "object-cover"} opacity-100 transition-opacity`} 
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 pointer-events-none">
              <img src="/logos/play-icon.png" alt="Play" className="w-12 h-12 opacity-60" />
            </div>
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1a0033] to-black opacity-80 transition-opacity group-hover:opacity-100">
            <span className="text-4xl mb-2">{project.emoji}</span>
            <span className="text-white/70 text-[10px] tracking-widest uppercase">View External</span>
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 pointer-events-none">
              <img src="/logos/play-icon.png" alt="Play" className="w-12 h-12 opacity-60" />
            </div>
          </div>
        )}
        
        {/* Tag */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[10px] text-white tracking-widest font-medium pointer-events-none z-10">
          {project.tag}
        </div>
      </div>

      <div className="p-6 flex flex-col gap-4">
        <div className="flex justify-between items-start gap-4 transition-opacity">
          <div>
            <h4 className="text-white font-bold text-lg md:text-xl leading-tight mb-1">{project.title}</h4>
            <p className="text-white/50 text-xs md:text-sm">{project.subtitle}</p>
          </div>
          <span className="text-white/30 group-hover:text-white transition-colors flex-shrink-0 text-xl">↗</span>
        </div>
      </div>
      </a>
    </motion.div>
  );
}
