import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";

const serviceVisuals = [
  { icon: "/cyber.svg", color: "#d80117", ornament: "/ornament.svg" },
  { icon: "/AIDA.svg", color: "#27b83a", ornament: "/ornamentGreen.svg" },
  { icon: "/website.svg", color: "#FA9D00", ornament: "/ornamentOrange.svg" },
  { icon: "/digitalmarketing.svg", color: "#00a0a8", ornament: "/ornamentCobalt.svg" },
];

export default function ServicesSection() {
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

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {services.map((service, index) => {
            const visual = serviceVisuals[index];
            return (
              <AnimateOnScroll key={service.slug} anim="up" delay={index * 120}>
                <article className="service-card group relative h-full rounded-xl rounded-tr-[70px] bg-white px-6 pb-7 pt-14 shadow-sm" style={{ border: `3px solid ${visual.color}` }}>
                  <div className="absolute -top-9 right-0 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white shadow-md transition-transform duration-500 group-hover:scale-110" style={{ background: visual.color }}>
                    <Image src={visual.icon} alt="" aria-hidden="true" width={100} height={70} className="h-10 w-auto" />
                  </div>
                  <h3 className="flex min-h-20 flex-col gap-2 text-2xl font-semibold leading-tight text-black">{service.title}<img src={visual.ornament} alt="" width={120} height={14} /></h3>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-black/80">
                    {service.cardItems.map((item) => <li key={item} className="flex items-start gap-2"><BadgeCheck className="mt-1 shrink-0" fill={visual.color} stroke="#fff" size={18} aria-hidden="true" />{item}</li>)}
                  </ul>
                  <Link href={`/services/${service.slug}`} className="mt-7 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wide transition-colors hover:underline" style={{ color: visual.color }}>
                    Learn More <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </article>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
