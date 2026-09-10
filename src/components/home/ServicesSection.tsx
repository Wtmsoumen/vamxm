import Link from "next/link";
import { ArrowRight, CheckCircle2, ArrowUpRight } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ServicesSection() {
  return (
    <>
      {/* ── Header ────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-saffron text-xs font-black uppercase tracking-[0.25em] mb-3">What We Do</p>
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 leading-none">Our Services</h2>
          </div>
          <p className="text-black text-sm leading-relaxed max-w-sm">
            End-to-end digital solutions crafted for growth, security, and immersive experience.
          </p>
        </div>
      </section>

      {/* ── 01 · Cyber Security ───────────────────────────────────── */}
      <section className="border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Content */}
          <div className="bg-white p-12 sm:p-16 flex flex-col justify-between min-h-[560px] relative border-r border-gray-100">
            <div className="absolute top-0 left-0 right-0 h-1 bg-deep-red" />
            <div>
              <span className="text-8xl font-black text-gray-100 leading-none select-none">01</span>
              <div className="w-10 h-0.5 bg-deep-red mt-4 mb-8" />
              <h3 className="text-4xl sm:text-5xl font-black text-gray-900 mb-5">Cyber Security</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
                In a world of growing cyber threats, your digital assets deserve enterprise-grade protection. We identify vulnerabilities before attackers do and fortify your infrastructure with proven security practices.
              </p>
              <ul className="space-y-3">
                {[
                  "Vulnerability assessment & penetration testing",
                  "Secure code review & architecture audit",
                  "Data encryption & privacy compliance",
                  "Network security & firewall configuration",
                  "Incident response & threat monitoring",
                ].map(p => (
                  <li key={p} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-deep-red mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/contact" className="mt-10 inline-flex items-center gap-3 bg-deep-red text-white font-black text-xs uppercase tracking-widest px-7 py-4 hover:bg-gray-900 transition-colors group w-fit">
              Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Visual */}
          <div className="bg-deep-red relative flex items-center justify-center p-12 min-h-[420px] overflow-hidden">
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 60% 40%, rgba(255,255,255,0.12) 0%, transparent 65%)" }} />
            <div className="relative z-10 w-full max-w-[360px]">
              <div className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden mb-4">
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  <span className="ml-3 text-white/30 text-[10px] font-mono">security-scan.sh</span>
                </div>
                <div className="p-5 font-mono text-xs space-y-1.5">
                  <p className="text-green-400">$ nmap -sV --script vuln target.com</p>
                  <p className="text-white/30">Starting Nmap scan...</p>
                  <p className="text-white/50">PORT&nbsp;&nbsp;&nbsp;STATE&nbsp;SERVICE</p>
                  <p className="text-white/50">80/tcp&nbsp;&nbsp;open&nbsp;&nbsp;http</p>
                  <p className="text-white/50">443/tcp open&nbsp;&nbsp;https</p>
                  <p className="text-green-400">✓ No critical CVEs found</p>
                  <p className="text-white/30">Score: <span className="text-green-400 font-bold">98/100</span></p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[["SSL/TLS", "✓"], ["XSS", "✓"], ["SQLi", "✓"]].map(([tag, status]) => (
                  <div key={tag} className="bg-white/10 border border-white/15 rounded-xl p-3 text-center">
                    <p className="text-white/50 text-[10px] font-black uppercase tracking-wider">{tag}</p>
                    <p className="text-green-400 text-sm font-black mt-1">{status}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 · Website Development ─────────────────────────────── */}
      <section className="border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Visual — left */}
          <div className="relative min-h-[420px] overflow-hidden order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=80"
              alt="Website Development"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-saffron/70 via-saffron/10 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white font-black text-lg leading-snug drop-shadow">Crafting pixel-perfect web experiences</p>
              <p className="text-white text-xs mt-1 uppercase tracking-widest">Design · Development · Deployment</p>
            </div>
          </div>

          {/* Content — right */}
          <div className="bg-white p-12 sm:p-16 flex flex-col justify-between min-h-[560px] relative border-l border-gray-100 order-1 lg:order-2">
            <div className="absolute top-0 left-0 right-0 h-1 bg-saffron" />
            <div>
              <span className="text-8xl font-black text-gray-100 leading-none select-none">02</span>
              <div className="w-10 h-0.5 bg-saffron mt-4 mb-8" />
              <h3 className="text-4xl sm:text-5xl font-black text-gray-900 mb-5">Website Development</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
                We build fast, modern, and scalable websites that look stunning and perform even better. From landing pages to full-scale web platforms, every pixel is engineered with purpose — tailored to your brand, built to convert.
              </p>
              <ul className="space-y-3">
                {[
                  "Custom responsive design & development",
                  "E-commerce & CMS platforms",
                  "Progressive Web Apps (PWA)",
                  "SEO-optimized, performance-first builds",
                  "React, Next.js & TypeScript stack",
                ].map(p => (
                  <li key={p} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-saffron mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/contact" className="mt-10 inline-flex items-center gap-3 bg-saffron text-white font-black text-xs uppercase tracking-widest px-7 py-4 hover:bg-gray-900 transition-colors group w-fit">
              Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 03 · App Development ──────────────────────────────────── */}
      <section className="border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Content — left */}
          <div className="bg-white p-12 sm:p-16 flex flex-col justify-between min-h-[560px] relative border-r border-gray-100">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
            <div>
              <span className="text-8xl font-black text-gray-100 leading-none select-none">03</span>
              <div className="w-10 h-0.5 bg-gold mt-4 mb-8" />
              <h3 className="text-4xl sm:text-5xl font-black text-gray-900 mb-5">App Development</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
                From concept to App Store — we design and develop mobile apps that users love. Whether it's native iOS/Android or a cross-platform VR application, we bring your idea to life with cutting-edge technology.
              </p>
              <ul className="space-y-3">
                {[
                  "iOS & Android native app development",
                  "Cross-platform apps with React Native",
                  "VR & AR immersive applications",
                  "360° virtual tour integrations",
                  "App Store & Play Store deployment",
                ].map(p => (
                  <li key={p} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/contact" className="mt-10 inline-flex items-center gap-3 bg-gold text-white font-black text-xs uppercase tracking-widest px-7 py-4 hover:bg-gray-900 transition-colors group w-fit">
              Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Visual — right */}
          <div className="relative min-h-[420px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80"
              alt="App Development"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gold/70 via-gold/10 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white font-black text-lg leading-snug drop-shadow">From idea to App Store — seamlessly</p>
              <p className="text-white text-xs mt-1 uppercase tracking-widest">iOS · Android · Cross-platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 · Contact Us ───────────────────────────────────────── */}
      <section className="border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left — saffron */}
          <div className="bg-saffron p-12 sm:p-16 flex flex-col justify-between min-h-[580px] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.06]" style={{
              backgroundImage: "repeating-linear-gradient(-45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
              backgroundSize: "20px 20px"
            }} />
            <div className="relative z-10">
              <p className="text-white text-xs font-black uppercase tracking-[0.3em] mb-5">04 — Contact Us</p>
              <h3 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-5">
                Ready to<br />build<br />together?
              </h3>
              <p className="text-white text-sm leading-relaxed max-w-xs">
                Whether you have a project in mind or just want to explore what's possible — we'd love to hear from you.
              </p>
            </div>
            <div className="relative z-10 flex flex-col gap-5 mt-10">
              <div>
                <p className="text-white text-[10px] uppercase tracking-[0.2em] mb-1">Email</p>
                <a href="mailto:info.vamxm@gmail.com" className="text-white text-sm font-semibold hover:text-white/70 transition-colors">
                  info.vamxm@gmail.com
                </a>
              </div>
              <div>
                <p className="text-white text-[10px] uppercase tracking-[0.2em] mb-1">Address</p>
                <p className="text-white text-sm">Howrah 711103, West Bengal</p>
              </div>
              <Link href="/contact" className="mt-2 inline-flex items-center gap-2 text-white hover:text-white text-xs font-black uppercase tracking-widest transition-colors w-fit group">
                Full contact page
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white p-12 sm:p-16 flex flex-col justify-center border-l border-gray-100">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
