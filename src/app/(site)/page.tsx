import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import FeaturedPandals from "@/components/home/FeaturedPandals";
import CountdownSection from "@/components/home/CountdownSection";
import ServicesSection from "@/components/home/ServicesSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import GallerySection from "@/components/home/GallerySection";
import MobileAppSection from "@/components/home/MobileAppSection";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedPandals />
      {/* <CountdownSection /> */}
      <ServicesSection />
      <ExperienceSection />
      <GallerySection />
      <MobileAppSection />
      <ContactSection />
    </>
  );
}
