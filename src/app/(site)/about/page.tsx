import ContactSection from "@/components/home/ContactSection";
import MobileAppSection from "@/components/home/MobileAppSection";
import Image from "next/image";
import Link from "next/link";
import wellcomeVamxm from "../../../../public/wellcomeVamxm.png"
import { ArrowUpRight, BrainCircuit, BriefcaseBusiness, Globe2, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

const services = [
  {
    title: "Cybersecurity Training and Services",
    description: "Hands-on, job-oriented training in networking, cybersecurity fundamentals and Security Operations Centre (SOC L1–L2) practice. We also offer cybersecurity awareness programmes, advisory and protection services for individuals, institutions and businesses.",
    icon: ShieldCheck,
  },
  {
    title: "AI Services and Training",
    description: "Practical AI tools training, workshops and business-leader programmes, along with AI-enabled workflows and solutions that save time and improve productivity.",
    icon: BrainCircuit,
  },
  {
    title: "Digital Tools",
    description: "Custom business tools for quotations, billing, tracking and internal operations, built around how our clients actually work.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Digital Marketing",
    description: "Brand building, content, social media and performance-driven campaigns that turn visibility into growth.",
    icon: Sparkles,
  },
  {
    title: "Web and App Development",
    description: "Websites, web applications and custom software that are fast, secure and easy to use.",
    icon: Globe2,
  },
  {
    title: "Virtual Reality (VR/AR/MR/XR)",
    description: "VR walkthroughs, tourism, training, advertising and 360° experiences for schools, media, healthcare, engineering, retail and real estate.",
    icon: HeartHandshake,
  },
  {
    title: "Everything Digital",
    description: "Our clients’ needs rarely fit one box. We bring together the right mix of technology, training and strategy for whatever they are trying to build, protect or grow.",
    icon: ArrowUpRight,
  },
];

const reasons = [
  "Practical, hands-on training built from real experience, not just theory",
  "One partner for security, AI, marketing, web and immersive technology",
  "Quality of service and support as our core promise",
  "Solutions designed to be affordable, scalable and deliverable globally",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[#fff8f4] px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-36 md:px-10">
        <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[#d80117]/[0.06] blur-3xl" />
        <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="section-kicker">About Us · Mission · Vision · Immersive Durga Puja</p>
            <h1 className="section-title mt-5 text-[42px] sm:text-[58px] md:text-[76px]">
              Technology with <span className="display-gradient">purpose.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-black/70 sm:text-lg">
              VAMXM Technologies is a Kolkata-based technology company building cybersecurity skills and protection, AI capability, and digital solutions for individuals and businesses. Our work spans training and services, digital tools, marketing and web applications, through to the immersive VR experiences where we started.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-black/70 sm:text-lg">
              We believe technology creates value when people know how to use it well. We bring training, services and products together under one roof, and act as a long-term partner to our clients.
            </p>
            <Link href="/contact" className="red-gradient mt-8 inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-semibold text-white shadow-md transition hover:brightness-110">
              Talk to our team <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Image src={wellcomeVamxm} alt="VAMXM Technologies" width={400} height={400} className="w-full h-auto object-contain" priority />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24 md:px-10" aria-labelledby="what-we-do">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-3xl">
            <p className="section-kicker">What We Do</p>
            <h2 id="what-we-do" className="section-title mt-4 text-[38px] sm:text-[56px]">One partner, <span className="display-gradient">many possibilities.</span></h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, description, icon: Icon }, index) => (
              <article key={title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-[#d80117]">{String(index + 1).padStart(2, "0")}</span>
                  <Icon className="h-6 w-6 text-[#d80117]" strokeWidth={1.7} aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#151515]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/65">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#151515] px-5 py-16 text-white sm:px-8 sm:py-24 md:px-10">
        <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff8585]">Our Mission</p>
            <h2 className="section-title mt-4 text-4xl sm:text-5xl">Make people and businesses <span className="text-[#ff8585]">future-ready.</span></h2>
            <p className="mt-6 leading-8 text-white/70">
              To make individuals and businesses secure, skilled and future-ready through cybersecurity protection and training, AI capability, and practical digital tools, marketing, web and immersive solutions. We aim to turn learners into job-ready professionals and entrepreneurs, help organisations work smarter and more safely, and partner with technology companies to bring complete solutions onto a single platform.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff8585]">Our Vision</p>
            <h2 className="section-title mt-4 text-4xl sm:text-5xl">A safer, more <span className="text-[#ff8585]">capable digital world.</span></h2>
            <p className="mt-6 leading-8 text-white/70">
              To be a trusted Indian technology company bringing cybersecurity, AI and digital innovation together—so every business can grow with confidence, every learner can find a career path, and every community can participate in the digital world safely and meaningfully. We want to help businesses protect, promote and scale quickly and cost-effectively, with quality products, training and service.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24 md:px-10">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="section-kicker">Why VAMXM</p>
            <h2 className="section-title mt-4 text-[40px] sm:text-[56px]">Built around <span className="display-gradient">your real needs.</span></h2>
            <ul className="mt-8 space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex gap-3 text-sm leading-7 text-black/70 sm:text-base">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d80117] text-xs text-white">✓</span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>
          <article className="rounded-3xl bg-[#fff3e9] p-7 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d80117]">A VAMXM initiative</p>
            <h2 className="section-title mt-4 text-4xl sm:text-5xl">Cyber Sanskar</h2>
            <p className="mt-5 text-lg font-semibold text-black/80">“Wisdom Over Freedom”</p>
            <p className="mt-4 leading-8 text-black/65">
              Cyber Sanskar is our cyber-awareness initiative. Guided by the belief “Wisdom Over Freedom,” it promotes safe, responsible and informed digital behaviour, blending Indian cultural values with modern cyber thinking.
            </p>
          </article>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f8f4f0] px-5 py-16 sm:px-8 sm:py-24 md:px-10">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="section-kicker">Since 2022 · Immersive Durga Puja</p>
            <h2 className="section-title mt-4 text-[40px] sm:text-[58px]">Bringing Kolkata’s <span className="display-gradient">Puja to the world.</span></h2>
            <p className="mt-6 leading-8 text-black/70">
              Since 2022, VAMXM has been taking Kolkata’s Durga Puja beyond the city through immersive 360° experiences. What began as a pioneering experiment now covers 13 Kolkata pandals, with viewership growing from 1.5 lakh to over 1 million views.
            </p>
            <p className="mt-4 leading-8 text-black/70">
              The platform shows what VAMXM stands for: using technology to celebrate culture. Anyone in the world—including the diaspora and those who cannot travel—can walk through the art, architecture and devotion of the pandals as if they were there. It gives Puja committees a wider stage and brands a meaningful cultural audience.
            </p>
            <p className="mt-4 leading-8 text-black/70">
              Each year we add new pandals, richer experiences and stronger partnerships. The platform also carries our Immersive Partner Awards, tied to Vijaya Dashami, recognising the partners who help bring this experience to the world.
            </p>
            <Link href="/pandals" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#d80117] hover:gap-3 transition-all">Explore the pandals <span aria-hidden="true">→</span></Link>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl bg-[#d80117] p-8 text-white sm:min-h-[420px] sm:p-10">
            <Image src="/pandals/pandal1.jpg" alt="Immersive view of a Kolkata Durga Puja pandal" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover opacity-55" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
            <div className="absolute inset-x-8 bottom-8 sm:inset-x-10 sm:bottom-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">Culture, experienced together</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/35 bg-black/20 px-4 py-2 text-sm backdrop-blur">13 pandals</span>
                <span className="rounded-full border border-white/35 bg-black/20 px-4 py-2 text-sm backdrop-blur">1M+ views</span>
                <span className="rounded-full border border-white/35 bg-black/20 px-4 py-2 text-sm backdrop-blur">360° experiences</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MobileAppSection />
      <ContactSection />
    </main>
  );
}
