import { facilitiesContent } from "@/data/facilities";
import PageHero from "@/components/layout/PageHero";
import FacilityGrid from "@/components/facilities/FacilityGrid";
import ServiceSOP from "@/components/facilities/ServiceSOP";
import DynoSpecModule from "@/components/facilities/DynoSpecModule";
import TrainingTimeline from "@/components/facilities/TrainingTimeline";

export default function FacilitiesPage() {
  return (
    <main className="bg-carbon-black min-h-screen">
      <PageHero
        subtitle={facilitiesContent.hero.subtitle}
        titleTop={facilitiesContent.hero.titleTop}
        titleMain={facilitiesContent.hero.titleMain}
        description={facilitiesContent.hero.description}
        bgImage={facilitiesContent.hero.image}
      />

      <FacilityGrid items={facilitiesContent.facilities} />
      <ServiceSOP steps={facilitiesContent.sopSteps} />
      <DynoSpecModule specs={facilitiesContent.dynoSpecs} />
      <TrainingTimeline schedule={facilitiesContent.training} />

      {/* Audit Footer Section */}
      <section className="py-20 bg-tjm-yellow text-black">
        <div className="layout-container flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-xl">
            <h3 className="text-3xl font-montserrat font-black uppercase italic mb-2">
              Internal Audit & Feedback
            </h3>
            <p className="font-inter font-medium">
              Kami melakukan audit kebersihan dan standar layanan berkala setiap
              bulan untuk menjaga kualitas tetap di puncak.
            </p>
          </div>
          <button className="bg-black text-white px-10 py-5 font-montserrat font-black uppercase tracking-widest hover:bg-zinc-800 transition-all">
            Isi Kotak Saran
          </button>
        </div>
      </section>
    </main>
  );
}
