"use client";

import { useState, useEffect, useCallback } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { galleryTiles as tiles } from "@/data/gallery";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function GallerySection({ data, fullPage = false }: { data?: any[]; fullPage?: boolean }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const items = Array.isArray(data) && data.length > 0
    ? data
    : tiles.map((tile) => ({ id: tile.id, url: tile.src, alt_text: tile.alt }));

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox((i) => (i !== null && items.length ? (i - 1 + items.length) % items.length : null)), [items.length]);
  const next = useCallback(() => setLightbox((i) => (i !== null && items.length ? (i + 1) % items.length : null)), [items.length]);

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
      <section id="gallery" className={`px-4 sm:px-6 md:px-10 ${fullPage ? "pb-20 pt-32 md:pt-40" : "py-6 md:py-10"}`}>
        <div className="mx-auto max-w-[1400px]">

          <AnimateOnScroll anim="up">
            <div className="text-center">
              <p className="section-kicker">Our Collections</p>
              {fullPage ? (
                <h1 className="section-title mt-4 text-[30px] sm:text-[52px] md:text-[72px]">Explore Our <span className="text-utsav">Gallery</span></h1>
              ) : (
                <h2 className="section-title mt-4 text-[30px] sm:text-[52px] md:text-[72px]">Explore Our <span className="text-utsav">Gallery</span></h2>
              )}
              {fullPage && <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/60">A collection of moments, places and experiences from VAMXM.</p>}
            </div>
          </AnimateOnScroll>

          <div className={`mt-10 grid grid-cols-2 gap-2 md:grid-cols-4 ${fullPage ? "lg:gap-4" : ""}`}>
            {items.map((i: any, idx: number) => (
              <AnimateOnScroll
                key={idx}
                anim="scale"
                delay={idx * 60}
              // className={span === 2 ? "md:col-span-2 col-span-1" : ""}
              >
                <button
                  className="gallery-tile h-[150px] w-full sm:h-[190px] md:h-[300px] cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-utsav"
                  onClick={() => setLightbox(idx)}
                  aria-label={`Open ${i?.alt_text || "gallery image"}`}
                >
                  <img src={i?.url} alt={i?.alt_text} />
                </button>
              </AnimateOnScroll>
            ))}
          </div>

          {!fullPage && (
            <div className="mt-8 text-center">
              <Link href="/gallery" className="red-gradient inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110">
                View full gallery <span aria-hidden="true">→</span>
              </Link>
            </div>
          )}

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
              key={items[lightbox]?.id ?? lightbox}
              src={items[lightbox].url}
              alt={items[lightbox].alt_text}
              className="max-h-[85vh] max-w-[85vw] rounded-xl object-contain shadow-2xl"
            />
            {items[lightbox]?.alt_text && (
              <p className="absolute bottom-0 left-0 right-0 rounded-b-xl bg-gradient-to-t from-black/60 to-transparent py-3 text-center text-sm text-white/70">
                {items[lightbox].alt_text}
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
            {items.map((_: any, i: number) => (
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
