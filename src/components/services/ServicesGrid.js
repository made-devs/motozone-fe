"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    slug: "inspeksi-motor",
    title: "Inspeksi 30/55/110",
    desc: "32-110 Titik pengecekan presisi.",
    img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800",
    size: "lg",
  },
  {
    slug: "engine-service",
    title: "Engine Service",
    desc: "Tune up & optimalisasi performa.",
    img: "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?q=80&w=800",
    size: "wide",
  },
  {
    slug: "suspension-chassis",
    title: "Suspension & Chassis",
    desc: "Kalibrasi kenyamanan & stabilitas.",
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?q=80&w=800",
    size: "sm",
  },
  {
    slug: "dyno-performance",
    title: "Dyno Performance",
    desc: "Uji tenaga & torsi real-time.",
    img: "https://images.unsplash.com/photo-1591438200350-1df5c312784d?q=80&w=800",
    size: "sm",
  },
  {
    slug: "tire-division",
    title: "Tire Division",
    desc: "Pemasangan ban otomatis standar balap.",
    img: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?q=80&w=800",
    size: "sm",
  },
  {
    slug: "detailing-coating",
    title: "Detailing & Coating",
    desc: "Proteksi cat hingga 9H Hardness.",
    img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800",
    size: "sm",
  },
  {
    slug: "radiator-service",
    title: "Radiator Service",
    desc: "Pembersihan jalur pendingin mesin.",
    img: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=800",
    size: "sm",
  },
  {
    slug: "electrical-diagnostic",
    title: "Electrical & Diagnostic",
    desc: "Scan OBD & mapping kelistrikan.",
    img: "https://images.unsplash.com/photo-1581092160562-40aa9dad1c89?q=80&w=800",
    size: "sm",
  },
  {
    slug: "helm-spa",
    title: "Helm Spa Foam+",
    desc: "Sanitasi & perawatan riding gear.",
    img: "https://images.unsplash.com/photo-1558981420-87aa9dad1c89?q=80&w=800",
    size: "sm",
  },
];

export default function ServicesGrid() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".service-card", {
        y: 60,
        opacity: 0,
        stagger: 0.1,
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
    <section ref={container} className="py-10">
      <div className="layout-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((item, i) => (
            <Link
              key={item.slug}
              href={`/services/${item.slug}`}
              className={`service-card group relative bg-metallic-gray/10 border border-white/5 overflow-hidden
                ${
                  item.size === "lg"
                    ? "lg:col-span-2 lg:row-span-2 min-h-[500px]"
                    : "min-h-[280px]"
                }
                ${item.size === "wide" ? "lg:col-span-2" : ""}
              `}
            >
              {/* ORNAMEN MEKANIS (Visual Only) */}
              <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-tjm-yellow opacity-40" />
              <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-tjm-yellow opacity-40" />
              <div className="absolute top-0 right-10 flex gap-1 opacity-20">
                {[...Array(5)].map((_, j) => (
                  <div key={j} className="w-[1px] h-3 bg-white" />
                ))}
              </div>

              {/* IMAGE WITH ASSEMBLY HOVER */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover opacity-30 grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-transparent to-transparent" />
              </div>

              {/* TEXT CONTENT */}
              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                <span className="text-[10px] font-mono text-tjm-yellow tracking-[0.3em] mb-2">
                  0{i + 1} //
                </span>
                <h3 className="text-2xl font-montserrat font-bold uppercase leading-tight mb-2 group-hover:text-tjm-yellow transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 font-inter max-w-[200px] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
