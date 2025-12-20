'use client';

import PageHero from '@/components/common/PageHero';
import ContactDetails from '@/components/contact/ContactDetails';
import MapSection from '@/components/contact/MapSection';
import CTASection from '@/components/home/CTASection';

export default function ContactPage() {
  return (
    <main className="bg-canvas min-h-screen">
      <PageHero
        title={
          <>
            Get in <span className="text-signal">Touch.</span>
          </>
        }
        subtitle="Konsultasi teknis atau penjadwalan inspeksi mendalam"
        category="CONTACT US"
        bgImage="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
      />

      <ContactDetails />
      <MapSection />
      <CTASection />
    </main>
  );
}
