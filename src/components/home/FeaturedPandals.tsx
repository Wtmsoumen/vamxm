import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Link from "next/link";
import CountdownSection from "./CountdownSection";
import { ArrowUpRight, Eye, MapPin } from "lucide-react";
import { famousPandals as pandals } from "@/data/famousPandals";

export default function FeaturedPandals() {
  return (
    <section
      id="pandals"
      className="relative px-5 pt-14 pb-14 sm:pt-18 sm:pb-18 md:pt-24 md:pb-50 md:px-10 lg:bg-[#00000000] bg-[#FCEDEF]"
    >
      <img src={"/FamousPandalsbg.png"} alt="FamousPandalsbg.png" className="absolute top-0 left-0 w-full h-full lg:block hidden" />
      <div className="mx-auto max-w-[1320px]">

        <AnimateOnScroll anim="up">
          <div className="text-center">
            <p className="section-kicker">Explore Kolkata</p>
            <h2 className="section-title mt-4 text-[36px] sm:text-[52px] md:text-[72px] lg:text-[80px]">
              Famous <span className="text-utsav">Pandals</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="mt-10 grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {pandals.map(({ img, name, views, location, link }, i) => (
            <AnimateOnScroll key={name} anim="up" delay={i * 100}>
              <article className="pandal-card group hover:rounded-bl-[200px]! transition-all! duration-300! bg-white hover:bg-linear-to-b! from-[#F88C21]! to-[#D3111D]!">
                <div className="p-5 sm:p-6">
                  <h3 className="section-title text-[22px] sm:text-[26px] leading-tight group-hover:text-white">
                    {name}
                  </h3>
                  <div className="mt-3 border-t border-black/10 pt-3 flex items-center gap-2 text-sm group-hover:text-white text-black/70 font-medium">
                    <span className="group-hover:text-white text-utsav flex-shrink-0"><MapPin size={14} /></span>
                    {location}
                  </div>
                </div>
                <div className="relative h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] p-2">
                  <span className="absolute right-3.5 top-3.5 rounded-full bg-utsav shadow-md px-2 py-1 text-sm font-semibold text-white flex items-center gap-2 z-10">
                    <span className="bg-white/45 rounded-full p-1"><Eye size={14} /></span>
                    {views}
                  </span>
                  <img
                    src={img}
                    alt={name}
                    className="h-full w-full object-cover rounded-xl group-hover:rounded-bl-[200px]! transition-all! duration-300!"
                  />
                  <Link
                    href={link || "#"}
                    className="bg-[#FCEDEF] invisible group-hover:visible p-2 w-1 h-1 group-hover:w-28 group-hover:h-28 absolute bottom-0 left-0 transition-all duration-300 rounded-full"
                  >
                    <div className="hover:rotate-45 transition-all duration-300 bg-linear-to-b from-[#D80117] to-[#72010C] w-full h-full rounded-full flex items-center justify-center">
                      <ArrowUpRight className="w-10 h-10" color="#ffffff" strokeWidth={1.5} />
                    </div>
                  </Link>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>

        {/* <div className="mt-8 flex justify-center gap-3">
          <span className="h-2 w-8 rounded-full bg-utsav" />
          <span className="h-2 w-2 rounded-full bg-black/30" />
          <span className="h-2 w-2 rounded-full bg-black/30" />
        </div> */}
      </div>

      <CountdownSection />
    </section>
  );
}
