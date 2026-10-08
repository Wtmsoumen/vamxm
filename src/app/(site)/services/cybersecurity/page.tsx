import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { services } from "@/data/services";

export default function CybersecurityServicesPage() {
  return <ServiceDetailPage service={services[0]} />;
}
