"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function CaveManifesto({ data }) {
  const container = useRef();

  useGSAP(
    () => {
      // Animasi garis pembatas kuning
      gsap.from(".manifesto-line", {
        scrollTrigger: { trigger: ".manifesto-line", start: "top 80%" },
        width: 0,
        duration: 1.5,
        ease: "expo.out",
      });

      // Animasi teks manifesto
      gsap.from(".manifesto-text", {
        scrollTrigger: { trigger: ".manifesto-text", start: "top 80%" },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="py-32 bg-zinc-950 relative overflow-hidden"
    >
      {/* Ornamen Background: Stencil "CAVE" */}
      <div className="absolute -bottom-10 -right-10 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none italic uppercase">
        Manifesto
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div
            className="manifesto-line h-1 bg-yellow-400 mb-12"
            style={{ width: "120px" }}
          />
          <h2 className="text-yellow-400 font-montserrat font-black text-4xl md:text-6xl mb-8 uppercase italic tracking-tighter">
            {data.title}
          </h2>
          <p className="manifesto-text text-white font-inter text-2xl md:text-4xl leading-tight font-light italic">
            "{data.text}"
          </p>
        </div>

        {/* Ornamen Grafis: Jalur Kabel/Pipa (Garis Kuning) */}
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-yellow-400/20" />
      </div>
    </section>
  );
}
