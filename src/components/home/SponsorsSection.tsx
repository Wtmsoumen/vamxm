"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import usePublicSponsors from "@/hooks/usePublicSponsors";

const fallbackSponsors = [
  { name: "Bengal Heritage", color: "#FF6B00" },
  { name: "Kolkata Times", color: "#F39C12" },
  { name: "Puja Bazar", color: "#E74C3C" },
  { name: "Eastern Railways", color: "#FF6B00" },
  { name: "Mishti Hub", color: "#F39C12" },
  { name: "Ananda Bazaar", color: "#E74C3C" },
];

export default function SponsorsSection() {
  const sponsors = usePublicSponsors();
  const displayedSponsors = sponsors.length ? sponsors : fallbackSponsors;

  return (
    <section className="bg-zinc-950 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-saffron">Our Supporters</p>
          <h2 className="text-3xl font-bold text-white">Proud Sponsors</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {displayedSponsors.map((sponsor, index) => {
            const hasLogo = "logo" in sponsor && !!sponsor.logo;
            const color = "color" in sponsor ? sponsor.color : "#FF6B00";
            const href = "website" in sponsor ? sponsor.website : "#";
            const card = (
              <>
                {hasLogo ? (
                  <span className="relative flex h-12 w-full items-center justify-center">
                    <Image src={sponsor.logo} alt={`${sponsor.name} logo`} fill sizes="(max-width: 640px) 45vw, (max-width: 1024px) 28vw, 16vw" className="object-contain" />
                  </span>
                ) : (
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold text-white" style={{ background: `${color}30`, color }}>
                    {sponsor.name[0]}
                  </span>
                )}
                <span className="text-center text-xs text-white/60 transition-colors group-hover:text-white">{sponsor.name}</span>
                <ExternalLink className="h-3 w-3 text-white/20 transition-colors group-hover:text-saffron" />
              </>
            );

            return href !== "#" ? (
              <a key={"id" in sponsor ? sponsor.id : `${sponsor.name}-${index}`} href={href} target="_blank" rel="noopener noreferrer" className="glass group flex flex-col items-center justify-center gap-2 rounded-xl p-5 transition-all hover:border-saffron/40">
                {card}
              </a>
            ) : (
              <Link key={"id" in sponsor ? sponsor.id : `${sponsor.name}-${index}`} href="#" className="glass group flex flex-col items-center justify-center gap-2 rounded-xl p-5 transition-all hover:border-saffron/40">
                {card}
              </Link>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-white/30">
          Interested in sponsoring? <Link href="/contact" className="text-saffron hover:underline">Get in touch</Link>
        </p>
      </div>
    </section>
  );
}
