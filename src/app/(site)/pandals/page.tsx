"use client";

import { AboutContent } from "@/components/home/AboutSection";
import { HomePromos } from "@/components/home/ExperienceSection";
import { HeroBanner } from "@/components/home/HeroSection";
import MobileAppSection from "@/components/home/MobileAppSection";
import PandalsList from "@/components/pandal/PandalsList";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

type HomePagePayload = {
  data?: {
    banners?: HeroBanner[];
    about_section?: AboutContent | null;
    home_promos?: HomePromos | null;
    gallery?: unknown[];
    app_downloads?: unknown[];
    section_headings?: {
      featured_pandals?: SectionHeading | null;
      services?: SectionHeading | null;
      gallery?: SectionHeading | null;
    };
  };
};

type SectionHeading = { eyebrow?: string | null; title?: string | null; highlight?: string | null; subtitle?: string | null };

export default function PandalsPage() {
  const homeData = useSelector((state: RootState) => state.home.data) as HomePagePayload | null;

  return (
    <div className="min-h-screen bg-white">
      {/* Saffron header block */}
      <div className="text-center mt-25">
        <p className="section-kicker">Virtual Experiences</p>
        <h1 className="section-title mt-4 text-[48px] sm:text-[64px] md:text-[80px]">
          Pandal <span className="display-gradient">360°</span>
        </h1>
        <div className="ornament"></div>
        <p className="mx-auto mt-6 max-w-[540px] text-base leading-7 text-black/70">
          Walk through Kolkata's iconic Durga Puja pandals from anywhere in the world — fully immersive, multi-node 360° tours.
        </p>
      </div>

      <PandalsList />
      <MobileAppSection data={homeData?.data?.app_downloads} />
    </div>
  );
}
