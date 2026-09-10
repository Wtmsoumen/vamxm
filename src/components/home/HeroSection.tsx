import { CalendarDays, FileText, Landmark, Monitor, ShieldLock, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section>
      <div className="relative" style={{ backgroundImage: "linear-gradient(115deg,#fff 0%,#fff 47%,#fff4e8 100%)", overflow: "hidden" }}>
        <Image src="/pandals/maa-aschen.png" alt="Background" fill className="object-cover absolute top-0 left-0 w-full h-full" />
        <div className="mx-auto grid max-w-[1450px] items-center gap-5 px-6 py-10 lg:grid-cols-[.88fr_1.12fr] lg:px-10 lg:py-12">

          {/* Left — text */}
          <div className="relative z-10">
            <div className="label mb-4 text-black hero-label">TRADITION MEETS TECHNOLOGY</div>
            <h1 className="serif max-w-[630px] text-[48px] font-semibold leading-[.96] tracking-[-0.045em] sm:text-[60px] lg:text-[70px] hero-h1">
              Experience<br /><span className="red">Durga Puja</span><br />Like Never Before
            </h1>
            <p className="mt-5 max-w-md text-[14px] font-medium leading-6 text-black hero-desc">
              Immersive experiences. Powerful digital solutions.<br />A brighter tomorrow.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 hero-btns">
              <Link href="#pandals" className="rounded-full px-6 py-3 text-[11px] font-bold text-white" style={{ background: "#df151b" }}>
                Explore Pandals &nbsp;→
              </Link>
              <Link href="#tours" className="rounded-full px-6 py-3 text-[11px] font-bold text-white" style={{ background: "#df151b" }}>
                ◉&nbsp; Watch 360°
              </Link>
            </div>
          </div>

          {/* Right — image collage + floating cards */}
          <div className="relative overflow-visible rounded-[30px] ml-20 z-10" style={{ minHeight: "430px" }}>
            {/* Image grid */}
            {/* <div className="absolute inset-0 grid grid-cols-2 gap-2 overflow-hidden rounded-[30px]">
            <img src="/pandals/pandal1.jpg" className="h-full w-full object-cover" alt="" />
            <div className="grid grid-rows-2 gap-2">
              <img src="/pandals/pandal2.jpg" className="h-full w-full object-cover" alt="" />
              <img src="/pandals/pandal3.jpg" className="h-full w-full object-cover" alt="" />
            </div>
          </div> */}

            {/* Floating service cards — top right overlay */}
            <div className="relative z-10 w-[330px] space-y-3 pt-10 pr-4 lg:pt-12">
              <div className="hero-card-1 rounded-2xl border border-red-200 p-4 shadow-xl backdrop-blur" style={{ background: "rgba(255,255,255,0.92)" }}>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-red-50 text-xl red">
                    <Monitor size={20} />
                  </span>
                  <div className="flex-1">
                    <b className="block text-xs">Website Development</b>
                    <span className="text-[12px] text-black">Build your digital presence</span>
                  </div>
                  <b className="red">→</b>
                </div>
              </div>
              <div className="hero-card-2 rounded-2xl border border-blue-200 p-4 shadow-xl backdrop-blur" style={{ background: "rgba(255,255,255,0.92)" }}>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-xl text-blue-600">
                    <Smartphone size={20} />
                  </span>
                  <div className="flex-1">
                    <b className="block text-xs">Mobile App Development</b>
                    <span className="text-[12px] text-black">Turn ideas into powerful apps</span>
                  </div>
                  <b className="text-blue-600">→</b>
                </div>
              </div>
              <div className="hero-card-3 rounded-2xl border border-emerald-200 p-4 shadow-xl backdrop-blur" style={{ background: "rgba(255,255,255,0.92)" }}>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-xl text-emerald-600">
                    <ShieldLock size={20} />
                  </span>
                  <div className="flex-1">
                    <b className="block text-xs">Cyber Security</b>
                    <span className="text-[12px] text-black">Stay secure, stay ahead</span>
                  </div>
                  <b className="text-emerald-600">→</b>
                </div>
              </div>
            </div>

            {/* UtsavVerse logo — bottom center, overlapping */}
          </div>
          <img
            src="/pandals/utsavverse-logo.png"
            alt="UtsavVerse"
            width={1920}
            height={1080}
            className="absolute left-1/2 right-1/2 bottom-0 z-2 w-110 -translate-x-1/2"
            style={{ filter: "drop-shadow(0 10px 20px rgba(255,255,255,.7))" }}
          />
          <div className="bg-linear-to-b from-transparent to-saffron/60 absolute bottom-0 left-0 z-1 h-80 w-full" />
        </div>
      </div>
      {/* Category strip */}
      <div className="border-y border-black/5 relative z-1" style={{ background: "rgba(255,255,255,0.85)" }}>
        <div className="mx-auto grid max-w-[1450px] grid-cols-3 px-4 sm:grid-cols-4">
          <Link href="#pandals" className="border-r border-black/5 py-5 text-center text-[12px] font-bold flex flex-col items-center justify-center gap-2">
            <span className="block text-lg red"><Landmark size={40} /></span>Iconic Pandals
          </Link>
          <Link href="#tours" className="border-r border-black/5 py-5 text-center text-[12px] font-bold flex flex-col items-center justify-center gap-2"><span className="block text-lg red">360°</span>Virtual Tours</Link>
          <Link href="#countdown" className="border-r border-black/5 py-5 text-center text-[12px] font-bold flex flex-col items-center justify-center gap-2"><span className="block text-lg red"><CalendarDays size={40} /></span>Puja Schedule</Link>
          {/* <Link href="#services" className="border-r border-black/5 py-5 text-center text-[12px] font-bold"><span className="block text-lg red">♧</span>Food & Culture</Link> */}
          <Link href="#about" className="py-5 text-center text-[12px] font-bold flex flex-col items-center justify-center gap-2"><span className="block text-lg red"><FileText size={40} /></span>Puja History</Link>
          {/* <Link href="#contact" className="py-5 text-center text-[12px] font-bold"><span className="block text-lg red">⌖</span>Plan Your Visit</Link> */}
        </div>
      </div>
    </section>
  );
}
