import { membershipData } from "@/data/membership";
import PageHero from "@/components/layout/PageHero";
import MembershipTiers from "@/components/membership/MembershipTiers";
import MembershipComparison from "@/components/membership/MembershipComparison";

export const metadata = {
  title: "Membership TJM CAVE Performance | Eksklusivitas Bengkel Modern",
  description:
    "Dapatkan akses prioritas dan keuntungan eksklusif di TJM CAVE Performance.",
};

export default function MembershipPage() {
  return (
    <main className="bg-carbon-black min-h-screen">
      <PageHero
        subtitle={membershipData.hero.subtitle}
        titleTop={membershipData.hero.titleTop}
        titleMain={membershipData.hero.titleMain}
        description={membershipData.hero.description}
        bgImage={membershipData.hero.bgImage}
      />

      <section className="py-24">
        <div className="layout-container">
          <div className="text-center mb-20">
            <span className="text-tjm-yellow font-montserrat font-black text-xs tracking-[0.5em] uppercase mb-4 block">
              Choose Your Power
            </span>
            <h2 className="text-4xl md:text-6xl font-montserrat font-black uppercase italic tracking-tighter">
              MEMBERSHIP <span className="text-tjm-yellow">PLANS_</span>
            </h2>
          </div>

          <MembershipTiers tiers={membershipData.tiers} />
        </div>
      </section>

      <MembershipComparison />
    </main>
  );
}
