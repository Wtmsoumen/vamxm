import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Link from "next/link";
import CountdownSection from "./CountdownSection";
import { ArrowUpRight, Eye, MapPin, PinIcon } from "lucide-react";

const pandals = [
  { img: "/pandals/pandal1.jpg", name: "Santosh Mitra Square", views: "2.1M", location: "Central Kolkata" },
  { img: "/pandals/pandal2.jpg", name: "Baghbazar Sarbojanin", views: "1.5M", location: "Central Kolkata" },
  { img: "/pandals/pandal3.jpg", name: "Ekdalia Evergreen", views: "2.1M", location: "Central Kolkata" },
];

export default function FeaturedPandals() {
  return (
    // <section className="absolute overflow-hidden bg-[#fff0f3] px-5 py-10 md:px-10 md:py-20 top-0">

    <section id="pandals" className="relative">
      <img src={"./FamousPandalsbg.png"} alt="wellcomeVamxmbg" className="w-full h-full" />
      <section className="absolute overflow-hidden px-5 py-10 md:px-10 md:py-20 top-0 w-full">
        <div className="mx-auto max-w-[1320px]">

          <AnimateOnScroll anim="up">
            <div className="text-center">
              <p className="section-kicker">Explore Kolkata</p>
              <h2 className="section-title mt-4 text-[44px] sm:text-[60px] md:text-[80px]">
                Famous <span className="text-utsav">Pandals </span>
              </h2>
              {/* <div className="ornament" /> */}
            </div>
          </AnimateOnScroll>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {pandals.map(({ img, name, views, location }, i) => (
              <AnimateOnScroll key={name} anim="up" delay={i * 100} className="">
                <article className="pandal-card group hover:rounded-bl-[250px]! transition-all! duration-300! bg-white hover:bg-linear-to-b! from-[#F88C21]! to-[#D3111D]!">
                  <div className="p-6">
                    <h3 className="section-title text-[27px] leading-tight group-hover:text-white">{name}</h3>


                    <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-4" />
                    <div className="flex items-center gap-2 text-sm group-hover:text-white text-black/70 font-medium">
                      <span className="group-hover:text-white text-utsav"><MapPin size={14} /></span> {location}
                    </div>
                  </div>
                  <div className="relative h-[280px] md:h-[340px] p-2">
                    <span className="absolute right-3.5 top-3.5 rounded-full bg-utsav shadow-md px-2 py-1 text-sm font-semibold text-white flex items-center gap-2 z-1">
                      <span className="bg-white/45 rounded-full p-1">
                        <Eye size={14} />
                      </span>
                      {views}
                    </span>
                    <img src={img} alt={name} className="h-full w-full object-cover rounded-xl group-hover:rounded-bl-[250px]! transition-all! duration-300!" />
                    <Link href={'#'} className="bg-[#FCEDEF] invisible group-hover:visible p-2 w-1 h-1 group-hover:w-30 group-hover:h-30 absolute bottom-0 left-0 transition-all duration-300 rounded-full">
                      <div className="hover:rotate-45 transition-all duration-300 bg-linear-to-b from-[#D80117] to-[#72010C] w-full h-full rounded-full flex items-center justify-center">
                        <ArrowUpRight className="w-12 h-12" color="#ffffff" strokeWidth={1.5} />
                      </div>
                    </Link>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="mt-10 flex justify-center gap-3">
            <span className="h-2 w-8 rounded-full bg-utsav"></span>
            <span className="h-2 w-2 rounded-full bg-black/30"></span>
            <span className="h-2 w-2 rounded-full bg-black/30"></span>
          </div>
        </div>
        <CountdownSection />
      </section>
    </section>
  );
}
