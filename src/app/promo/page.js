'use client';

import PageHero from '@/components/common/PageHero';
import PromoList from '@/components/promo/PromoList';
import MembershipSection from '@/components/promo/MembershipSection';
import CTASection from '@/components/home/CTASection';

export default function PromoPage() {
  return (
    <main className="bg-canvas min-h-screen">
      <PageHero
        title={
          <>
            Special <span className="text-signal">Offers.</span>
          </>
        }
        subtitle="Dapatkan performa maksimal dengan penawaran terbatas dari workshop kami"
        category="PROMOTION"
        bgImage="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1600&q=80" // Motor adventure, available
      />

      <PromoList />
      <MembershipSection />
      <CTASection />
    </main>
  );
}
