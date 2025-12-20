'use client';
import { activePromos } from '@/data/promo';

export default function PromoList() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="space-y-12">
          {activePromos.map((promo, idx) => (
            <div
              key={promo.id}
              className={`flex flex-col md:flex-row border border-border group overflow-hidden ${
                idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Promo Image */}
              <div className="md:w-1/2 h-[400px] overflow-hidden">
                <img
                  src={promo.image}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-expo scale-110 group-hover:scale-100"
                />
              </div>

              {/* Promo Info */}
              <div className="md:w-1/2 p-12 bg-metal flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 p-8 opacity-10 font-black text-6xl">
                  {promo.discount}
                </div>
                <span className="text-signal font-black text-xs tracking-widest mb-4">
                  // {promo.category}_{promo.id}
                </span>
                <h3 className="text-5xl font-black text-white uppercase leading-none mb-6 italic">
                  {promo.title}
                </h3>
                <p className="text-neutral-400 mb-8 max-w-md font-body">
                  {promo.desc}
                </p>
                <div className="flex items-center gap-6">
                  <div className="bg-white/5 border border-white/10 px-6 py-2">
                    <span className="block text-[10px] text-neutral-500 font-bold uppercase">
                      Valid Until
                    </span>
                    <span className="text-white font-black uppercase tracking-tighter italic">
                      {promo.expiry}
                    </span>
                  </div>
                  <button className="bg-signal text-black px-8 py-4 font-black uppercase text-xs tracking-widest hover:bg-white transition-colors">
                    Ambil Promo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
