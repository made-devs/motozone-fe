"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function LegalFAQ({ faqs }) {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".faq-item", {
        scrollTrigger: { trigger: container.current, start: "top 80%" },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="mb-32">
      <h2 className="text-4xl font-montserrat font-black uppercase italic mb-16 border-l-4 border-tjm-yellow pl-6 text-white">
        FREQUENTLY ASKED <span className="text-tjm-yellow">QUESTIONS_</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="faq-item bg-zinc-900/50 p-8 border border-white/5 group hover:border-tjm-yellow transition-colors"
          >
            <span className="text-tjm-yellow font-mono text-xs tracking-widest mb-4 block">
              QUESTION_0{i + 1}
            </span>
            <h4 className="text-white font-montserrat font-bold text-lg mb-4 uppercase">
              {faq.q}
            </h4>
            <p className="text-gray-400 font-inter text-sm leading-relaxed">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
