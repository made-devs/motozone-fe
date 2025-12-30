import HeroServices from "@/components/layout/PageHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesCTA from "@/components/services/ServicesCTA";
import PageHero from "@/components/layout/PageHero";

export default function ServicePage() {
  return (
    <main className="bg-carbon-black">
      {/* 1. Judul & Deskripsi Page */}
      <PageHero
        subtitle="Service Catalogue"
        titleTop="Paket &"
        titleMain="Layanan"
        description="Semua kebutuhan motor Anda — dari inspeksi dasar hingga rebuild total, dari penampilan hingga performa."
        bgImage="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1600"
      />

      {/* 2. Grid Navigasi Utama (Bento Style) */}
      <ServicesGrid />

      {/* 3. Global CTA di bawah grid */}
      <ServicesCTA />
    </main>
  );
}
