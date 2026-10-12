"use client";

import { useEffect, useState } from "react";
import type { AboutContent } from "@/components/home/AboutSection";
import { getPublicAboutUs } from "@/lib/publicApi";

type AboutRecord = Record<string, unknown>;

function asRecord(value: unknown): AboutRecord {
  return value && typeof value === "object" && !Array.isArray(value) ? value as AboutRecord : {};
}

function firstText(source: AboutRecord, ...keys: string[]): string | undefined {
  for (const key of keys) {
    const value = source[key];
    if (typeof value === "string" && value.trim()) return value;
  }
  return undefined;
}

function normalizeAboutUs(payload: unknown): AboutContent | null {
  const root = asRecord(payload);
  const data = asRecord(root.data);
  const content = asRecord(data.about_us ?? data.aboutUs ?? data.about ?? data);
  const paragraphValue = content.paragraphs;
  const paragraphs = Array.isArray(paragraphValue)
    ? paragraphValue.filter((item): item is string => typeof item === "string" && !!item.trim())
    : undefined;
  const normalized: AboutContent = {
    heading: firstText(content, "heading", "title", "headline"),
    highlight: firstText(content, "highlight", "highlight_text", "title_highlight"),
    content: firstText(content, "content", "description", "about_text", "about_us"),
    paragraphs,
    image: firstText(content, "image", "image_url", "about_image", "about_image_url"),
    background_image: firstText(content, "background_image", "backgroundImage"),
    button_text: firstText(content, "button_text", "cta_text"),
    button_url: firstText(content, "button_url", "cta_url"),
    open_in_new_tab: content.open_in_new_tab === true || content.open_in_new_tab === 1,
  };

  return Object.values(normalized).some((value) =>
    typeof value === "string" ? !!value.trim() : Array.isArray(value) ? value.length > 0 : value === true,
  ) ? normalized : null;
}

export default function usePublicAboutUs(): AboutContent | null {
  const [content, setContent] = useState<AboutContent | null>(null);

  useEffect(() => {
    let active = true;
    getPublicAboutUs().then((payload) => {
      if (active) setContent(normalizeAboutUs(payload));
    }).catch(() => {
      if (active) setContent(null);
    });
    return () => { active = false; };
  }, []);

  return content;
}
