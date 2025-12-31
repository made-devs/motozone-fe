"use client";
import { useRef } from "react";
import { promoData } from "@/data/promo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function PromoList() {
  const container = useRef(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(container);

      gsap.from(q(".promo-card"), {
        y: 50,
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
        immediateRender: false, // <- penting: cegah state "ngilang" kalau trigger belum jalan
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          invalidateOnRefresh: true,
        },
      });

      // Paksa recalculation setelah layout/route transition selesai
      requestAnimationFrame(() => ScrollTrigger.refresh());
      setTimeout(() => ScrollTrigger.refresh(), 100);
    },
    { scope: container }
  );

  return (
    <section ref={container} className="py-24">
      <div className="layout-container">
        {/* TOP 5 SPECIAL */}
        <div className="mb-20">
          <h3 className="text-2xl font-montserrat font-bold uppercase mb-10 border-l-4 border-tjm-yellow pl-6">
            5 Special <span className="text-tjm-yellow">Highlight</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promoData.specialPromo.map((item, i) => (
              <div
                key={i}
                className="promo-card bg-metallic-gray/10 border border-tjm-yellow/20 p-8 relative overflow-hidden group hover:border-tjm-yellow transition-all"
              >
                <div className="text-4xl mb-6">{item.icon}</div>
                <h4 className="text-xl font-montserrat font-bold uppercase mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500 font-inter mb-6">
                  {item.desc}
                </p>
                <div className="text-[10px] font-mono text-tjm-yellow uppercase tracking-widest">
                  Value: Rp {item.value}
                </div>
                {/* Ornamen Diagonal Stencil */}
                <div className="absolute -bottom-2 -right-2 text-4xl font-black text-white/[0.03] italic uppercase select-none group-hover:text-tjm-yellow/5">
                  Special
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 10 ADDITIONAL BONUS */}
        <div>
          <h3 className="text-2xl font-montserrat font-bold uppercase mb-10 border-l-4 border-white/20 pl-6">
            10 Grand Opening <span className="text-gray-500">Bonuses</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {promoData.bonusPromo.map((item, i) => (
              <div
                key={i}
                className="promo-card flex items-center justify-between p-5 bg-white/5 border border-white/5 group hover:bg-white/10 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-tjm-yellow rotate-45" />
                  <span className="text-xs font-montserrat font-bold uppercase tracking-tight">
                    {item.title}
                  </span>
                </div>
                <div className="text-[9px] font-mono text-gray-600 group-hover:text-tjm-yellow transition-colors">
                  +{item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="mt-24 text-center">
          <button className="btn-precision px-12 py-5 text-xl">
            Ambil Promo Sekarang
          </button>
          <p className="mt-4 text-gray-500 font-mono text-[10px] uppercase tracking-widest">
            *Syarat & Ketentuan Berlaku // Kuota Terbatas
          </p>
        </div>
      </div>
    </section>
  );
}
