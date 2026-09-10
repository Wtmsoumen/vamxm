import Link from "next/link";
import { Lightbulb, Target, Heart, ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-white border-t border-gray-100">

      {/* ── Main about block ─────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left col — text */}
          <div className="lg:col-span-7">
            <p className="text-saffron text-xs font-black uppercase tracking-[0.3em] mb-6">About Us</p>

            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 leading-[0.9] mb-8">
              We are<br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #FF6B00" }}>
                VAMXM
              </span>
            </h2>

            <div className="w-16 h-1 bg-saffron mb-8" />

            <p className="text-gray-500 text-base leading-relaxed mb-4 max-w-lg">
              VAMXM's vision is to create a seamless immersive market that empowers every business to thrive — and to be the pioneers who define what's next in virtual experience.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-lg">
              From 360° virtual pandal tours to cutting-edge VR and cybersecurity solutions, we craft digital experiences that connect brands with people in ways never seen before.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 bg-gray-900 text-white font-black text-xs uppercase tracking-widest px-8 py-4 hover:bg-saffron transition-colors group"
              >
                Know More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-gray-200 text-gray-600 font-black text-xs uppercase tracking-widest px-8 py-4 hover:border-saffron hover:text-saffron transition-colors"
              >
                Work With Us
              </Link>
            </div>
          </div>

          {/* Right col — visual */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-sm mx-auto">
              {/* Background circle */}
              <div className="absolute inset-0 rounded-full scale-110" style={{
                background: "radial-gradient(ellipse, rgba(255,107,0,0.12) 0%, transparent 70%)"
              }} />
              {/* Logo */}
              <div className="relative z-10 bg-white border border-gray-100 rounded-3xl p-12 shadow-xl shadow-orange-100/80 text-center">
                <img src="/logo/vamxm-stacked.png" alt="VAMXM" className="h-32 w-auto mx-auto mb-6 object-contain" />
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="h-px w-6 bg-saffron/40" />
                  <span className="text-saffron text-[10px] font-black uppercase tracking-[0.4em]">Est. 2022</span>
                  <span className="h-px w-6 bg-saffron/40" />
                </div>
                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                  {[["10+", "Clients"], ["20+", "Projects"], ["1000+", "Resources"]].map(([num, label]) => (
                    <div key={label} className="text-center">
                      <p className="text-xl font-black text-gray-900">{num}</p>
                      <p className="text-gray-400 text-[10px] uppercase tracking-wider mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Value strips ─────────────────────────────────────── */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">

            {/* Creative Ideas */}
            <div className="group py-10 px-8 flex gap-6 items-start hover:bg-saffron/5 transition-colors cursor-default">
              <div className="w-12 h-12 bg-saffron/10 group-hover:bg-saffron flex items-center justify-center flex-shrink-0 transition-colors duration-300 rounded-xl">
                <Lightbulb className="w-5 h-5 text-saffron group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-black text-gray-900 mb-2">Creative Ideas</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Pushing creative boundaries to deliver immersive concepts that stand out and leave lasting impressions.
                </p>
              </div>
            </div>

            {/* Business First */}
            <div className="group py-10 px-8 flex gap-6 items-start hover:bg-gold/5 transition-colors cursor-default">
              <div className="w-12 h-12 bg-gold/10 group-hover:bg-gold flex items-center justify-center flex-shrink-0 transition-colors duration-300 rounded-xl">
                <Target className="w-5 h-5 text-gold group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-black text-gray-900 mb-2">Business First</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every decision rooted in your business goals — growth, visibility, and measurable outcomes that matter.
                </p>
              </div>
            </div>

            {/* Customer Love */}
            <div className="group py-10 px-8 flex gap-6 items-start hover:bg-deep-red/5 transition-colors cursor-default">
              <div className="w-12 h-12 bg-deep-red/10 group-hover:bg-deep-red flex items-center justify-center flex-shrink-0 transition-colors duration-300 rounded-xl">
                <Heart className="w-5 h-5 text-deep-red group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-black text-gray-900 mb-2">Customer Love</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We build lasting relationships. Your success is our success — every project, every time, without exception.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
