"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function MembershipTiers({ tiers }) {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".tier-card", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {tiers.map((tier) => (
        <div
          key={tier.id}
          className={`tier-card relative bg-zinc-950 p-10 border-2 ${tier.border} group hover:translate-y-[-10px] transition-all duration-500`}
        >
          {/* Ornamen Diagonal (Caution) */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-tjm-yellow/5 -skew-x-12 translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <h3
            className={`text-2xl font-montserrat font-black uppercase italic mb-2 ${tier.accent}`}
          >
            {tier.name}
          </h3>
          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-4xl font-montserrat font-black text-white">
              Rp {tier.price}
            </span>
            <span className="text-zinc-500 font-inter text-xs uppercase tracking-widest">
              {tier.period}
            </span>
          </div>

          <div className="w-12 h-1 bg-tjm-yellow mb-8" />

          <ul className="space-y-4 mb-12">
            {tier.benefits.map((benefit, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-zinc-400 group-hover:text-zinc-200 transition-colors"
              >
                <span className="text-tjm-yellow font-bold">✓</span>
                <span className="font-inter text-sm leading-tight">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>

          <button
            className={`w-full py-4 font-montserrat font-black uppercase tracking-widest text-sm transition-all ${
              tier.isFeatured
                ? "bg-tjm-yellow text-black hover:bg-white"
                : "border border-zinc-700 text-white hover:bg-zinc-800"
            }`}
          >
            Gabung Sekarang
          </button>
        </div>
      ))}
    </div>
  );
}
