"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

function serviceList(payload: unknown) {
  if (!payload || typeof payload !== "object") return [];
  const root = payload as { data?: unknown };
  return Array.isArray(root.data) ? root.data : [];
}

function serviceHref(slug: string) {
  return `/services/${slug === "website-development" ? "web-development" : slug}`;
}

const serviceVisuals = [
  { icon: "/website.svg", color: "#FA9D00", image: "/service-website-development.png", label: "Web platforms" },
  { icon: "/AIDA.svg", color: "#27b83a", image: "/service-mobile-app-development.png", label: "Mobile apps" },
  { icon: "/cyber.svg", color: "#d80117", image: "/service-cybersecurity.png", label: "Security" },
  { icon: "/digitalmarketing.svg", color: "#00a0a8", image: "/service-digital-marketing.png", label: "Growth" },
];

export default function ServicesSection() {
  const payload = useSelector((state: RootState) => state.publicContent.services.data);
  const fetchedServices = serviceList(payload) as typeof services;
  const displayedServices = fetchedServices.length ? fetchedServices : services;
  return (
    <section id="services" className="scroll-mt-24 px-4 py-8 sm:px-6 sm:py-12 md:px-10 md:py-14">
      <div className="mx-auto max-w-[1400px]">
        <AnimateOnScroll anim="up">
          <div className="text-center">
            <p className="section-kicker">Our Core Services</p>
            <h2 className="section-title mt-4 text-[30px] sm:text-[52px] md:text-[72px]">
              Building a Brighter <span className="display-gradient block">Tomorrow</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {displayedServices.map((service, index) => {
            const visual = serviceVisuals[index % serviceVisuals.length];
            return (
              <AnimateOnScroll key={service.slug} anim="up" delay={index * 120}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-[0_12px_40px_rgba(20,20,20,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(20,20,20,0.14)]">
                  <div className="relative h-36 overflow-hidden sm:h-40">
                    <Image src={visual.image} alt={`${visual.label} service`} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/5" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/20 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm">0{index + 1} / 04</span>
                    <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/15 backdrop-blur-md">
                      <Image src={visual.icon} alt="" aria-hidden="true" width={52} height={38} className="h-6 w-auto brightness-0 invert" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-bold leading-tight text-[#171717] sm:text-xl">{service.title}</h3>
                    <p className="mt-2 text-sm leading-5 text-black/65">{(service as typeof service & { short_description?: string }).short_description || service.description}</p>
                    <ul className="mt-4 space-y-2 text-sm text-black/75">
                      {service.features.slice(0, 3).map((feature) => <li key={feature.id} className="flex items-start gap-2"><BadgeCheck className="mt-0.5 shrink-0" fill={visual.color} stroke="#fff" size={16} aria-hidden="true" />{feature.title}</li>)}
                    </ul>
                    <Link href={serviceHref(service.slug)} className="mt-4 inline-flex items-center justify-between border-t border-black/10 pt-3 text-sm font-semibold text-[#171717] transition-colors hover:text-[#d80117]">
                      Explore service <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
