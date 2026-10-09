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

export default function HomePageData() {
  const homeData = useSelector((state: RootState) => state.home.data) as any;

  console.log(homeData?.data, "homeData");

  return <>
    <HeroSection data={homeData?.data?.banners} />
    <AboutSection />
    <FeaturedPandals data={homeData} />
    <ServicesSection />
    <ExperienceSection />
    <GallerySection data={homeData?.data?.gallery} />
    <SpImages />
    <MobileAppSection data={homeData?.data?.app_downloads} />
    <ContactSection />
  </>;
}
