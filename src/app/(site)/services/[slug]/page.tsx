import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { services } from "@/data/services";
import { getPublicServices } from "@/lib/publicApi";

export async function generateStaticParams() {
  const slugs = new Set<string>([
    "website-development",
    "web-development",
    "mobile-app-development",
    "cyber-security",
    "cybersecurity",
    "cybersecurity-training-services",
    "digital-marketing",
    "ai",
  ]);

  services.forEach((service) => {
    if (service.slug) slugs.add(service.slug);
  });

  try {
    const res = (await getPublicServices(1, 100)) as { data?: { slug?: string }[] } | { slug?: string }[] | null;
    const items = Array.isArray(res) ? res : res?.data;
    if (Array.isArray(items)) {
      items.forEach((item) => {
        if (item?.slug) slugs.add(item.slug);
      });
    }
  } catch (err) {
    console.error("Failed to fetch dynamic service slugs for generateStaticParams:", err);
  }

  return Array.from(slugs).map((slug) => ({ slug }));
}

export default async function DynamicServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ServiceDetailPage slug={slug} />;
}
