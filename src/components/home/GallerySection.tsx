"use client";

import { useState, useEffect, useCallback } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { galleryTiles as tiles } from "@/data/gallery";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox((i) => (i !== null ? (i - 1 + tiles.length) % tiles.length : null)), []);
  const next = useCallback(() => setLightbox((i) => (i !== null ? (i + 1) % tiles.length : null)), []);

  useEffect(() => {
    if (lightbox === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, prev, next]);

  return (
    <>
      <section id="gallery" className="px-4 py-12 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1320px]">

          <AnimateOnScroll anim="up">
            <div className="text-center">
              <p className="section-kicker">Our Collections</p>
              <h2 className="section-title mt-4 text-[36px] sm:text-[60px] md:text-[80px]">
                Explore Our <span className="text-utsav">Gallery</span>
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="mt-10 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4 md:gap-5">
            {tiles.map(({ id, src, alt, span }, i) => (
              <AnimateOnScroll
                key={id}
                anim="scale"
                delay={i * 60}
                className={span === 2 ? "md:col-span-2 col-span-1" : ""}
              >
                <button
                  className="gallery-tile h-[150px] w-full sm:h-[190px] md:h-[300px] cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-utsav"
                  onClick={() => setLightbox(i)}
                  aria-label={`Open ${alt}`}
                >
                  <img src={src} alt={alt} />
                </button>
              </AnimateOnScroll>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
          onClick={close}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            onClick={close}
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-3 sm:left-6 z-10 p-2 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <div className="relative max-h-[90vh] max-w-[90vw] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              key={lightbox}
              src={tiles[lightbox].src}
              alt={tiles[lightbox].alt}
              className="max-h-[85vh] max-w-[85vw] rounded-xl object-contain shadow-2xl"
            />
            {tiles[lightbox].alt && (
              <p className="absolute bottom-0 left-0 right-0 text-center text-white/70 text-sm py-3 bg-gradient-to-t from-black/60 to-transparent rounded-b-xl">
                {tiles[lightbox].alt}
              </p>
            )}
          </div>

          {/* Next */}
          <button
            className="absolute right-3 sm:right-6 z-10 p-2 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {tiles.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                className={`h-1.5 rounded-full transition-all ${i === lightbox ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
