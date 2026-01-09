"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { servicesData } from "@/data/services";
import PageHero from "@/components/layout/PageHero";
import PackageModule from "@/components/services/modules/PackageModule";
import RoadmapModule from "@/components/services/modules/RoadmapModule";
import LaboratoryModule from "@/components/services/modules/LaboratoryModule";
import SubDivisionModule from "@/components/services/modules/SubDivisionModule";
import SimpleModule from "@/components/services/modules/SimpleModule";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const data = servicesData[slug];

  // Scroll ke atas setiap slug berubah
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // Jika slug tidak ditemukan
  if (!data) return <div className="py-40 text-center">Service Not Found</div>;

  // Logic untuk memilih modul berdasarkan layoutType
  const renderModule = () => {
    switch (data.layoutType) {
      case "packages":
        return <PackageModule data={data.packages} />;
      case "roadmap":
        return <RoadmapModule data={data.packages} />;
      case "laboratory":
        return <LaboratoryModule data={data} />;
      case "sub-division":
        return <SubDivisionModule data={data} />;
      case "simple":
        return <SimpleModule data={data} />;
      default:
        return null;
    }
  };

  return (
    <main className="bg-carbon-black min-h-screen">
      <PageHero
        subtitle={data.subtitle}
        titleTop={data.title}
        titleMain={data.highlightTitle}
        description={data.description}
        bgImage={data.heroImage}
      />

      <div className="py-20">{renderModule()}</div>

      <ServicesCTA
        primaryText={data.cta.primary}
        secondaryText={data.cta.secondary}
      />
    </main>
  );
}
