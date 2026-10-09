import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { services } from "@/data/services";

export default function MobileAppDevelopmentPage() {
  return <ServiceDetailPage service={services.find((service) => service.slug === "mobile-app-development")!} />;
}
