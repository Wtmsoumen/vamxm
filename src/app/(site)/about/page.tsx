"use client";
import ContactSection from "@/components/home/ContactSection";
import MobileAppSection from "@/components/home/MobileAppSection";
import Image from "next/image";
import Link from "next/link";
import wellcomeVamxm from "../../../../public/wellcomeVamxm.png"
import { ArrowUpRight, BrainCircuit, BriefcaseBusiness, Globe2, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import AboutSection, { AboutContent } from "@/components/home/AboutSection";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import usePublicAboutUs from "@/hooks/usePublicAboutUs";

const services = [
  {
    title: "Cybersecurity Training and Services",
    description: "Hands-on, job-oriented training in networking, cybersecurity fundamentals and Security Operations Centre (SOC L1–L2) practice. We also offer cybersecurity awareness programmes, advisory and protection services for individuals, institutions and businesses.",
    icon: ShieldCheck,
  },
  {
    title: "AI Services and Training",
    description: "Practical AI tools training, workshops and business-leader programmes, along with AI-enabled workflows and solutions that save time and improve productivity.",
    icon: BrainCircuit,
  },
  {
    title: "Digital Tools",
    description: "Custom business tools for quotations, billing, tracking and internal operations, built around how our clients actually work.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Digital Marketing",
    description: "Brand building, content, social media and performance-driven campaigns that turn visibility into growth.",
    icon: Sparkles,
  },
  {
    title: "Web and App Development",
    description: "Websites, web applications and custom software that are fast, secure and easy to use.",
    icon: Globe2,
  },
  {
    title: "Virtual Reality (VR/AR/MR/XR)",
    description: "VR walkthroughs, tourism, training, advertising and 360° experiences for schools, media, healthcare, engineering, retail and real estate.",
    icon: HeartHandshake,
  },
  {
    title: "Everything Digital",
    description: "Our clients’ needs rarely fit one box. We bring together the right mix of technology, training and strategy for whatever they are trying to build, protect or grow.",
    icon: ArrowUpRight,
  },
];

const reasons = [
  "Practical, hands-on training built from real experience, not just theory",
  "One partner for security, AI, marketing, web and immersive technology",
  "Quality of service and support as our core promise",
  "Solutions designed to be affordable, scalable and deliverable globally",
];

type HomePagePayload = {
  data?: {
    about_section?: AboutContent | null;
  };
};

export default function AboutPage() {
  const homeData = useSelector((state: RootState) => state.home.data) as HomePagePayload | null;
  const aboutContent = usePublicAboutUs();

  return (
    <main className="min-h-screen bg-white">
      <AboutSection content={homeData?.data?.about_section} forAboutPage={true} />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-10 py-4 sm:py-7 md:py-14">
        <div dangerouslySetInnerHTML={{ __html: aboutContent?.content || "" }} />
      </div>
      <MobileAppSection />
      <ContactSection />
    </main>
  );
}
