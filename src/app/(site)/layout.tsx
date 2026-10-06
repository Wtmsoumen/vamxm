import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getPublicHome } from "@/lib/publicApi";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const homeData: any = await getPublicHome();

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer data={{ settings: homeData?.data?.settings, social_links: homeData?.data?.social_links }} />
    </>
  );
}
