"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Service Rutin",
    desc: "Pengecekan berkala standar pabrikan.",
    icon: "01",
  },
  {
    title: "Engine Tune Up",
    desc: "Kalibrasi ulang untuk performa maksimal.",
    icon: "02",
  },
  { title: "Kaki-Kaki", desc: "Suspensi, bearing, dan handling.", icon: "03" },
  { title: "Pengereman", desc: "Kampas, minyak rem, dan kaliper.", icon: "04" },
  {
    title: "Kelistrikan",
    desc: "Diagnosa ECU, lampu, dan wiring.",
    icon: "05",
  },
  {
    title: "Ban & Oli",
    desc: "Penggantian ban dan pelumas premium.",
    icon: "06",
  },
];

export default function ServicesSection() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".service-card");

      // Animasi muncul per kartu saat di-scroll
      gsap.from(cards, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  // Fungsi hover animation mouse enter/leave manual biar smooth
  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      borderColor: "#FACC15",
      backgroundColor: "#171717",
      duration: 0.3,
    });
    gsap.to(e.currentTarget.querySelector(".service-icon"), {
      color: "#FACC15",
      x: 10,
      duration: 0.3,
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      borderColor: "#262626",
      backgroundColor: "transparent",
      duration: 0.3,
    });
    gsap.to(e.currentTarget.querySelector(".service-icon"), {
      color: "#333",
      x: 0,
      duration: 0.3,
    });
  };

  return (
    <section ref={containerRef} className="py-24 bg-canvas relative z-10">
      <div className="container mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="mb-16 border-b border-neutral-800 pb-8 flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <span className="text-signal font-mono text-sm tracking-widest mb-2 block">
              OUR EXPERTISE
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase">
              Layanan Kami
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-right md:text-left">
            Menangani segala jenis motor dengan peralatan standar industri dan
            mekanik tersertifikasi.
          </p>
        </div>

        {/* GRID CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, index) => (
            <div
              key={index}
              className="service-card group border border-neutral-800 p-8 cursor-pointer transition-colors relative overflow-hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="service-icon text-5xl font-black text-neutral-800 absolute top-4 right-4 transition-colors select-none">
                {svc.icon}
              </span>

              <div className="relative z-10 mt-12">
                <h3 className="text-2xl font-bold text-white uppercase mb-3">
                  {svc.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  {svc.desc}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 left-0 w-3 h-3 bg-neutral-800 group-hover:bg-signal transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
