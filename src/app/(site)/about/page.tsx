import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-saffron px-6 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: "repeating-linear-gradient(-45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px"
        }} />
        <div className="max-w-7xl mx-auto relative z-10 pt-8">
          <p className="text-white/70 text-xs font-black uppercase tracking-[0.25em] mb-2">Who We Are</p>
          <h1 className="text-5xl sm:text-6xl font-black text-white">About VAMXM</h1>
        </div>
      </div>

      <section className="py-20 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-saffron text-xs font-black uppercase tracking-[0.25em] mb-3">Our Story</p>
            <h2 className="text-4xl font-black text-gray-900 mb-6">We are VAMXM</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              VAMXM vision is to create the smooth immersive market that will allow each and every business to run smoothly as well as to be the pioneer in this field.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              We specialize in crafting virtual reality experiences that bridge the gap between tradition and technology — bringing Durga Puja pandals and cultural events to the world through immersive 360° virtual tours.
            </p>
            <Link href="/contact" className="inline-block bg-saffron text-white font-black text-xs uppercase tracking-widest px-8 py-3 hover:bg-deep-red transition-colors">
              Get In Touch
            </Link>
          </div>
          <div className="flex items-center justify-center bg-gray-50 aspect-square relative">
            <Image
              src="/logo/vamxm-stacked.png"
              alt="VAMXM"
              width={400}
              height={400}
              className="w-2/3 object-contain"
            />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-gold p-14 flex flex-col justify-center min-h-[300px]">
          <div className="mb-4">
            <Image src="/vr-person.png" alt="Vision" width={120} height={120} className="object-contain" />
          </div>
          <h3 className="text-2xl font-black text-white mb-4">Our Vision</h3>
          <p className="text-white/80 leading-relaxed">
            To be the pioneer in creating smooth immersive markets that empower every business to thrive and lead in the world of virtual reality experiences.
          </p>
        </div>
        <div className="bg-deep-red p-14 flex flex-col justify-center min-h-[300px]">
          <div className="mb-4">
            <Image src="/vr-headset.png" alt="Mission" width={120} height={120} className="object-contain" />
          </div>
          <h3 className="text-2xl font-black text-white mb-4">Our Mission</h3>
          <p className="text-white/80 leading-relaxed">
            To craft transformative virtual reality experiences for cultural events, businesses, and communities — making immersive technology accessible to all.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-12">Let us show you some stats</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-gray-200">
            {[
              { num: "10+", label: "Happy Clients" },
              { num: "1000+", label: "Resources" },
              { num: "20+", label: "Projects Completed" },
            ].map((s, i) => (
              <div key={i} className="p-10 text-center border-b sm:border-b-0 sm:border-r border-gray-200 last:border-r-0">
                <p className="text-5xl font-black text-saffron mb-2">{s.num}</p>
                <p className="text-white text-sm uppercase tracking-widest font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <Image
            src="/logo/utsavverse-logo.png"
            alt="UtsavVerse"
            width={500}
            height={200}
            className="h-32 w-auto mx-auto mb-6 object-contain"
          />
          <p className="text-white text-sm">Immersive Durga Puja 2026 — Tradition | Technology | Together</p>
        </div>
      </section>
    </div>
  );
}
