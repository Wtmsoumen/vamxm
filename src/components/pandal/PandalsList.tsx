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
      if (active) {
        const publishedItems = items.filter((item) => {
          const normalized = normalizePandal(item);
          return normalized.id && normalized.published;
        });
        setPandals(publishedItems.map(normalizePandal));
        setVisibleItems(publishedItems);
      };
    });
    return () => { active = false; };
  }, []);

  const [visibleItems, setVisibleItems] = useState<any[]>([]);

  return <>
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 pt-8 sm:px-6">
      <p className="text-sm font-semibold text-black/65">Explore Kolkata’s Puja destinations</p>
      <p className="rounded-full bg-[#f6f2ed] px-3 py-1.5 text-xs font-semibold text-black/60">{pandals.length} pandals</p>
    </div>
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-5 sm:px-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
        {visibleItems.map((pandal: any, index: number) => <PandalCard key={pandal.id ?? pandal.slug ?? index} pandal={pandal} rank={index + 1} />)}
      </div>
      {pandals.length === 0 && <div className="rounded-2xl border border-black/10 bg-white py-20 text-center">
        <Eye className="mx-auto mb-3 h-10 w-10 text-black/20" />
        <p className="text-sm font-semibold text-black/45">No pandals are available right now.</p>
      </div>}
    </div>
  </>;
}
