import { Box, ChartNoAxesColumnIncreasing, Cloud, GraduationCap, Layers, Monitor, Palette, Phone, RectangleGoggles, ShieldLock, Smartphone } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section id="services" style={{ background: "#fffaf5" }}>
      <div className="mx-auto max-w-[1450px] px-6 py-14 lg:px-10">

        {/* Core Services */}
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <div>
            <p className="label">OUR CORE SERVICES</p>
            <h2 className="serif mt-2 text-4xl font-semibold">Digital Solutions for a <span className="red">Bigger Tomorrow</span></h2>
            <p className="mt-3 text-xs leading-5 text-slate-600">From immersive experiences to enterprise technology, we help businesses, brands and creators grow in a connected world.</p>
            <Link href="#" className="mt-5 inline-block rounded-full border px-5 py-2.5 text-[12px] font-bold red" style={{ borderColor: "#df151b" }}>View All Services &nbsp;→</Link>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="service-card rounded-2xl border border-red-100 bg-white p-6">
              <div className="text-3xl red">
                <Monitor size={40} />
              </div>
              <h3 className="mt-3 text-sm font-bold">Website Development</h3>
              <ul className="mt-4 space-y-2 text-[12px] text-slate-600">
                <li>✓ Business Websites</li>
                <li>✓ E-commerce &amp; CMS</li>
                <li>✓ SEO &amp; Performance</li>
                <li>✓ Modern Tech Stack</li>
              </ul>
              <Link href="#" className="mt-5 block text-[12px] font-bold red">Learn More →</Link>
            </div>
            <div className="service-card rounded-2xl border border-blue-100 bg-white p-6">
              <div className="text-3xl text-blue-500">
                <Smartphone size={40} />
              </div>
              <h3 className="mt-3 text-sm font-bold">Mobile App Development</h3>
              <ul className="mt-4 space-y-2 text-[12px] text-slate-600">
                <li>✓ iOS &amp; Android Apps</li>
                <li>✓ React Native Development</li>
                <li>✓ AR/VR &amp; 360° Integrations</li>
                <li>✓ App Store Deployment</li>
              </ul>
              <Link href="#" className="mt-5 block text-[12px] font-bold red">Learn More →</Link>
            </div>
            <div className="service-card rounded-2xl border border-emerald-100 bg-white p-6">
              <div className="text-3xl text-emerald-500">
                <ShieldLock size={40} />
              </div>
              <h3 className="mt-3 text-sm font-bold">Cyber Security</h3>
              <ul className="mt-4 space-y-2 text-[12px] text-slate-600">
                <li>✓ Vulnerability Assessment</li>
                <li>✓ Penetration Testing</li>
                <li>✓ Security Architecture</li>
                <li>✓ Threat Monitoring</li>
              </ul>
              <Link href="#" className="mt-5 block text-[12px] font-bold red">Learn More →</Link>
            </div>
          </div>
        </div>
        <hr className="w-full border-[#ffeddd] my-12" />
        {/* More Services */}
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <div>
            <p className="label">OUR EXTENDED SERVICES</p>
            <h2 className="serif mt-2 text-4xl font-semibold leading-tight">Innovative Solutions<br />Beyond Festivals</h2>
            <p className="mt-3 text-xs leading-5 text-slate-600">We deliver end-to-end digital solutions to help businesses adopt, grow and lead in the digital era.</p>
            <Link href="#" className="mt-5 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[12px] font-bold red" style={{ borderColor: "#df151b" }}>Explore More Services &nbsp;→</Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              { icon: ChartNoAxesColumnIncreasing, label: "Digital Marketing", sub: "Grow Your Brand" },
              { icon: Palette, label: "Branding & Design", sub: "Stand Out Creatively" },
              { icon: Cloud, label: "Cloud Solutions", sub: "Scale with Confidence" },
              { icon: RectangleGoggles, label: "AR / VR / MR / XR", sub: "Next-Gen Experiences" },
              { icon: Layers, label: "Metaverse Solutions", sub: "Build Virtual Worlds" },
              { icon: Monitor, label: "IT Consulting", sub: "Transform Your Business" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="rounded-xl border bg-white p-6 flex flex-col gap-3">
                <Icon size={28} className="text-slate-700" />
                <div>
                  <p className="text-sm font-bold text-slate-800">{label}</p>
                  <p className="mt-0.5 text-[11px] text-slate-400">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
