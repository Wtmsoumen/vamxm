import { Eye } from "lucide-react";
import PandalCard from "@/components/pandal/PandalCard";
import { getPublicPandals } from "@/lib/publicApi";

export default async function PandalsPage() {
  const { pandals } = await getPublicPandals();
  const allSorted = pandals

  console.log(pandals, "pandals_total");

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

      {/* Count */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <p className="text-xs text-black uppercase tracking-widest">
          Showing {allSorted.length} pandals
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {allSorted.map((p: any, i: number) => {
            const rank = i + 1;
            return (
              <div key={p.id} className="shadow-sm hover:shadow-lg rounded-xl overflow-hidden transition-all duration-300">
                <PandalCard pandal={p} rank={rank} />
              </div>
            );
          })}
        </div>

        {allSorted.length === 0 && (
          <div className="text-center py-24 border border-gray-200">
            <Eye className="w-10 h-10 text-gray-200 mx-auto mb-3" />
            <p className="text-gray-300 font-black uppercase tracking-widest text-sm">No pandals found</p>
          </div>
        )}
      </div>
    </div>
  );
}
