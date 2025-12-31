import { galleryItems } from "@/data/gallery";
import PageHero from "@/components/layout/PageHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export default function GalleryPage() {
  return (
    <main className="bg-carbon-black min-h-screen">
      <PageHero
        subtitle="Visual Archive"
        titleTop="THE"
        titleMain="GALLERY"
        description="Eksplorasi dokumentasi teknis, catatan perjalanan, dan momen persaudaraan dalam ekosistem CAVE Performance."
        bgImage="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1600"
      />

      <section className="py-24">
        <div className="layout-container">
          <div className="border-l-4 border-tjm-yellow pl-6 mb-16">
            <h2 className="text-4xl font-montserrat font-black uppercase tracking-tighter text-white">
              PERFORMANCE <span className="text-tjm-yellow">LOGS</span>
            </h2>
          </div>
          <GalleryGrid items={galleryItems} />
        </div>
      </section>
    </main>
  );
}
