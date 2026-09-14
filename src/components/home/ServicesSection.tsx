import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { BadgeCheck, MonitorPlayIcon, ShieldLock, TabletSmartphone } from "lucide-react";

const services = [
  {
    icon: <ShieldLock />,
    iconBg: "#d80117",
    border: "#D80117",
    learnColor: "#d80117",
    title: "Cyber\nSecurity",
    items: ["Vulnerability Assessment", "Penetration Testing", "Security Architecture", "Threat Monitoring"],
  },
  {
    icon: <TabletSmartphone />,
    iconBg: "#00bfa5",
    border: "#00C9AE",
    learnColor: "#00bfa5",
    title: "Mobile App\nDevelopment",
    items: ["iOS & Android Apps", "React Native Development", "AR/VR & 360° Integrations", "App Store Deployment"],
  },
  {
    icon: <MonitorPlayIcon />,
    iconBg: "#27b83a",
    border: "#38C045",
    learnColor: "#27b83a",
    title: "Website\nDevelopment",
    items: ["Business Websites", "E-commerce & CMS", "SEO & Performance", "Modern Tech Stack"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1320px]">

        {/* Header */}
        <AnimateOnScroll anim="up">
          <div className="text-center">
            <p className="section-kicker">Our Core Services</p>
            <h2 className="section-title mt-4 text-[44px] sm:text-[60px] md:text-[80px]">
              Building a Brighter
              <span className="display-gradient block">Tomorrow</span>
            </h2>
            <div className="ornament"></div>
          </div>
        </AnimateOnScroll>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map(({ icon, iconBg, border, learnColor, title, items }, i) => (
            <AnimateOnScroll key={title} anim="up" delay={i * 120}>
              <article
                className="service-card relative rounded-xl rounded-tr-[60px] bg-white px-7 pb-7 pt-16 shadow-sm"
                style={{ border: `2px solid ${border}` }}
              >
                <div
                  className="absolute -top-7 left-7 flex h-16 w-16 items-center justify-center rounded-full text-2xl text-white shadow-md border-white border-2"
                  style={{ background: iconBg }}
                >
                  {icon}
                </div>

                <h3 className="text-[28px] font-medium leading-tight whitespace-pre-line">{title}</h3>

                <ul className="mt-7 space-y-4 text-sm leading-6 text-black/80">
                  {items.map((item) => (
                    <li key={item} className={`flex items-center gap-1`}><BadgeCheck size={16} color={border} strokeWidth={2} />{item}</li>
                  ))}
                </ul>

                <a
                  href="#footer"
                  className="mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wide"
                  style={{ color: learnColor }}
                >
                  Learn More <span>→</span>
                </a>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
