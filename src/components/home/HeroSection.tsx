"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import { services as defaultServices } from "@/data/services";
import { BrainCircuit, Code2, Globe2, Megaphone, ShieldCheck, Smartphone, type LucideIcon } from "lucide-react";

type StripService = { id?: number | string; slug?: string; title?: string };
export type HeroBanner = { image?: string; title?: string; button_url?: string; button_text?: string };

const stripVisuals: Record<string, { icon: LucideIcon; color: string }> = {
  "website-development": { icon: Globe2, color: "#fa9d00" },
  "web-development": { icon: Code2, color: "#fa9d00" },
  "mobile-app-development": { icon: Smartphone, color: "#00bfa5" },
  "cyber-security": { icon: ShieldCheck, color: "#d80117" },
  cybersecurity: { icon: ShieldCheck, color: "#d80117" },
  "digital-marketing": { icon: Megaphone, color: "#38c045" },
  ai: { icon: BrainCircuit, color: "#00a0a8" },
  "artificial-intelligence": { icon: BrainCircuit, color: "#00a0a8" },
  "ai-driven-agency": { icon: BrainCircuit, color: "#00a0a8" },
};

const fallbackVisuals = [
  { icon: Globe2, color: "#d80117" },
  { icon: Smartphone, color: "#00bfa5" },
  { icon: ShieldCheck, color: "#fa9d00" },
  { icon: Megaphone, color: "#38c045" },
];

function getServiceSlug(service: { slug?: unknown; title?: unknown }) {
  const rawSlug = typeof service.slug === "string" ? service.slug : typeof service.title === "string" ? service.title : "service";
  return rawSlug.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function serviceHref(slug: string) {
  return `/services/${slug === "website-development" ? "web-development" : slug}`;
}

function getServiceVisual(service: StripService, index: number) {
  const slug = getServiceSlug(service);
  const title = typeof service.title === "string" ? service.title.toLowerCase() : "";
  const identity = `${slug} ${title}`;
  const matched = stripVisuals[slug]
    ?? (identity.includes("cyber") || identity.includes("security") ? stripVisuals["cyber-security"] : undefined)
    ?? (identity.includes("artificial") || identity.includes(" ai ") || identity.startsWith("ai ") || identity.includes("intelligence") ? stripVisuals.ai : undefined)
    ?? (identity.includes("mobile") ? stripVisuals["mobile-app-development"] : undefined)
    ?? (identity.includes("market") || identity.includes("growth") ? stripVisuals["digital-marketing"] : undefined)
    ?? (identity.includes("web") || identity.includes("website") || identity.includes("development") ? stripVisuals["website-development"] : undefined);

  return matched ?? fallbackVisuals[index % fallbackVisuals.length];
}

function readServices(payload: unknown): StripService[] {
  if (!payload || typeof payload !== "object") return [];
  const root = payload as { data?: unknown };
  const nested = root.data;
  const records = Array.isArray(nested)
    ? nested
    : nested && typeof nested === "object" && Array.isArray((nested as { data?: unknown }).data)
      ? (nested as { data: unknown[] }).data
      : [];
  return records.filter((record): record is StripService => !!record && typeof record === "object");
}

export default function HeroSection({ data }: { data?: HeroBanner[] }) {
  const servicesPayload = useSelector((state: RootState) => state.publicContent.services.data);
  const dynamicServices = readServices(servicesPayload);
  const stripServices = (dynamicServices.length ? dynamicServices : defaultServices).slice(0, 4);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const banners = Array.isArray(data) ? data : [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  console.log(banners, "banners__");

  return (
    <section className="relative pt-24 sm:pt-28 md:min-h-[900px] md:pt-[220px]">
      <div className="h-full w-3/4 bg-linear-to-r from-white via-white/90 to-transparent absolute left-0 top-0 z-10" />
      {banners.length ? banners.map((item, index: number) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(255,255,255,.04), transparent), url('${item.image}')`,
            backgroundPosition: "center top",
            backgroundSize: "cover",
          }}
        />
      )) : null}

      <div className="relative z-10 grid">
        {banners.length ? banners.map((item, index) => (<div
          key={index}
          className={`col-start-1 row-start-1 transition-opacity duration-1000 ease-in-out px-4 sm:px-6 md:px-10 ${index === currentImageIndex ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        >
          <div className="relative z-10 mx-auto max-w-[1400px]">
            <div className="max-w-[750px]">

              <h1 className="section-title text-[clamp(2rem,8vw,3.5rem)] sm:text-[56px] md:text-[90px] hero-h1 capitalize">
                {(item?.title || "").split(" ")[0]}
                <span className="display-gradient block capitalize">{(item?.title || "").split(" ").slice(1, 3).join(" ")}</span>
              </h1>

              <p className="section-title mt-2 text-[clamp(1.35rem,6vw,2.375rem)] md:text-[67px] hero-desc capitalize">
                {(item?.title || "").split(" ").slice(3).join(" ")}
              </p>

              <p className="mt-4 max-w-[650px] text-sm md:text-[19px] hero-desc text-black">
                Explore Kolkata&apos;s iconic pandals with immersive 360° tours,
                real-time updates and a complete puja guide — all in one place.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 hero-btns">
                <Link
                  href={item.button_url || "/pandals"}
                  className="red-gradient inline-flex h-12 sm:h-[54px] items-center justify-center rounded-full px-6 sm:px-8 text-xs sm:text-sm font-semibold text-white shadow-md transition hover:brightness-110"
                >
                  {item.button_text || "Explore"} <span className="ml-3">→</span>
                </Link>
                {/* <a
                  href="#guide"
                  className="inline-flex h-12 sm:h-[54px] items-center justify-center gap-3 rounded-full border border-utsav bg-white px-5 sm:px-6 text-xs sm:text-sm font-semibold text-black transition hover:bg-red-50"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-utsav text-white text-xs">▶</span>
                  Watch Video
                </a> */}
              </div>
            </div>
          </div>
        </div>)) : null}
      </div>

      {/* Service strip */}
      <div className="relative mt-10 px-4 pb-10 sm:pb-0 md:absolute md:bottom-0 md:left-0 md:mt-0 md:-mb-18 md:w-full md:px-6 z-20 hero-strip">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 overflow-hidden rounded-[19px] gap-2 sm:gap-0 shadow-lg lg:grid-cols-4">
          {stripServices.map((service: { id?: string | number; slug?: string; title?: string }, index: number) => {
            const slug = getServiceSlug(service);
            const visual = getServiceVisual(service, index);
            const Icon = visual.icon;
            return (
              <Link
                key={service.id ?? slug}
                href={serviceHref(slug)}
                className="flex min-w-0 items-center justify-center gap-3 rounded-[19px] px-3 py-4 text-white transition brightness-100 hover:brightness-110 sm:justify-start sm:gap-4 sm:rounded-none sm:py-6 md:px-6 lg:px-5 xl:px-8"
                style={{ background: `linear-gradient(180deg, ${visual.color}, color-mix(in srgb, ${visual.color} 72%, #111))` }}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 sm:h-14 sm:w-14">
                  <Icon className="h-6 w-6 text-white sm:h-7 sm:w-7" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="line-clamp-2 text-center text-xs font-medium leading-4 sm:text-left sm:text-sm sm:leading-5 lg:text-base">
                  {service.title ?? "Service"}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
