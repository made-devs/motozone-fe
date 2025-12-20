'use client';

import PageHero from '@/components/common/PageHero';
import ServiceGrid from '@/components/services/ServiceGrid';
import ServiceTabs from '@/components/services/ServiceTabs'; // Komponen baru
import ServiceWorkflow from '@/components/services/ServiceWorkflow';
import CTASection from '@/components/home/CTASection';

export default function ServicesPage() {
  return (
    <main className="bg-canvas min-h-screen">
      <PageHero
        title={
          <>
            Precision <span className="text-signal">Engineering.</span>
          </>
        }
        subtitle="Standar pengerjaan workshop balap untuk penggunaan harian Anda"
        category="SERVICE MODULES"
        bgImage="https://images.unsplash.com/photo-1599256621730-535171e28e50?q=80&w=2071&auto=format&fit=crop"
      />

      {/* 1. Grid Layanan Utama (Visual Card) */}
      <ServiceGrid />

      {/* 2. Sistem Tab Paket (Pricing & Detail) */}
      <ServiceTabs />

      {/* 3. Langkah Pengerjaan (SOP) */}
      <ServiceWorkflow />

      {/* 4. Call to Action */}
      <CTASection />
    </main>
  );
}
