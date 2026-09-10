"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Maximize2, RotateCcw, Image as ImageIcon, Eye, Info, ExternalLink } from "lucide-react";
import { Pandal } from "@/types";

export default function ViewerPage({ pandal }: { pandal: Pandal }) {
  const [activeView, setActiveView] = useState<"pandal" | "idol">("pandal");
  const [showInfo, setShowInfo] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const yawRef = useRef(0);
  const pitchRef = useRef(0);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);
  const lastYRef = useRef(0);

  const currentUrl =
    activeView === "idol" && pandal.idolPanoramaUrl
      ? pandal.idolPanoramaUrl
      : pandal.panoramaUrl;

  useEffect(() => {
    setLoaded(false);
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.onerror = () => setLoaded(true); // show anyway
    img.src = currentUrl;
  }, [currentUrl]);

  const updateBg = () => {
    if (containerRef.current) {
      const el = containerRef.current.querySelector(".panorama-bg") as HTMLElement;
      if (el) {
        el.style.backgroundPosition = `calc(50% + ${yawRef.current * 0.5}px) calc(50% + ${pitchRef.current * 0.3}px)`;
      }
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    draggingRef.current = true;
    lastXRef.current = e.clientX;
    lastYRef.current = e.clientY;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!draggingRef.current) return;
    yawRef.current -= (e.clientX - lastXRef.current);
    pitchRef.current = Math.max(-200, Math.min(200, pitchRef.current + (e.clientY - lastYRef.current)));
    lastXRef.current = e.clientX;
    lastYRef.current = e.clientY;
    updateBg();
  };

  const onTouchStart = (e: React.TouchEvent) => {
    draggingRef.current = true;
    lastXRef.current = e.touches[0].clientX;
    lastYRef.current = e.touches[0].clientY;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!draggingRef.current) return;
    yawRef.current -= (e.touches[0].clientX - lastXRef.current);
    pitchRef.current = Math.max(-200, Math.min(200, pitchRef.current + (e.touches[0].clientY - lastYRef.current)));
    lastXRef.current = e.touches[0].clientX;
    lastYRef.current = e.touches[0].clientY;
    updateBg();
  };

  const stopDrag = () => { draggingRef.current = false; };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => { });
    } else {
      document.exitFullscreen().catch(() => { });
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black z-50 flex flex-col"
      style={{ userSelect: "none" }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black/90 to-transparent absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center gap-3">
          <Link
            href={`/pandals/${pandal.id}`}
            className="w-9 h-9 flex items-center justify-center bg-black/60 border border-white/20 rounded-xl text-white hover:bg-white/10 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-white font-semibold text-sm">{pandal.name}</h1>
            <p className="text-white/40 text-xs">{pandal.location}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* View switcher */}
          <div className="flex bg-black/60 border border-white/20 rounded-xl p-1 gap-1">
            <button
              onClick={() => setActiveView("pandal")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${activeView === "pandal" ? "bg-saffron text-white" : "text-white/60 hover:text-white"
                }`}
            >
              <Eye className="w-3 h-3" /> Pandal
            </button>
            {pandal.idolPanoramaUrl && (
              <button
                onClick={() => setActiveView("idol")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${activeView === "idol" ? "bg-saffron text-white" : "text-white/60 hover:text-white"
                  }`}
              >
                <ImageIcon className="w-3 h-3" /> Idol
              </button>
            )}
          </div>
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="w-9 h-9 flex items-center justify-center bg-black/60 border border-white/20 rounded-xl text-white/60 hover:text-white transition-all"
          >
            <Info className="w-4 h-4" />
          </button>
          <button
            onClick={toggleFullscreen}
            className="w-9 h-9 flex items-center justify-center bg-black/60 border border-white/20 rounded-xl text-white/60 hover:text-white transition-all"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Panorama viewer */}
      <div
        className="flex-1 relative overflow-hidden"
        style={{ cursor: draggingRef.current ? "grabbing" : "grab" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={stopDrag}
      >
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-zinc-950">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 border-4 border-saffron/30 border-t-saffron rounded-full animate-spin" />
              <p className="text-white/50 text-sm">Loading 360° view...</p>
            </div>
          </div>
        )}

        <div
          className="panorama-bg w-full h-full transition-none"
          style={{
            backgroundImage: `url(${currentUrl})`,
            backgroundSize: "200% auto",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "repeat-x",
          }}
        />

        {/* Hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/70 rounded-full px-5 py-2.5 pointer-events-none backdrop-blur-sm">
          <RotateCcw className="w-4 h-4 text-white/50" />
          <span className="text-white/50 text-xs font-medium">Drag to explore 360°</span>
        </div>

        {/* Sponsor banners */}
        {pandal.sponsors.length > 0 && (
          <div className="absolute top-20 right-4 flex flex-col gap-2">
            {pandal.sponsors.map((s) => (
              <Link
                key={s.id}
                href={s.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black/70 hover:bg-saffron border border-saffron/40 hover:border-saffron rounded-xl px-3 py-2 text-xs text-white transition-all backdrop-blur-sm group"
                onMouseDown={(e) => e.stopPropagation()}
              >
                <div className="w-6 h-6 bg-saffron/20 group-hover:bg-white/20 rounded-lg flex items-center justify-center text-saffron group-hover:text-white font-bold text-xs transition-all">
                  {s.name[0]}
                </div>
                <span>{s.name}</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </Link>
            ))}
          </div>
        )}

        {/* Info panel */}
        {showInfo && (
          <div
            className="absolute top-20 left-4 bg-black/85 backdrop-blur-sm border border-white/10 rounded-2xl p-5 max-w-xs"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <h3 className="text-white font-semibold mb-1">{pandal.name}</h3>
            <p className="text-white/50 text-xs leading-relaxed">{pandal.description}</p>
            {pandal.sponsors.length > 0 && (
              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="text-white/30 text-xs mb-2">Sponsors</p>
                <div className="flex flex-wrap gap-1">
                  {pandal.sponsors.map((s) => (
                    <span key={s.id} className="bg-saffron/20 text-saffron text-xs px-2 py-0.5 rounded-full">
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
