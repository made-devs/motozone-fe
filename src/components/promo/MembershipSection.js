'use client';
import { memberBenefits } from '@/data/promo';

export default function MembershipSection() {
  return (
    <section className="py-24 bg-black border-y border-border relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none select-none overflow-hidden">
        <h1 className="text-[20vw] font-black text-white whitespace-nowrap leading-none translate-y-1/2 italic">
          MEMBER ONLY
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-4 italic">
          Motozone <span className="text-signal">Elite.</span>
        </h2>
        <p className="text-neutral-500 uppercase tracking-[0.3em] font-bold text-xs mb-16">
          Exclusive Membership for High-Performance Riders
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {memberBenefits.map((item, i) => (
            <div
              key={i}
              className="p-8 border border-white/5 bg-metal/20 group hover:border-signal/50 transition-all"
            >
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">
                {item.icon}
              </div>
              <h4 className="text-white font-black uppercase text-sm tracking-widest leading-tight">
                {item.title}
              </h4>
            </div>
          ))}
        </div>

        <button className="inline-block px-12 py-5 border-2 border-white text-white font-black uppercase text-xs tracking-[0.3em] hover:bg-signal hover:text-black hover:border-signal transition-all">
          Join Membership Sekarang
        </button>
      </div>
    </section>
  );
}
