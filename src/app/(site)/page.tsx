import HeroSection from "@/components/home/HeroSection";
import FeaturedPandals from "@/components/home/FeaturedPandals";
import CountdownSection from "@/components/home/CountdownSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import ServicesSection from "@/components/home/ServicesSection";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedPandals />
      <CountdownSection />
      <ExperienceSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
