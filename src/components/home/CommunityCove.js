"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const promises = [
  {
    title: "Servis Bersahabat",
    desc: "Bukan sekadar teknisi, kami adalah teman diskusi untuk setiap masalah motor Anda.",
    image: "/cave1.webp", // Mekanik/User diskusi
    tag: "RELATIONSHIP",
  },
  {
    title: "Hasil Profesional",
    desc: "Standar pengerjaan industri yang menjamin setiap baut terpasang dengan presisi.",
    image: "/cave2.webp", // Detail mesin kinclong
    tag: "ENGINEERING",
  },
  {
    title: "Komunitas Solid",
    desc: "Tempat berkumpulnya para rider yang menghargai kualitas dan persaudaraan.",
    image: "/cave3.webp", // Konvoi/Hangout motor
    tag: "BROTHERHOOD",
  },
];

export default function CommunityCave() {
  const container = useRef();

  useGSAP(
    () => {
      // Animasi Headline
      gsap.from(".cave-header", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animasi Cards
      gsap.from(".promise-card", {
        scrollTrigger: {
          trigger: ".promise-grid",
          start: "top 75%",
        },
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "expo.out",
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="bg-carbon-black py-24 relative overflow-hidden"
    >
      {/* Background Decorative Text */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.02] flex items-center">
        <h2 className="text-[40vw] font-montserrat font-black leading-none whitespace-nowrap -ml-20">
          CAVE CAVE CAVE
        </h2>
      </div>

      <div className="layout-container relative z-10">
        {/* Header Section */}
        <div className="cave-header mb-20 text-center">
          <span className="text-tjm-yellow font-montserrat font-black text-xs tracking-[0.5em] uppercase mb-4 block">
            The Inner Circle
          </span>
          <h2 className="text-5xl md:text-7xl font-montserrat font-bold uppercase mb-6 leading-none">
            KOMUNITAS <span className="text-tjm-yellow">CAVE.</span>
          </h2>
          <div className="w-24 h-1 bg-tjm-yellow mx-auto mb-8" />
          <p className="text-gray-400 font-inter text-lg md:text-xl max-w-2xl mx-auto italic">
            "Lebih dari sekadar bengkel, CAVE adalah rumah bagi mereka yang
            memuja presisi dan mengutamakan rasa hormat di jalan."
          </p>
        </div>

        {/* Promises Grid */}
        <div className="promise-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {promises.map((item, index) => (
            <div key={index} className="promise-card group flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden mb-6 border border-white/5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-[10px] font-mono text-tjm-yellow bg-black/80 px-2 py-1 tracking-widest">
                    {item.tag}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-montserrat font-bold uppercase mb-4 group-hover:text-tjm-yellow transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 font-inter leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Counter & Stats (Pemanis) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-y border-white/5 mb-24">
          <div className="text-center">
            <span className="block text-4xl font-montserrat font-black text-white italic">
              500+
            </span>
            <span className="text-[10px] text-gray-600 uppercase tracking-widest">
              Active Members
            </span>
          </div>
          <div className="text-center">
            <span className="block text-4xl font-montserrat font-black text-tjm-yellow italic">
              120+
            </span>
            <span className="text-[10px] text-gray-600 uppercase tracking-widest">
              Completed Rides
            </span>
          </div>
          <div className="text-center">
            <span className="block text-4xl font-montserrat font-black text-white italic">
              24/7
            </span>
            <span className="text-[10px] text-gray-600 uppercase tracking-widest">
              Lounge Access
            </span>
          </div>
          <div className="text-center">
            <span className="block text-4xl font-montserrat font-black text-tjm-yellow italic">
              0.0
            </span>
            <span className="text-[10px] text-gray-600 uppercase tracking-widest">
              Ego Policy
            </span>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative p-1 bg-gradient-to-r from-tjm-yellow/20 via-tjm-yellow to-tjm-yellow/20">
          <div className="bg-carbon-black p-12 text-center">
            <h4 className="text-2xl md:text-3xl font-montserrat font-bold mb-8 uppercase tracking-tighter">
              SIAP MENJADI BAGIAN DARI{" "}
              <span className="text-tjm-yellow">KELUARGA BESAR</span> KAMI?
            </h4>
            <button className="group relative bg-tjm-yellow text-black px-12 py-5 font-montserrat font-black uppercase tracking-widest hover:bg-white transition-all">
              <span className="relative z-10">Gabung Komunitas CAVE</span>
              <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
