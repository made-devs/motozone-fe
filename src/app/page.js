import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import PromoSection from '../components/home/PromoSection';
import AboutSection from '../components/home/AboutSection';
import Testimonials from '../components/home/Testimonials';
import GallerySection from '../components/home/GallerySection';
import BlogSection from '../components/home/BlogSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PromoSection />
      <ServicesSection />
      <AboutSection />
      <Testimonials />
      <GallerySection />
      <BlogSection />
      <CTASection />
      {/* Nanti lanjut ke Section USP, Testimoni, dll */}
    </main>
  );
}
