"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import FeaturedPandals from "@/components/home/FeaturedPandals";
import ServicesSection from "@/components/home/ServicesSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import GallerySection from "@/components/home/GallerySection";
import MobileAppSection from "@/components/home/MobileAppSection";
import ContactSection from "@/components/home/ContactSection";
import SpImages from "@/components/home/SpImages";
import type { AboutContent } from "@/components/home/AboutSection";
import type { HomePromos } from "@/components/home/ExperienceSection";
import type { HeroBanner } from "@/components/home/HeroSection";

type HomePagePayload = {
  data?: {
    banners?: HeroBanner[];
    about_section?: AboutContent | null;
    home_promos?: HomePromos | null;
    gallery?: unknown[];
    app_downloads?: unknown[];
  };
};

export default function HomePageData() {
  const homeData = useSelector((state: RootState) => state.home.data) as HomePagePayload | null;

  console.log(homeData?.data, "homeData");

  return <>
    <HeroSection data={homeData?.data?.banners} />
    <AboutSection content={homeData?.data?.about_section} />
    <FeaturedPandals data={homeData} />
    <ServicesSection />
    <ExperienceSection promos={homeData?.data?.home_promos} />
    <GallerySection data={homeData?.data?.gallery} />
    <SpImages />
    <MobileAppSection data={homeData?.data?.app_downloads} />
    <ContactSection />
  </>;
}
