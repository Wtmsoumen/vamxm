import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import FeaturedPandals from "@/components/home/FeaturedPandals";
import ServicesSection from "@/components/home/ServicesSection";
import CreativeWork from "@/components/home/CreativeWork";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* <CreativeWork /> */}
      <FeaturedPandals />
      <ExperienceSection />
      <ServicesSection />
    </>
  );
}
