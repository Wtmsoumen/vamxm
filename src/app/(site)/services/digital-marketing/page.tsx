import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { services } from "@/data/services";

export default function DigitalMarketingServicesPage() {
  return <ServiceDetailPage service={services[3]} />;
}
