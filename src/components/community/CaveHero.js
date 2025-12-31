"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function CaveHero({ data }) {
  const container = useRef();

  useGSAP(
    () => {
      // Animasi garis caution yang memanjang saat masuk
      gsap.from(".caution-bar", { width: 0, duration: 1.5, ease: "expo.out" });
      // Animasi teks muncul dari bawah
      gsap.from(".reveal", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
      });
    },
    { scope: container }
  );

  const words = (data?.title ?? "").trim().split(/\s+/);
  const firstWord = words[0] ?? "";
  const restWords = words.slice(1).join(" "); // biar gak hilang kalau > 2 kata

  return (
    <section
      ref={container}
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={data.image}
          className="w-full h-full object-cover opacity-40"
          alt="Cave"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      {/* Ornamen Grafis (Kuning) */}
      <div
        className="caution-bar absolute top-24 left-0 h-2 bg-yellow-400 z-10"
        style={{ width: "40%" }}
      />
      <div className="absolute -right-20 top-0 h-full w-64 bg-yellow-400 -skew-x-12 opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <div className="overflow-hidden mb-2">
            <span className="reveal inline-block text-yellow-400 font-montserrat font-bold tracking-[0.3em] uppercase">
              {data.subtitle}
            </span>
          </div>

          {/* sebelum: overflow-hidden mb-6 */}
          <div className="mb-6 pt-2 pb-3">
            <h1 className="reveal text-6xl md:text-8xl lg:text-9xl font-montserrat font-black uppercase leading-[0.9] tracking-tighter break-words">
              <span className="block">{firstWord}</span>
              {restWords ? (
                <span className="block text-yellow-400">{restWords}</span>
              ) : null}
            </h1>
          </div>

          <p className="reveal text-zinc-400 font-inter text-lg md:text-xl max-w-xl border-l-4 border-yellow-400 pl-6">
            {data.description}
          </p>
        </div>
      </div>

      {/* Industrial Bottom Decor */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-yellow-400 flex items-center overflow-hidden">
        <div className="flex space-x-8 whitespace-nowrap text-black font-black italic text-sm animate-marquee">
          {Array(10)
            .fill("RIDE TOGETHER FIX BETTER • ")
            .map((t, i) => (
              <span key={i}>{t}</span>
            ))}
        </div>
      </div>
    </section>
  );
}
