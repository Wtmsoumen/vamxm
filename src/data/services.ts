export interface ServiceDetail {
  id: number;
  title: string;
  slug: string;
  tagline?: string;
  description: string;
  icon: string;
  image: string | null;
  features: ServiceFeature[];
  seo: ServiceSeo;
  cardItems?: string[];
  pathway?: string[];
  sections?: { title: string; description?: string; items: string[] }[];
  primaryCta?: string;
  secondaryCta?: string;
  tertiaryCta?: string;
}

export interface ServiceFeature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceSeo {
  title: string;
  description: string;
  keywords: string | null;
}

export const services: ServiceDetail[] = [
  {
    id: 1,
    title: "Website Development",
    slug: "website-development",
    description: "Fast, secure and search-friendly websites and web applications built to grow with your business.",
    icon: "globe",
    image: null,
    features: [
      { id: 1, title: "Custom Web Applications", description: "Tailor-made portals, dashboards and platforms.", icon: "layout" },
      { id: 2, title: "Headless CMS & APIs", description: "Content-driven sites powered by robust REST APIs.", icon: "server" },
      { id: 3, title: "Performance & SEO", description: "Core Web Vitals-friendly builds that rank well.", icon: "gauge" },
      { id: 4, title: "Maintenance & Support", description: "Ongoing updates, monitoring and improvements.", icon: "wrench" },
    ],
    seo: { title: "Website Development | VAMXM", description: "Fast, secure and search-friendly websites and web applications built to grow with your business.", keywords: null },
  },
  {
    id: 2,
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Native and cross-platform mobile apps for Android and iOS.",
    icon: "smartphone",
    image: null,
    features: [
      { id: 5, title: "Android & iOS", description: "Apps for both major platforms.", icon: "smartphone" },
      { id: 6, title: "Cross-platform", description: "One codebase, native-quality experience.", icon: "layers" },
      { id: 7, title: "App Store Launch", description: "Store listing, review and release support.", icon: "rocket" },
    ],
    seo: { title: "Mobile App Development | VAMXM", description: "Native and cross-platform mobile apps for Android and iOS.", keywords: null },
  },
  {
    id: 3,
    title: "Cyber Security",
    slug: "cyber-security",
    description: "Protect your applications, data and infrastructure from modern threats.",
    icon: "shield",
    image: null,
    features: [
      { id: 8, title: "Security Audits", description: "Application and infrastructure reviews.", icon: "search" },
      { id: 9, title: "Vulnerability Assessment", description: "Find and prioritise weaknesses.", icon: "bug" },
      { id: 10, title: "Secure Development", description: "Security built into every release.", icon: "lock" },
    ],
    seo: { title: "Cyber Security | VAMXM", description: "Protect your applications, data and infrastructure from modern threats.", keywords: null },
  },
  {
    id: 4,
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Data-driven campaigns that bring the right audience to your brand.",
    icon: "megaphone",
    image: null,
    features: [
      { id: 11, title: "SEO", description: "Improve organic visibility.", icon: "search" },
      { id: 12, title: "Social Media", description: "Content and community management.", icon: "share" },
      { id: 13, title: "Performance Campaigns", description: "Paid campaigns with clear reporting.", icon: "bar-chart" },
    ],
    seo: { title: "Digital Marketing | VAMXM", description: "Data-driven campaigns that bring the right audience to your brand.", keywords: null },
  },
];
