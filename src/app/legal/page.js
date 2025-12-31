import { legalContent } from "@/data/legal";
import PageHero from "@/components/layout/PageHero";
import LegalFAQ from "@/components/legal/LegalFAQ";
import WarrantySection from "@/components/legal/WarrantySection";
import PolicyGrid from "@/components/legal/PolicyGrid";

export const metadata = {
  title: "FAQ & Kebijakan - TJM MOTOZONE",
  description:
    "Informasi lengkap mengenai FAQ, garansi 14 hari, dan kebijakan layanan TJM MOTOZONE.",
};

export default function LegalPage() {
  return (
    <main className="bg-carbon-black min-h-screen">
      <PageHero
        subtitle={legalContent.hero.subtitle}
        titleTop={legalContent.hero.titleTop}
        titleMain={legalContent.hero.titleMain}
        description={legalContent.hero.description}
        bgImage={legalContent.hero.image}
      />

      <div className="layout-container py-24">
        <LegalFAQ faqs={legalContent.faqs} />
        <WarrantySection data={legalContent.warranty} />
        <PolicyGrid policies={legalContent.policies} />
      </div>
    </main>
  );
}
