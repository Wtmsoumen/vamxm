import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { services } from "@/data/services";

export default function AiServicesPage() {
  return <ServiceDetailPage service={services[1]} />;
}
