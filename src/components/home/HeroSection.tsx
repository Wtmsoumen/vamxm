"use client";

import Link from "next/link";
import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row">

      {/* ── LEFT panel — lime/green, 50% ── */}
      <div className="flex-1 flex flex-col justify-between p-10 md:p-14 relative overflow-hidden min-h-[70vh] md:min-h-screen" style={{ backgroundColor: "#C0392B" }}>
        {/* Durga Puja collage — top of left panel */}
        <div className="absolute top-0 left-0 right-0 h-1/2 flex gap-0.5 overflow-hidden">
          <div className="flex-1 relative overflow-hidden">
            <img src="/pandals/pandal1.jpg" alt="pandal1" className="w-full h-full object-cover object-top scale-110" />
          </div>
          <div className="flex-1 relative overflow-hidden">
            <img src="/pandals/pandal2.jpg" alt="pandal2" className="w-full h-full object-cover object-top scale-110" />
          </div>
          <div className="flex-1 relative overflow-hidden">
            <img src="/pandals/pandal3.jpg" alt="pandal3" className="w-full h-full object-cover object-top scale-110" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#C0392B]/60 to-[#C0392B]" />
        </div>

        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: "repeating-linear-gradient(-45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px"
        }} />

        <div className="h-8" />

        <div className="flex-1 flex items-end">
          <div className="relative z-10 flex items-center">
            <div className="border-2 border-white/60 p-8 sm:p-10 inline-block">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-none mb-4">
                VAMXM
              </h1>
              <p className="text-white/90 text-xs sm:text-sm font-bold tracking-[0.3em] uppercase">
                An Insight into Immersiveness
              </p>
            </div>

            <div className="flex items-center gap-3 -ml-7.5">
              <button className="flex items-center gap-3 text-white font-semibold group cursor-pointer">
                <span className="w-15 h-15 rounded-full border-2 border-white/70 flex items-center justify-center group-hover:bg-white bg-[#C0392B] transition-all">
                  <Play className="w-4 h-4 fill-white group-hover:fill-green-600 transition-colors ml-0.5" />
                </span>
                {/* <span className="text-white/90 group-hover:text-white transition-colors">Play Video</span> */}
              </button>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-10">
          <img src="/logo/utsavverse-logo.png" alt="VAMXM" className="h-40 w-auto" />
        </div>
      </div>

      {/* ── RIGHT panels — stacked ── */}
      <div className="flex-1 flex flex-col">

        {/* Top right — orange with VR person */}
        <div className="flex-1 relative overflow-hidden min-h-[50vh] md:min-h-0" style={{ backgroundColor: "#F5A623" }}>
          <div className="absolute left-0 bottom-0 h-full flex items-end">
            <img src="/vr-person.png" alt="VR Experience" className="h-175 w-175 object-contain object-bottom" style={{ maxWidth: "50%" }} />
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-3/5 flex flex-col justify-center p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-6">
              We craft virtual reality experience
            </h2>
            <Link href="/about" className="self-start border-2 border-white text-white font-bold text-xs uppercase tracking-widest px-6 py-2.5 rounded-full hover:bg-white hover:text-amber-500 transition-all">
              Our Vision
            </Link>
          </div>
        </div>

        {/* Bottom right — red with VR headset */}
        <div className="flex-1 relative overflow-hidden min-h-[50vh] md:min-h-0" style={{ backgroundColor: "#8DC63F" }}>
          <div className="absolute left-0 top-0 bottom-0 w-3/5 flex flex-col justify-center p-8 sm:p-10 z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-6">
              Let your creative juice flow with VAMXM
            </h2>
            <Link href="/about" className="self-start border-2 border-white text-white font-bold text-xs uppercase tracking-widest px-6 py-2.5 rounded-full hover:bg-white hover:text-red-700 transition-all">
              Our Mission
            </Link>
          </div>
          <div className="absolute right-0 top-0 bottom-0 flex items-center justify-end pr-6">
            <img src="/vr-headset.png" alt="VR Headset" className="h-90 w-90 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
