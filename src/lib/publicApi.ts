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
  for (const key of ["data", "items", "results", "pandals"]) {
    if (Array.isArray(envelope[key])) return envelope[key] as unknown[];
  }
  const data = record(envelope.data);
  for (const key of ["items", "results", "pandals"]) {
    if (Array.isArray(data[key])) return data[key] as unknown[];
  }
  return [];
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
async function getJson(path: string): Promise<unknown> {
  if (!API_BASE_URL) throw new Error("NEXT_PUBLIC_API_URL is not configured");
  const response = await axios.get(`${API_BASE_URL}${path}`);
  return response.data;
}

export async function getPublicHome(): Promise<unknown | null> {
  try {
    return await getJson("/public/home");
  } catch (error) {
    console.error("Unable to load public home data", error);
    return null;
  }
}

export async function getPublicPandals(page = 1, perPage = 12): Promise<{ pandals: any; }> {
  try {
    const payload: any = await getJson(`/mobile/tours`);
    // const items = listFrom(payload);
    // console.log(items, "__payload_");
    // const envelope = record(payload);
    // const data = record(envelope.data);
    // const meta = record(envelope.meta ?? data.meta ?? envelope.pagination ?? data.pagination);
    // const total = firstNumber(meta, "total", "total_count") ?? firstNumber(envelope, "total", "total_count") ?? null;
    return { pandals: payload.data };
  } catch (error) {
    console.error("Unable to load public pandals", error);
    return { pandals: [] };
  }
}

export async function getPublicPandal(slug: string): Promise<Pandal | null> {
  try {
    const payload = await getJson(`/public/pandals/${encodeURIComponent(slug)}`);
    const envelope = record(payload);
    const data = envelope.data ?? envelope.pandal ?? payload;
    const pandal = normalizePandal(data);
    return pandal.id ? pandal : null;
  } catch (error) {
    console.error(`Unable to load public pandal "${slug}"`, error);
    return null;
  }
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
