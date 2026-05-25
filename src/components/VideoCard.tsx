"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Project } from "@/data/projects";

export default function VideoCard({ project }: { project: Project }) {
  const isVertical = project.tag === "SHORT FORM" || project.id === 203;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (project.localVideo && videoRef.current) {
      if (isHovered && !isModalOpen) {
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
        setProgress(0);
        videoRef.current.muted = true;
      }
    }
  }, [isHovered, isModalOpen, project.localVideo]);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current && videoRef.current.duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percent = Math.max(0, Math.min(1, x / rect.width));
      videoRef.current.currentTime = videoRef.current.duration * percent;
      setProgress(percent * 100);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex flex-col rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] hover:-translate-y-1.5 hover:border-white/30 hover:shadow-[0_10px_30px_rgba(107,33,168,0.15)] transition-all duration-300 ${project.tag === "SHORT FORM" ? "max-w-[300px] mx-auto w-full" : "w-full"}`}
    >
      <div className="flex flex-col w-full h-full">
        <div className={`relative w-full ${isVertical ? "aspect-[9/16]" : "aspect-video"} bg-black overflow-hidden`}>
        {project.localVideo ? (
          <>
            <video 
              ref={videoRef}
              src={project.localVideo}
              poster={project.localThumbnail}
              loop
              playsInline
              muted
              onTimeUpdate={handleTimeUpdate}
              className={`w-full h-full transition-transform duration-500 ${isVertical ? "object-cover" : "object-contain bg-black"} ${isHovered ? "opacity-100" : "opacity-80"}`}
            />
            {isHovered && (
              <div 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 z-30 cursor-pointer group/scrub hover:h-1 transition-all"
                onClick={handleScrub}
                onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                onMouseMove={(e) => {
                  if (e.buttons === 1) handleScrub(e);
                }}
              >
                <div 
                  className="absolute bottom-0 left-0 h-full bg-[#6b21a8] transition-all duration-75 group-hover/scrub:bg-[#8b5cf6] relative" 
                  style={{ width: `${progress}%` }} 
                >
                  <div className="w-3 h-3 bg-white rounded-full absolute -right-1.5 top-1/2 -translate-y-1/2 opacity-0 group-hover/scrub:opacity-100 transition-opacity shadow-[0_0_10px_rgba(255,255,255,0.5)] pointer-events-none" />
                </div>
              </div>
            )}
            {!isHovered && project.localThumbnail && (
              <img 
                src={project.localThumbnail} 
                alt="Video Thumbnail" 
                className={`absolute inset-0 w-full h-full ${isVertical ? "object-cover" : "object-contain bg-black"} opacity-100 transition-opacity z-10 pointer-events-none`} 
              />
            )}
            {!isHovered && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 pointer-events-none z-20">
                <img src="/logos/play-icon.png" alt="Play" className="w-12 h-12 opacity-60" />
              </div>
            )}
          </>
        ) : project.youtubeId && isHovered && !isModalOpen ? (
          <iframe 
            className={`w-full h-full pointer-events-none ${isVertical ? "object-cover" : "object-contain bg-black"}`}
            src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=${project.youtubeId}`} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        ) : project.youtubeId ? (
          <>
            <img 
              src={`https://img.youtube.com/vi/${project.youtubeId}/${isVertical ? "hqdefault.jpg" : "maxresdefault.jpg"}`} 
              alt="Video Thumbnail" 
              className={`w-full h-full ${isVertical ? "object-cover" : "object-contain bg-black"} opacity-100 transition-opacity`} 
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
      </div>

      <div className="p-6 flex flex-col gap-4">
        <div className="flex justify-between items-start gap-4 transition-opacity">
          <div 
            className="cursor-pointer group/title"
            onClick={(e) => {
              if (project.externalLink) return;
              e.preventDefault();
              setIsModalOpen(true);
            }}
          >
            {project.externalLink ? (
              <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
                <h4 className="text-white font-bold text-lg md:text-xl leading-tight group-hover/title:text-[#6b21a8] transition-colors">{project.title}</h4>
              </a>
            ) : (
              <h4 className="text-white font-bold text-lg md:text-xl leading-tight group-hover/title:text-[#6b21a8] transition-colors">{project.title}</h4>
            )}
          </div>
          {project.externalLink ? (
            <a 
              href={project.externalLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/30 hover:text-[#6b21a8] transition-colors flex-shrink-0 text-xl p-2 -m-2 z-40 relative cursor-pointer"
              title="Open External Link"
            >
              ↗
            </a>
          ) : (
            <button 
              onClick={(e) => {
                e.preventDefault();
                setIsModalOpen(true);
              }}
              className="text-white/30 hover:text-[#6b21a8] transition-colors flex-shrink-0 text-xl p-2 -m-2 z-40 relative cursor-pointer"
              title="Open Video"
            >
              ↗
            </button>
          )}
        </div>
      </div>
      </div>

      {/* Video Modal Portal */}
      {isModalOpen && typeof document !== "undefined" && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8">
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={() => { setIsModalOpen(false); setIsHovered(false); }}
            title="Close (Click background)"
          />
          
          <button 
            onClick={() => { setIsModalOpen(false); setIsHovered(false); }}
            className="absolute top-6 right-6 md:top-10 md:right-10 z-50 p-3 bg-white/10 hover:bg-[#6b21a8] text-white rounded-full backdrop-blur-md transition-colors border border-white/20 hover:border-[#6b21a8]"
            title="Close Video"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`relative z-10 w-full rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10 ${isVertical ? "max-w-[450px] max-h-[85vh] aspect-[9/16]" : "max-w-5xl max-h-[85vh] aspect-video"}`}
          >
            {project.localVideo ? (
              <video 
                src={project.localVideo}
                poster={project.localThumbnail}
                controls
                autoPlay
                className="w-full h-full object-contain bg-black"
              />
            ) : project.youtubeId ? (
              <iframe 
                className="w-full h-full bg-black"
                src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1${isVertical ? "&loop=1&playlist=" + project.youtubeId : ""}`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            ) : null}
          </motion.div>
        </div>,
        document.body
      )}
    </motion.div>
  );
}
