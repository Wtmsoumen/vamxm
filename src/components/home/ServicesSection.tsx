import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { BadgeCheck, MonitorPlayIcon, ShieldLock, TabletSmartphone } from "lucide-react";
import Image from "next/image";
// public/ornamentCobalt.svg public/ornamentGreen.svg

const services = [
  {
    icon: "/cyber.svg",
    iconBg: "#d80117",
    iconBg2: "#d80117",
    border: "#D80117",
    learnColor: "#d80117",
    title: "Cyber\nSecurity",
    titleUnder: "/ornament.svg",
    items: ["Vulnerability Assessment", "Penetration Testing", "Security Architecture", "Threat Monitoring"],
  },
  {
    icon: "/mobileApp.svg",
    iconBg: "#00bfa5",
    iconBg2: "#00bfa5",
    border: "#00C9AE",
    learnColor: "#00bfa5",
    title: "Mobile App\nDevelopment",
    titleUnder: "/ornamentCobalt.svg",
    items: ["iOS & Android Apps", "React Native Development", "AR/VR & 360° Integrations", "App Store Deployment"],
  },
  {
    icon: "/website.svg",
    iconBg: "#27b83a",
    iconBg2: "#27b83a",
    border: "#38C045",
    learnColor: "#27b83a",
    title: "Website\nDevelopment",
    titleUnder: "/ornamentGreen.svg",
    items: ["Business Websites", "E-commerce & CMS", "SEO & Performance", "Modern Tech Stack"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="px-5 py-10 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1320px]">

        {/* Header */}
        <AnimateOnScroll anim="up">
          <div className="text-center">
            <p className="section-kicker">Our Core Services</p>
            <h2 className="section-title mt-4 text-[36px] sm:text-[60px] md:text-[80px]">
              Building a Brighter
              <span className="display-gradient block">Tomorrow</span>
            </h2>
            {/* <div className="ornament"></div> */}
          </div>
        </AnimateOnScroll>

        {/* Cards */}
        <div className="mt-14 grid gap-8 grid-cols-1 md:grid-cols-3">
          {services.map(({ icon, iconBg, border, learnColor, title, titleUnder, items }, i) => (
            <AnimateOnScroll key={title} anim="up" delay={i * 120}>
              <article
                className="service-card relative rounded-xl rounded-tr-[80px] bg-white px-7 pb-7 pt-16 shadow-sm group"
                style={{ border: `4px solid ${border}` }}
              >
                <div
                  className="absolute -top-12 right-0 flex h-28 w-28 items-center justify-center rounded-full text-2xl text-white shadow-md border-white border-4 group-hover:scale-120 transition-all duration-500"
                  style={{ background: iconBg }}
                >
                  <Image src={icon} alt={title} width={192} height={108} className="w-auto h-12" />

                </div>

                <h3 className="text-[32px] font-medium leading-tight whitespace-pre-line flex flex-col gap-2">
                  {title}
                  <img src={titleUnder} alt="titleUnder" width={133} height={108} />
                </h3>

                <ul className="mt-7 space-y-4 text-base leading-6 text-black/80">
                  {items.map((item) => (
                    <li key={item} className={`flex items-center gap-1`}><BadgeCheck fill={border} stroke={"#ffffff"} size={20} strokeWidth={2} />{item}</li>
                  ))}
                </ul>

                <a
                  href="#footer"
                  className="mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wide group"
                  style={{ color: learnColor }}
                >
                  Learn More <span className="group-hover:translate-x-1 transition-all duration-300">→</span>
                </a>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
