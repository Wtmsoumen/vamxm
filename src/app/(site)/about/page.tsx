import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import MobileAppSection from "@/components/home/MobileAppSection";
import ServicesSection from "@/components/home/ServicesSection";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutSection forAboutPage={true} />

      <section className="px-6 border-b border-gray-100">
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
          <div className="flex items-center justify-center aspect-square relative">
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
      <ServicesSection />
      <MobileAppSection />
      <ContactSection />
    </div>
  );
}
