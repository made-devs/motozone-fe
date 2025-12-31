import { aboutData } from "@/data/about";
import PageHero from "@/components/layout/PageHero";
import AboutStory from "@/components/about/AboutStory";
import VisionMissionGrid from "@/components/about/VisionMissionGrid";
import TheEquipment from "@/components/about/TheEquipment";
import TeamGrid from "@/components/about/TeamGrid";

export const metadata = {
  title: "Tentang Kami - TJM MOTOZONE",
  description:
    "Mengenal lebih dalam visi, misi, dan teknologi di balik TJM MOTOZONE.",
};

export default function AboutPage() {
  return (
    <main className="bg-carbon-black min-h-screen">
      <PageHero
        subtitle="The Backbone"
        titleTop="ABOUT"
        titleMain="THE ZONE"
        description="Kami mendefinisikan ulang standar perawatan motor modern melalui integrasi teknologi laboratorium dan semangat persaudaraan."
        bgImage="https://images.unsplash.com/photo-1578844251758-2f71da64c96f?q=80&w=1600"
      />

      <AboutStory data={aboutData.story} />
      <VisionMissionGrid values={aboutData.values} />
      <TheEquipment equipment={aboutData.equipment} />
      <TeamGrid team={aboutData.team} />
    </main>
  );
}
