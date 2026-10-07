"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import PandalCard from "@/components/pandal/PandalCard";
import { getPublicPandals } from "@/lib/publicApi";
import { normalizePandal } from "@/lib/publicApi";
import { Pandal } from "@/types";

export default function PandalsList() {
  const [pandals, setPandals] = useState<Pandal[]>([]);

  useEffect(() => {
    let active = true;
    getPublicPandals(1, 1000).then(({ pandals: items }) => {
      if (active) setPandals(items.map(normalizePandal).filter((pandal) => pandal.id && pandal.published));
    });
    return () => { active = false; };
  }, []);

  return <>
    <div className="max-w-7xl mx-auto px-6 pt-6">
      <p className="text-xs text-black uppercase tracking-widest">Showing {pandals.length} pandals</p>
    </div>
    <div className="max-w-7xl mx-auto px-6 py-8 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {pandals.map((pandal, index) => <div key={pandal.id} className="shadow-sm hover:shadow-lg rounded-xl overflow-hidden transition-all duration-300">
          <PandalCard pandal={pandal} rank={index + 1} />
        </div>)}
      </div>
      {pandals.length === 0 && <div className="text-center py-24 border border-gray-200">
        <Eye className="w-10 h-10 text-gray-200 mx-auto mb-3" />
        <p className="text-gray-300 font-black uppercase tracking-widest text-sm">No pandals found</p>
      </div>}
    </div>
  </>;
}
