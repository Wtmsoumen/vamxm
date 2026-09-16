import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-14 sm:py-20 md:py-28">
      <img src="./wellcomeVamxmbg.png" alt="" aria-hidden="true" className="w-3/4 h-full absolute -bottom-30 left-0 opacity-60 pointer-events-none md:flex hidden" />
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 sm:px-8 md:grid-cols-2 md:gap-16 md:px-10">

        <AnimateOnScroll anim="left">
          <div className="relative mx-auto w-full max-w-[480px] md:max-w-[520px]">
            <img
              src="/wellcomeVamxm.png"
              alt="Durga Puja celebration"
              className="relative z-10 w-full rounded-2xl object-cover hover:scale-105 transition-all duration-300"
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll anim="right">
          <h2 className="section-title text-[40px] sm:text-[52px] md:text-[72px] lg:text-[80px]">
            Welcome to
            <span className="display-gradient block">Vamxm</span>
          </h2>

          <p className="mt-6 text-[15px] leading-7 text-black/80">
            Celebrating Durga Puja is an emotion and no one should be deprived
            of it. The celebration starts with shopping and only ends on
            Dashami. And we are here to bring you the complete Durga Puja
            experience.
          </p>

          <p className="mt-4 text-[15px] leading-7 text-black/80">
            Shop from some of the top brands, see some of the major pandals
            of the city, offer tarpon and anjali and order bhog from your
            favourite puja pandals.
          </p>

          <a
            href="#services"
            className="mt-8 inline-flex h-[48px] items-center gap-4 rounded-full bg-utsav px-7 text-sm font-semibold text-white transition hover:bg-utsav-dark"
          >
            About More <span>→</span>
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
