"use client";

import Link from "next/link";
import { MapPin, Eye, ArrowLeft, Star, Image as ImageIcon, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Pandal } from "@/types";
import Image from "next/image";
import _360degr from '../../../public/360degr.png'

export default function PandalDetailClient({ pandal, pandelDetails }: { pandal: Pandal, pandelDetails?: any }) {
  const [pandalUrl, setPandalUrl] = useState(`{/view/${pandal.id}}`);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 220;
    scrollRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  useEffect(() => {
    const storedUrl = window.localStorage.getItem("pandal_index_url");
    if (storedUrl) setPandalUrl(storedUrl);
  }, []);

  console.log(pandelDetails, "pandelDetails__");
  return (
    <div className="min-h-screen bg-black">
      <div className="bg-white w-full h-22" />
      {/* Hero */}
      <Link target={pandelDetails.virtual_tour ? "_blank" : "_parent"} href={`${pandelDetails.virtual_tour ? pandelDetails.virtual_tour.index_url : "#"}`} className="relative h-[50vh] sm:h-[60vh] overflow-hidden bg-zinc-900 flex items-center justify-center">
        <Image
          src={pandal.thumbnail}
          alt={pandal.name}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {pandelDetails.virtual_tour ? <Image src={_360degr} alt="_360degr" width={400} height={400} className="w-60 h-60 absolute z-10 rounded-full shadow-2xl shadow-white bg-white/60" /> : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        <div className="absolute top-10 left-6">
          <Link
            href="/pandals"
            className="flex items-center justify-center w-9 h-9 bg-black/50 border border-white/20 rounded-xl text-white hover:bg-white/10 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            {pandal.featured && (
              <span className="inline-flex items-center gap-1 bg-gold text-black text-xs font-bold px-2.5 py-1 rounded-full">
                <Star className="w-3 h-3 fill-black" /> Featured
              </span>
            )}
            <span className="bg-saffron text-white border border-saffron/30 text-xs font-medium px-2.5 py-1 rounded-full">
              360° Available
            </span>
            {pandal.idolPanoramaUrl && (
              <span className="bg-white/10 text-white/70 border border-white/20 text-xs px-2.5 py-1 rounded-full">
                Idol View
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{pandal.name}</h1>
          <div className="flex items-center gap-2 text-white">
            <MapPin className="w-4 h-4 text-saffron" />
            <span>{pandelDetails.address}</span>
          </div>
        </div>
      </Link>

      {/* Image Gallery */}
      {pandelDetails?.images?.length > 0 && (
        <div className="relative group">
          {/* Left scroll button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-black/60 border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory py-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {pandelDetails.images.map((v: any, i: number) => (
              <button
                key={i}
                onClick={() => setPreviewIndex(i)}
                className="flex-shrink-0 snap-start rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-saffron transition-transform hover:scale-105"
              >
                <Image
                  src={v.image}
                  alt={v?.alt_text || "image of pandal"}
                  width={400}
                  height={400}
                  className="w-[200px] h-[200px] object-cover"
                />
              </button>
            ))}
          </div>

          {/* Right scroll button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-black/60 border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Lightbox Preview */}
      {previewIndex !== null && pandelDetails?.images?.[previewIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setPreviewIndex(null)}
        >
          {/* Close */}
          <button
            onClick={() => setPreviewIndex(null)}
            className="absolute top-5 right-5 w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev */}
          {previewIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setPreviewIndex(previewIndex - 1); }}
              className="absolute left-4 w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Image */}
          <div onClick={(e) => e.stopPropagation()} className="max-w-[90vw] max-h-[85vh]">
            <Image
              src={pandelDetails.images[previewIndex].image}
              alt={pandelDetails.images[previewIndex]?.alt_text || "image of pandal"}
              width={1200}
              height={1200}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
            />
            <p className="text-white/60 text-sm text-center mt-3">
              {previewIndex + 1} / {pandelDetails.images.length}
            </p>
          </div>

          {/* Next */}
          {previewIndex < pandelDetails.images.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setPreviewIndex(previewIndex + 1); }}
              className="absolute right-4 w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      )}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-bold text-white">About this Pandal</h2>
              <Link href={`${pandelDetails?.map?.google_map_url}`} target="_blank">
                <MapPin className="w-5 h-5 text-saffron" />
              </Link>
            </div>
            <div className="text-white leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: pandal.description || "" }} />

            {/* 360° CTA */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
              <h3 className="text-white font-bold text-lg mb-2">Experience in 360°</h3>
              <p className="text-white text-sm mb-5">
                Step inside this pandal virtually. Explore every corner and witness the divine artistry of the Durga idol up close.
              </p>
              <div className="flex flex-wrap gap-3">
                {pandelDetails.virtual_tour ?
                  <Link
                    target="_blank"
                    href={`${pandelDetails.virtual_tour.index_url}`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-saffron to-gold text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
                  >
                    <Eye className="w-4 h-4" />
                    Enter 360° Experience
                  </Link>
                  :
                  null}
                {pandal.idolPanoramaUrl && (
                  <Link
                    href={`/view/${pandal.id}?view=idol`}
                    className="inline-flex items-center gap-2 border border-saffron/40 text-saffron hover:bg-saffron/10 px-6 py-3 rounded-xl transition-all"
                  >
                    <ImageIcon className="w-4 h-4" />
                    View Idol
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-4">
              <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider">
                Pandal Info
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  { label: "Location", value: pandal.location },
                  { label: "360° Views", value: pandal.idolPanoramaUrl ? "Pandal + Idol" : "Pandal" },
                  // { label: "Sponsors", value: String(pandal.sponsors.length) },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between gap-4">
                    <span className="text-white">{row.label}</span>
                    <span className="text-white text-right">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {pandal.sponsors.length > 0 && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="text-white/40 font-semibold mb-4 text-xs uppercase tracking-wider">
                  Sponsors
                </h3>
                <div className="space-y-2">
                  {pandal.sponsors.map((s) => (
                    <Link
                      key={s.id}
                      href={s.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-8 h-8 bg-saffron/20 rounded-lg flex items-center justify-center text-saffron font-bold text-sm">
                        {s.name[0]}
                      </div>
                      <span className="text-white/60 group-hover:text-white text-sm transition-colors">
                        {s.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
