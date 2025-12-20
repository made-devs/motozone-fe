'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: '01',
    title: 'DIAGNOSA',
    desc: 'Pengecekan sistem menggunakan scanner OBD2.',
  },
  {
    id: '02',
    title: 'ESTIMASI',
    desc: 'Transparansi biaya dan part sebelum pengerjaan.',
  },
  {
    id: '03',
    title: 'PENGERJAAN',
    desc: 'Eksekusi teknis sesuai SOP pabrikan.',
  },
  {
    id: '04',
    title: 'QUALITY CONTROL',
    desc: 'Final check & test ride oleh kepala mekanik.',
  },
];

export default function ServiceWorkflow() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from('.step-item', {
        opacity: 0,
        x: -30,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-metal/30 border-y border-border"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black text-white uppercase mb-16 italic">
          Technical <span className="text-signal">Workflow_</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-border">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="step-item p-10 border-r border-border last:border-r-0 hover:bg-metal transition-colors group"
            >
              <span className="block text-5xl font-black text-white/10 group-hover:text-signal transition-colors mb-6">
                {step.id}
              </span>
              <h3 className="text-xl font-black text-white uppercase mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
