import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Link from "next/link";

export default function AboutSection(props: any) {
  return (
    <section id="about" className={`relative overflow-hidden ${props.forAboutPage ? " pt-14 sm:pt-20 md:pt-28" : " py-14 sm:py-20 md:py-28"}`}>
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
            VAMXM Technologies is a Kolkata-based technology company building cybersecurity skills and protection, AI capability, and digital solutions for individuals and businesses. Our work spans training and services, digital tools, marketing and web applications, through to the immersive VR experiences where we started.
          </p>

          <p className="mt-4 text-[15px] leading-7 text-black/80">
            We believe technology creates value when people know how to use it well. We bring training, services and products together under one roof, and act as a long-term partner to our clients.
          </p>

          {props.forAboutPage ? null : <Link
            href="/about"
            className="mt-8 inline-flex h-[48px] items-center gap-4 rounded-full bg-utsav px-7 text-sm font-semibold text-white transition hover:bg-utsav-dark"
          >
            About More <span>→</span>
          </Link>}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
