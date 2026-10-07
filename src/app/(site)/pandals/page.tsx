import PandalsList from "@/components/pandal/PandalsList";

export default function PandalsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Saffron header block */}
      <div className="text-center mt-25">
        <p className="section-kicker">Virtual Experiences</p>
        <h1 className="section-title mt-4 text-[48px] sm:text-[64px] md:text-[80px]">
          Pandal <span className="display-gradient">360°</span>
        </h1>
        <div className="ornament"></div>
        <p className="mx-auto mt-6 max-w-[540px] text-base leading-7 text-black/70">
          Walk through Kolkata's iconic Durga Puja pandals from anywhere in the world — fully immersive, multi-node 360° tours.
        </p>
      </div>

      <PandalsList />
    </div>
  );
}
