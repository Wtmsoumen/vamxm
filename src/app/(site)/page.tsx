// "use client"
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import FeaturedPandals from "@/components/home/FeaturedPandals";
import CountdownSection from "@/components/home/CountdownSection";
import ServicesSection from "@/components/home/ServicesSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import GallerySection from "@/components/home/GallerySection";
import MobileAppSection from "@/components/home/MobileAppSection";
import ContactSection from "@/components/home/ContactSection";
import { getPublicHome } from "@/lib/publicApi";
import Slider from "react-slick";
import SpImages from "@/components/home/SpImages";
// import { useEffect } from "react";

export default async function HomePage() {
  const homeData: any = await getPublicHome();
  console.log(homeData?.data, "__homeData__");

  return (
    <>
      <HeroSection data={homeData?.data?.banners} />
      <AboutSection />
      <FeaturedPandals data={homeData} />
      {/* <CountdownSection /> */}
      <ServicesSection />
      <ExperienceSection />
      <GallerySection data={homeData?.data?.gallery} />
      {/* sponsers image auto scroll */}
      <SpImages />
      <MobileAppSection data={homeData?.data?.app_downloads} />
      <ContactSection />
    </>
  );
}
