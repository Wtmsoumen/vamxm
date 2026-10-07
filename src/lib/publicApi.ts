import { Pandal, Sponsor, Hotspot } from "@/types";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

type UnknownRecord = Record<string, unknown>;

function record(value: unknown): UnknownRecord {
  return value && typeof value === "object" ? (value as UnknownRecord) : {};
}

function firstString(source: UnknownRecord, ...keys: string[]): string {
  for (const key of keys) {
    const value = source[key];
    if (typeof value === "string" && value.trim()) return value;
    if (typeof value === "number") return String(value);
  }
  return "";
}

function firstNumber(source: UnknownRecord, ...keys: string[]): number | undefined {
  for (const key of keys) {
    const value = source[key];
    if (typeof value === "number") return value;
    if (typeof value === "string" && value.trim() && Number.isFinite(Number(value))) return Number(value);
  }
  return undefined;
}

function firstBoolean(source: UnknownRecord, ...keys: string[]): boolean {
  for (const key of keys) {
    const value = source[key];
    if (typeof value === "boolean") return value;
    if (value === 1 || value === "1" || value === "true") return true;
  }
  return false;
}

function listFrom(value: unknown): unknown[] {
  if (Array.isArray(value)) return value;
  const envelope = record(value);
  for (const key of ["data", "items", "results", "pandals", "tours"]) {
    if (Array.isArray(envelope[key])) return envelope[key] as unknown[];
  }
  const data = record(envelope.data);
  for (const key of ["items", "results", "pandals", "tours"]) {
    if (Array.isArray(data[key])) return data[key] as unknown[];
  }
  return [];
}

function slugify(value: string): string {
  return value.normalize("NFKD").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function normalizeSponsor(value: unknown): Sponsor {
  const source = record(value);
  return {
    id: firstString(source, "id", "_id", "uuid", "slug"),
    name: firstString(source, "name", "title") || "Sponsor",
    logo: firstString(source, "logo", "logo_url", "image", "image_url"),
    website: firstString(source, "website", "url", "link") || "#",
    bannerImage: firstString(source, "bannerImage", "banner_image", "banner_url") || undefined,
  };
}

function normalizeHotspot(value: unknown, index: number): Hotspot {
  const source = record(value);
  const type = firstString(source, "type").toLowerCase();
  return {
    id: firstString(source, "id", "_id") || `hotspot-${index}`,
    type: type === "sponsor" ? "sponsor" : "info",
    label: firstString(source, "label", "title", "name"),
    pitch: firstNumber(source, "pitch") ?? 0,
    yaw: firstNumber(source, "yaw") ?? 0,
    sponsorId: firstString(source, "sponsorId", "sponsor_id") || undefined,
    url: firstString(source, "url", "link") || undefined,
  };
}

export function normalizePandal(value: unknown): Pandal {
  const source = record(value);
  const sponsors = source.sponsors;
  const hotspots = source.hotspots;
  const createdAt = firstString(source, "createdAt", "created_at", "updated_at");

  return {
    id: firstString(source, "slug", "id", "_id", "uuid"),
    name: firstString(source, "name", "title") || "Untitled Pandal",
    nameBengali: firstString(source, "nameBengali", "name_bengali", "bengali_name") || undefined,
    location: firstString(source, "location", "address", "area", "place") || "Kolkata",
    views: firstNumber(source, "views", "view_count", "views_count"),
    description: firstString(source, "description", "about", "details"),
    thumbnail: firstString(source, "thumbnail", "thumbnail_url", "image", "image_url", "cover_image"),
    panoramaUrl: firstString(source, "panoramaUrl", "panorama_url", "panorama", "360_image", "image_360"),
    idolPanoramaUrl: firstString(source, "idolPanoramaUrl", "idol_panorama_url", "idol_360_image") || undefined,
    featured: firstBoolean(source, "featured", "is_featured"),
    published: source.published === undefined && source.is_published === undefined
      ? true
      : firstBoolean(source, "published", "is_published"),
    sponsors: Array.isArray(sponsors) ? sponsors.map(normalizeSponsor) : [],
    hotspots: Array.isArray(hotspots) ? hotspots.map(normalizeHotspot) : [],
    createdAt: createdAt || "",
  };
}
export async function getPublicJson(path: string): Promise<unknown | null> {
  try {
    if (!API_BASE_URL) throw new Error("NEXT_PUBLIC_API_URL is not configured");
    const response = await axios.get(`${API_BASE_URL}${path}`);
    return response.data;
  } catch (error) {
    console.error(`Unable to load public API path ${path}`, error);
    return null;
  }
}

export async function getPublicHome(): Promise<unknown | null> {
  try {
    return await getPublicJson("/public/home");
  } catch (error) {
    console.error("Unable to load public home data", error);
    return null;
  }
}

export async function getPublicPandals(page = 1, perPage = 12): Promise<{ pandals: UnknownRecord[]; }> {
  try {
    const payload = await getPublicJson(`/mobile/tours?page=${page}&per_page=${perPage}`);
    return { pandals: listFrom(payload).map(record) };
  } catch (error) {
    console.error("Unable to load public pandals", error);
    return { pandals: [] };
  }
}

export async function getPublicPandal(slug: string): Promise<Pandal | null> {
  try {
    const payload = await getPublicJson(`/public/pandals/${encodeURIComponent(slug)}`);
    const envelope = record(payload);
    const data = record(envelope.data);
    const directCandidates = [data.pandal, data.tour, envelope.pandal, envelope.tour, envelope.data, payload]
      .filter((candidate) => candidate && typeof candidate === "object");

    for (const candidate of directCandidates) {
      const pandal = normalizePandal(candidate);
      if (pandal.id) return pandal;
    }
  } catch (error) {
    // The public detail endpoint may not contain every tour exposed by the
    // mobile list endpoint; try that list before treating the slug as missing.
  }

  try {
    const { pandals } = await getPublicPandals(1, 1000);
    const wantedSlug = slugify(slug);
    const match = pandals.find((item) => {
      const nested = [item.pandal, item.tour, item.data].map(record);
      const candidates = [item, ...nested];
      return candidates.some((candidate) => {
        const explicit = firstString(candidate, "slug", "tour_slug", "url_slug");
        const title = firstString(candidate, "name", "title");
        return (explicit && slugify(explicit) === wantedSlug) || (title && slugify(title) === wantedSlug);
      });
    });

    if (match) {
      const source = record(match.pandal ?? match.tour ?? match.data ?? match);
      const normalized = normalizePandal({ ...source, slug: firstString(source, "slug", "tour_slug", "url_slug") || slug });
      if (normalized.id) return normalized;
    }
  } catch (error) {
    console.error(`Unable to load pandal data for "${slug}"`, error);
  }

  return null;
}

export function getHomePandalItems(payload: unknown): Pandal[] {
  const root = record(payload);
  const data = record(root.data);
  const collections = [
    root.featured_pandals,
    root.featuredPandals,
    root.pandals,
    data.featured_pandals,
    data.featuredPandals,
    data.pandals,
  ];
  const collection = collections.find(Array.isArray);
  return listFrom(collection).map(normalizePandal).filter((pandal) => pandal.id);
}
