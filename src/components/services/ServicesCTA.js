export default function ServicesCTA() {
  return (
    <section className="py-20 border-t border-white/5">
      <div className="layout-container flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-center md:text-left">
          <h4 className="text-2xl font-montserrat font-bold uppercase mb-2 italic">
            Belum tahu masalah motor lo?
          </h4>
          <p className="text-gray-500 font-inter">
            Diagnosa awal gratis dengan tim teknis TJM Motozone.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="btn-precision">Konsultasi Gratis</button>
          <button className="px-8 py-3 border border-white/20 font-bold uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all">
            Lihat Promo
          </button>
        </div>
      </div>
    </section>
  );
}
