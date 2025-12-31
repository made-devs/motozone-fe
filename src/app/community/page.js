import { communityData } from "@/data/community";
import CaveHero from "@/components/community/CaveHero";
import CaveManifesto from "@/components/community/CaveManifesto";
import ActivityShowcase from "@/components/community/ActivityShowcase";
import SubBrandMarquee from "@/components/community/SubBrandMarquee";
import PerksAndEvents from "@/components/community/PerksAndEvents";

export default function CommunityPage() {
  return (
    <main className="bg-black text-white selection:bg-yellow-400 selection:text-black">
      <CaveHero data={communityData.hero} />
      <SubBrandMarquee brands={communityData.subBrands} />
      <CaveManifesto data={communityData.manifesto} />
      <ActivityShowcase activities={communityData.activities} />
      <PerksAndEvents
        perks={communityData.perks}
        events={communityData.events}
      />
    </main>
  );
}
