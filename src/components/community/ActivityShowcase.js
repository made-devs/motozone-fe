"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ActivityShowcase({ activities }) {
  const sectionRef = useRef();

  useGSAP(
    () => {
      activities.forEach((_, i) => {
        gsap.from(`.act-card-${i}`, {
          scrollTrigger: {
            trigger: `.act-card-${i}`,
            start: "top 80%",
          },
          x: i % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-black relative">
      {/* Background Graphic Shape */}
      <div className="absolute left-0 top-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 border-[40px] border-yellow-400 rounded-full" />
      </div>

      <div className="container mx-auto">
        <h2 className="text-5xl font-montserrat font-black mb-20 italic text-yellow-400 uppercase tracking-tighter">
          Community Activities_
        </h2>

        <div className="grid grid-cols-1 gap-32">
          {activities.map((act, i) => (
            <div
              key={act.id}
              className={`act-card-${i} flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-12`}
            >
              <div className="w-full md:w-1/2 relative group">
                {/* Yellow Frame Ornament */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-yellow-400 group-hover:scale-110 transition-transform" />
                <div className="aspect-video overflow-hidden">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-yellow-400 font-black text-6xl opacity-20 font-montserrat">
                  0{i + 1}
                </span>
                <h3 className="text-4xl font-montserrat font-extrabold mb-4 uppercase">
                  {act.title}
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  {act.desc}
                </p>
                <div className="mt-8 h-1 w-24 bg-yellow-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
