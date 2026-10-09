"use client";

import Link from "next/link";
import { ArrowRight, Check, Code2, Gauge, Globe, Layers, LockKeyhole, Megaphone, Rocket, Search, Server, Shield, Smartphone, Wrench, Bug, Share2, ChartColumn, LayoutDashboard } from "lucide-react";
import type { ServiceDetail } from "@/data/services";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store";
import { fetchPublicService } from "@/store/publicContentSlice";

const featureIcons: Record<string, typeof Smartphone> = {
  smartphone: Smartphone,
  layers: Layers,
  rocket: Rocket,
  layout: LayoutDashboard,
  server: Server,
  gauge: Gauge,
  wrench: Wrench,
  search: Search,
  bug: Bug,
  lock: LockKeyhole,
  shield: Shield,
  globe: Globe,
  megaphone: Megaphone,
  share: Share2,
  "bar-chart": ChartColumn,
  code: Code2,
};

export default function ServiceDetailPage({ service: fallbackService }: { service: ServiceDetail }) {
  const dispatch = useDispatch<AppDispatch>();
  const detailState = useSelector((state: RootState) => state.publicContent.serviceDetails[fallbackService.slug]);
  useEffect(() => {
    dispatch(fetchPublicService(fallbackService.slug));
  }, [dispatch, fallbackService.slug]);

  const payload = detailState?.data as { data?: ServiceDetail } | ServiceDetail | null;
  const service = ((payload && "data" in payload ? payload.data : payload) as ServiceDetail | undefined) ?? fallbackService;

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[#fff8f4] px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40 md:px-10">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#d80117]/[0.06] blur-3xl" />
        <div className="relative mx-auto max-w-[1180px]">
          <Link href="/#services" className="text-sm font-semibold text-[#b60017] hover:underline">← All core services</Link>
          <p className="section-kicker mt-8">VAMXM Technologies · Core Services</p>
          <h1 className="section-title mt-4 max-w-4xl text-[42px] sm:text-[58px] md:text-[72px]">{service.title}</h1>
          {service.tagline && <p className="mt-5 text-xl font-semibold text-[#d80117] sm:text-2xl">{service.tagline}</p>}
          {service.description?.includes("<") ? (
            <div className="mt-5 max-w-3xl text-base leading-8 text-black/70 sm:text-lg" dangerouslySetInnerHTML={{ __html: service.description }} />
          ) : (
            <p className="mt-5 max-w-3xl text-base leading-8 text-black/70 sm:text-lg">{service.description || (service as ServiceDetail & { short_description?: string }).short_description}</p>
          )}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="red-gradient inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-semibold capitalize text-white shadow-md transition hover:brightness-110">
              {service.primaryCta ?? "Talk to our team"} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            {service.secondaryCta && <Link href={service.secondaryCta.startsWith("Explore") ? "#offerings" : "/contact"} className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-semibold text-black transition hover:border-[#d80117] hover:text-[#d80117]">{service.secondaryCta}</Link>}
            {service.tertiaryCta && <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-semibold text-black transition hover:border-[#d80117] hover:text-[#d80117]">{service.tertiaryCta}</Link>}
          </div>
        </div>
      </section>

      {service.pathway && (
        <section className="px-5 py-12 sm:px-8 md:px-10" aria-label="Learning pathway">
          <div className="mx-auto max-w-[1180px] rounded-2xl bg-[#171717] p-6 text-white sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/50">{service.title.startsWith("AI") ? "AI Learning Path" : "Cybersecurity Learning Path"}</p>
            <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {service.pathway.map((step, index) => <li key={step} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d80117] text-xs font-bold">{String(index + 1).padStart(2, "0")}</span><span className="font-semibold">{step}</span></li>)}
            </ol>
          </div>
        </section>
      )}

      <section id="offerings" className="scroll-mt-24 px-5 pb-16 pt-4 sm:px-8 sm:pb-24 md:px-10" aria-label={`${service.title} offerings`}>
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature) => {
              const Icon = featureIcons[feature.icon?.toLowerCase()] ?? Check;
              return (
                <article key={feature.id} className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_14px_38px_rgba(0,0,0,0.09)] sm:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d80117]/[0.08] text-[#d80117]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-xl font-bold leading-snug text-[#171717]">{feature.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-black/60">{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#171717] px-5 py-14 text-center text-white sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff8585]">Let’s get started</p>
          <h2 className="section-title mt-4 text-3xl sm:text-5xl">{service.primaryCta ?? `Let’s discuss ${service.title.toLowerCase()}`}</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/65">Tell us what you’re looking to learn, protect, build or grow. Our team will help you find the right next step.</p>
          <Link href="/contact" className="red-gradient mt-8 inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-semibold text-white shadow-md transition hover:brightness-110">Talk to our team <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
