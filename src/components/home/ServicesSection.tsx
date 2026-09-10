import { ChartNoAxesColumnIncreasing, Cloud, Layers, Monitor, Palette, RectangleGoggles, ShieldLock, Smartphone } from "lucide-react";
import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const moreServices = [
  { icon: ChartNoAxesColumnIncreasing, label: "Digital Marketing", sub: "Grow Your Brand" },
  { icon: Palette, label: "Branding & Design", sub: "Stand Out Creatively" },
  { icon: Cloud, label: "Cloud Solutions", sub: "Scale with Confidence" },
  { icon: RectangleGoggles, label: "AR / VR / MR / XR", sub: "Next-Gen Experiences" },
  { icon: Layers, label: "Metaverse Solutions", sub: "Build Virtual Worlds" },
  { icon: Monitor, label: "IT Consulting", sub: "Transform Your Business" },
];

export default function ServicesSection() {
  return (
    <section id="services" style={{ background: "#fffaf5" }}>
      <div className="mx-auto max-w-[1450px] px-6 py-14 lg:px-10">

        {/* Core Services */}
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <AnimateOnScroll anim="left">
            <p className="label">OUR CORE SERVICES</p>
            <h2 className="serif mt-2 text-4xl font-semibold">Digital Solutions for a <span className="red">Bigger Tomorrow</span></h2>
            <p className="mt-3 text-xs leading-5 text-slate-600">From immersive experiences to enterprise technology, we help businesses, brands and creators grow in a connected world.</p>
            <Link href="#" className="mt-5 inline-block rounded-full border px-5 py-2.5 text-[12px] font-bold red" style={{ borderColor: "#df151b" }}>View All Services &nbsp;→</Link>
          </AnimateOnScroll>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              { border: "border-red-100", iconCls: "red", Icon: Monitor, title: "Website Development", items: ["Business Websites", "E-commerce & CMS", "SEO & Performance", "Modern Tech Stack"] },
              { border: "border-blue-100", iconCls: "text-blue-500", Icon: Smartphone, title: "Mobile App Development", items: ["iOS & Android Apps", "React Native Development", "AR/VR & 360° Integrations", "App Store Deployment"] },
              { border: "border-emerald-100", iconCls: "text-emerald-500", Icon: ShieldLock, title: "Cyber Security", items: ["Vulnerability Assessment", "Penetration Testing", "Security Architecture", "Threat Monitoring"] },
            ].map(({ border, iconCls, Icon, title, items }, i) => (
              <AnimateOnScroll key={title} anim="up" delay={i * 100}>
                <div className={`service-card rounded-2xl border ${border} bg-white p-6 h-full`}>
                  <div className={`text-3xl ${iconCls}`}>
                    <Icon size={40} />
                  </div>
                  <h3 className="mt-3 text-sm font-bold">{title}</h3>
                  <ul className="mt-4 space-y-2 text-[12px] text-slate-600">
                    {items.map((item) => <li key={item}>✓ {item}</li>)}
                  </ul>
                  <Link href="#" className="mt-5 block text-[12px] font-bold red">Learn More →</Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        <hr className="w-full border-[#ffeddd] my-12" />

        {/* More Services */}
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <AnimateOnScroll anim="left">
            <p className="label">OUR EXTENDED SERVICES</p>
            <h2 className="serif mt-2 text-4xl font-semibold leading-tight">Innovative Solutions<br />Beyond Festivals</h2>
            <p className="mt-3 text-xs leading-5 text-slate-600">We deliver end-to-end digital solutions to help businesses adopt, grow and lead in the digital era.</p>
            <Link href="#" className="mt-5 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[12px] font-bold red" style={{ borderColor: "#df151b" }}>Explore More Services &nbsp;→</Link>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {moreServices.map(({ icon: Icon, label, sub }, i) => (
              <AnimateOnScroll key={label} anim="scale" delay={i * 60}>
                <div className="rounded-xl border bg-white p-6 flex flex-col gap-3 h-full">
                  <Icon size={28} className="text-slate-700" />
                  <div>
                    <p className="text-sm font-bold text-slate-800">{label}</p>
                    <p className="mt-0.5 text-[11px] text-slate-400">{sub}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
