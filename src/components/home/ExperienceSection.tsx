import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function ExperienceSection() {
  return (
    <section id="guide" className="px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-[1320px] gap-8 lg:grid-cols-[1.15fr_1fr]">

        {/* 360° feature card */}
        <AnimateOnScroll anim="left">
          <div className="relative flex min-h-[420px] flex-col justify-center overflow-hidden rounded-[25px] bg-gradient-to-r from-[#f49625] to-[#f14b25] p-8 text-white sm:p-12">
            <img
              src="/pandals/pandal4.jpg"
              alt="Immersive Durga Puja experience"
              className="absolute inset-0 h-full w-full object-cover opacity-50"
            />

            <div className="relative z-10 max-w-[380px]">
              <p className="text-xs font-semibold uppercase tracking-[2px]">Immersive 360° Experience</p>

              <h2 className="section-title mt-5 text-[40px] sm:text-[48px]">
                Pandal 360°
                <span className="block text-white">Virtual Tours</span>
              </h2>

              <p className="mt-5 max-w-[310px] text-base leading-7">
                Walk through the magic, from anywhere in the world.
              </p>

              <Link
                href="/tour"
                className="mt-8 inline-flex h-[52px] items-center gap-4 rounded-full bg-white px-6 text-sm font-semibold text-utsav transition hover:bg-red-50"
              >
                Start 360° Tour <span>→</span>
              </Link>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Guide feature cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">

          <AnimateOnScroll anim="right" delay={100}>
            <article className="grid min-h-[200px] grid-cols-[1fr_120px] items-center overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm sm:grid-cols-[1fr_160px]">
              <div className="p-6">
                <h3 className="section-title text-[25px]">Puja Guide &amp; Routes</h3>
                <p className="mt-3 text-sm leading-6 text-black/70">
                  Plan your pandal hopping with smart routes and maps.
                </p>
                <a
                  href="#pandals"
                  className="mt-5 inline-flex items-center gap-3 rounded-full bg-utsav px-5 py-3 text-xs font-semibold text-white"
                >
                  View Guide <span>→</span>
                </a>
              </div>
              <img src="/pandals/pandal2.jpg" alt="Puja guide" className="h-full w-full object-cover" />
            </article>
          </AnimateOnScroll>

          <AnimateOnScroll anim="right" delay={200}>
            <article id="events" className="grid min-h-[200px] grid-cols-[1fr_120px] items-center overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm sm:grid-cols-[1fr_160px]">
              <div className="p-6">
                <h3 className="section-title text-[25px]">Events &amp; Cultural<br />Highlights</h3>
                <p className="mt-3 text-sm leading-6 text-black/70">
                  Discover puja events, performances and cultural programs.
                </p>
                <a
                  href="#gallery"
                  className="mt-5 inline-flex items-center gap-3 rounded-full bg-utsav px-5 py-3 text-xs font-semibold text-white"
                >
                  See What&apos;s On <span>→</span>
                </a>
              </div>
              <img src="/pandals/pandal3.jpg" alt="Cultural events" className="h-full w-full object-cover" />
            </article>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}
