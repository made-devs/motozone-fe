import Advantages from "@/components/home/Advantages";
import CommunityCave from "@/components/home/CommunityCove";
import FeaturedPackages from "@/components/home/FeaturedPackage";
import FinalCTA from "@/components/home/FinalCTA";
import Hero from "@/components/home/Hero";
import PromoManifest from "@/components/home/PromoManifest";
import Testimonials from "@/components/home/Testimonials";

export default function Page() {
  return (
    <section className="">
      <Hero />
      <Advantages />
      <FeaturedPackages />
      <PromoManifest />
      <CommunityCave />
      <Testimonials />
      <FinalCTA />
    </section>
  );
}
