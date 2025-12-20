'use client';

import PageHero from '@/components/common/PageHero';
import StorySection from '@/components/about/StorySection';
import SOPTimeline from '@/components/about/SOPTimeline';
import TeamSection from '@/components/about/TeamSection';
import CTASection from '@/components/home/CTASection';

export default function AboutPage() {
  return (
    <main className="bg-canvas min-h-screen">
      <PageHero
        title={
          <>
            Born for <span className="text-signal">Performance.</span>
          </>
        }
        subtitle="Membangun standar baru dalam perawatan dan modifikasi mesin"
        category="OUR STORY"
        bgImage="/about.jpg"
      />

      <StorySection />
      <SOPTimeline />
      <TeamSection />
      <CTASection />
    </main>
  );
}
