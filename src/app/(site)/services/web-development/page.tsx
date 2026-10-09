import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { services } from "@/data/services";

export default function WebDevelopmentServicesPage() {
  return <ServiceDetailPage service={services.find((service) => service.slug === "website-development")!} />;
}
