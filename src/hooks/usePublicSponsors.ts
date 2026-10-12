"use client";

import { useEffect, useState } from "react";
import { getPublicSponsors } from "@/lib/publicApi";
import type { Sponsor } from "@/types";

export default function usePublicSponsors() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);

  useEffect(() => {
    let active = true;
    getPublicSponsors()
      .then((items) => { if (active) setSponsors(items); })
      .catch(() => { if (active) setSponsors([]); });
    return () => { active = false; };
  }, []);

  return sponsors;
}
