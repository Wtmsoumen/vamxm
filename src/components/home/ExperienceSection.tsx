import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function ExperienceSection() {
  return (
    <section id="tours" className="relative overflow-hidden" style={{ minHeight: "340px" }}>
      {/* Background panoramic image */}
      <img
        src="/pandals/pandal4.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark left gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(90deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.75) 40%, rgba(10,10,10,0.2) 70%, rgba(10,10,10,0) 100%)" }}
      />

      <div className="relative mx-auto grid max-w-[1450px] h-full items-center gap-6 px-6 py-14 lg:grid-cols-[1fr_auto_auto] lg:px-10">

        {/* Left — text */}
        <AnimateOnScroll anim="left">
          <p className="label" style={{ color: "#ffffff" }}>IMMERSIVE 360° EXPERIENCE</p>
          <h2 className="serif mt-2 text-4xl font-semibold text-white leading-tight lg:text-5xl">
            Step Inside<br />the Magic
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-5 text-white">
            Experience Kolkata&apos;s iconic pandals in stunning 360° virtual tours. Feel the details, the artistry, and the devotion — from anywhere in the world.
          </p>
          <a
            href="#"
            className="mt-5 inline-block rounded-full px-6 py-3 text-[11px] font-bold text-white"
            style={{ background: "#df151b" }}
          >
            Start 360° Tour &nbsp;→
          </a>
        </AnimateOnScroll>

        {/* Center — 360° icon */}
        <AnimateOnScroll anim="scale" delay={200} className="hidden lg:flex flex-col items-center gap-2 text-white px-10">
          <div
            className="flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 border-white/60"
            style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(4px)" }}
          >
            <span className="text-2xl font-bold">360°</span>
          </div>
          <span className="text-[11px] font-semibold text-white/70">↔ &nbsp;Drag to Explore</span>
        </AnimateOnScroll>

        {/* Right — thumbnail strip */}
        <AnimateOnScroll anim="right" delay={300} className="hidden lg:flex flex-col gap-1.5">
          {["/pandals/pandal1.jpg", "/pandals/pandal2.jpg", "/pandals/pandal3.jpg", "/pandals/pandal-1.jpg"].map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="w-24 h-16 object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity"
            />
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
