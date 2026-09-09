import Link from "next/link";
import { Lightbulb, Target, Heart, Sparkles, ArrowRight } from "lucide-react";

const valueCards = [
  {
    icon: Lightbulb,
    title: "Creative Ideas",
    desc: "We have some creative ideas for you.",
    color: "bg-saffron",
    accent: "#FF6B00",
  },
  {
    icon: Target,
    title: "Business First",
    desc: "Your business is our top priority.",
    color: "bg-gold",
    accent: "#F5A623",
  },
  {
    icon: Heart,
    title: "Customer Love",
    desc: "We love our valued customers.",
    color: "bg-deep-red",
    accent: "#C0392B",
  },
];

export default function AboutSection() {
  return (
    <section className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* About card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200 mb-12">
          {/* Left — logo block */}
          <div className="relative bg-white flex items-center justify-center p-14 min-h-[320px] overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: "radial-gradient(circle at 30% 50%, #FF6B00 0%, transparent 60%), radial-gradient(circle at 80% 80%, #F5A623 0%, transparent 50%)"
            }} />
            <div className="relative z-10 text-center">
              <img src="/logo/vamxm-stacked.png" alt="VAMXM" className="h-40 w-auto mb-6 object-contain" />
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-saffron" />
                <span className="text-saffron text-xs uppercase tracking-[0.3em] font-semibold">Est. 2022</span>
                <Sparkles className="w-4 h-4 text-saffron" />
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div className="p-10 sm:p-14 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-saffron/10 text-saffron rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6 w-fit">
              <span className="w-1.5 h-1.5 bg-saffron rounded-full" />
              About Us
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-5 leading-tight">
              We are<br />
              <span className="text-saffron">VAMXM</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 text-sm">
              VAMXM vision is to create the smooth immersive market that will allow each and every business to run smoothly as well as to be the pioneer in this field.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 bg-gray-900 text-white font-black text-xs uppercase tracking-widest px-7 py-3.5 hover:bg-saffron transition-colors w-fit group"
            >
              Know More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Value cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valueCards.map(({ icon: Icon, title, desc, color, accent }) => (
            <div
              key={title}
              className="group relative border border-gray-200 p-8 hover:border-transparent transition-all duration-300 overflow-hidden cursor-default"
              style={{ "--accent": accent } as React.CSSProperties}
            >
              {/* Hover background fill */}
              <div className={`absolute inset-0 ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`relative z-10 w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300`}>
                <Icon className="w-7 h-7 text-white" />
              </div>

              {/* Text */}
              <h3 className="relative z-10 text-lg font-black text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
                {title}
              </h3>
              <p className="relative z-10 text-gray-500 group-hover:text-white/80 text-sm leading-relaxed transition-colors duration-300">
                {desc}
              </p>

              {/* Corner accent line */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 ${color} group-hover:w-full transition-all duration-300`} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
