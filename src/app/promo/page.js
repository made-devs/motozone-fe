import PageHero from "@/components/layout/PageHero";
import PromoValueCounter from "@/components/promo/PromoValueCounter";
import PromoList from "@/components/promo/PromoList";

export const metadata = {
  title: "Promo Grand Opening TJM MOTOZONE – 15 Bonus Gratis Senilai 2 Juta",
  description: "Dapatkan free dyno, balancing, scanner, hingga diskon 50%.",
};

export default function PromoPage() {
  return (
    <main className="bg-carbon-black min-h-screen">
      <PageHero
        subtitle="Limited Offer"
        titleTop="Grand Opening"
        titleMain="15 Promo Gratis"
        description="Service 100 ribuan, dapatkan bonus eksklusif senilai total 2 Juta Rupiah. Kuota terbatas setiap harinya."
        bgImage="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1600"
      />

      {/* 1. Value Counter Section */}
      <PromoValueCounter />

      {/* 2. List 15 Promo */}
      <PromoList />
    </main>
  );
}
