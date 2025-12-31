"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function AboutStory({ data }) {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".story-img", {
        scrollTrigger: { trigger: ".story-img", start: "top 80%" },
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
      });
      gsap.from(".story-content", {
        scrollTrigger: { trigger: ".story-content", start: "top 80%" },
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="py-32 overflow-hidden px-6">
      <div className="layout-container grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="story-img relative">
          <div className="absolute -top-4 -left-4 w-32 h-32 border-t-4 border-l-4 border-tjm-yellow z-0" />
          <img
            src={data.image}
            alt="TJM Story"
            className="relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute -bottom-8 -right-8 text-tjm-yellow/10 font-black text-9xl italic z-0">
            EST_2020
          </div>
        </div>

        <div className="story-content">
          <span className="text-tjm-yellow font-black italic tracking-widest text-sm block mb-4">
            _SINCE THE BEGINNING
          </span>
          <h2 className="text-5xl font-montserrat font-black uppercase mb-8 leading-none tracking-tighter">
            {data.title}
          </h2>
          <p className="text-gray-400 text-xl font-inter leading-relaxed italic border-l-2 border-tjm-yellow/30 pl-8">
            "{data.description}"
          </p>
        </div>
      </div>
    </section>
  );
}
