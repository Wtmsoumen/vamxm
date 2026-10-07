import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
// public/ech.png public/pgr.png

export default function ExperienceSection() {
  return (
    <section id="guide" className="px-4 py-6 sm:px-6 sm:py-10 md:px-10 md:py-10">
      <div className="mx-auto grid max-w-[1320px] gap-6 lg:grid-cols-[1.15fr_1fr]">

        {/* 360° feature card */}
        <AnimateOnScroll anim="left">
          <div className="relative flex min-h-[360px] sm:min-h-[420px] flex-col justify-end sm:justify-center overflow-hidden rounded-[25px] p-7 sm:p-12 text-white transition-all duration-500 hover:scale-103">
            <img
              src="/pvt360.png"
              alt="Immersive Durga Puja experience"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent sm:bg-black/20" /> */}

            <div className="relative z-10 max-w-[380px]">
              <p className="text-xs font-semibold uppercase tracking-[2px]">Immersive 360° Experience</p>

              <h2 className="section-title mt-4 text-[32px] sm:text-[40px] md:text-[48px]">
                Pandal 360°
                <span className="block text-white">Virtual Tours</span>
              </h2>

              <p className="mt-4 max-w-[310px] text-sm sm:text-base leading-7">
                Walk through the magic, from anywhere in the world.
              </p>

              <Link
                href="/pandals"
                className="mt-6 inline-flex h-[48px] sm:h-[52px] items-center gap-4 rounded-full bg-white px-6 text-sm font-semibold text-utsav transition hover:bg-red-50"
              >
                Start 360° Tour <span>→</span>
              </Link>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Guide feature cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

          <AnimateOnScroll anim="right" delay={100}>
            <article className="relative flex min-h-[180px] sm:min-h-[200px] items-end sm:items-center overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition-all duration-500 hover:scale-103">
              <img src="/nnAI.png" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />
              <div className="relative z-10 p-5 sm:p-6">
                <h3 className="section-title text-[20px] sm:text-[28px]">Neural Networks in AI</h3>
                <p className="mt-2 text-base leading-6 text-black max-w-[350px]">
                  We're a full-service AI automation agency.
                </p>
                <a href="#pandals" className="mt-4 inline-flex items-center gap-2 rounded-full bg-utsav px-5 py-2.5 text-xs font-semibold text-white">
                  Consult Us<span>→</span>
                </a>
              </div>
            </article>
          </AnimateOnScroll>

          <AnimateOnScroll anim="right" delay={200}>
            <article id="events" className="relative flex min-h-[180px] sm:min-h-[200px] items-end sm:items-center overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition-all duration-500 hover:scale-103">
              <img src="/dfbwAInc.png" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />
              <div className="relative z-10 p-5 sm:p-6">
                <h3 className="section-title text-[20px] sm:text-[28px]">
                  Discover future business
                  <br />
                  with AI Neuro Consulting
                </h3>
                <p className="mt-2 text-base leading-6 text-black max-w-[350px]">
                  Where we merge cutting-edge AI technology with innovative solutions.
                </p>
                <a href="#gallery" className="mt-4 inline-flex items-center gap-2 rounded-full bg-utsav px-5 py-2.5 text-xs font-semibold text-white">
                  Consult Us<span>→</span>
                </a>
              </div>
            </article>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}
