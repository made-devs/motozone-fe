"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import PageHero from "@/components/layout/PageHero";
import BookingStep1 from "@/components/booking/BookingStep1";
import BookingStep2 from "@/components/booking/BookingStep2";
import BookingStep3 from "@/components/booking/BookingStep3";
import BookingSuccess from "@/components/booking/BookingSuccess";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    motor: "",
    package: "",
    date: "",
    time: "",
    notes: "",
  });

  const formRef = useRef();

  const changeStep = (nextStep) => {
    const tl = gsap.timeline();
    // Animasi keluar
    tl.to(formRef.current, {
      x: -20,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setStep(nextStep);
        // Animasi masuk
        gsap.fromTo(
          formRef.current,
          { x: 20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        );
      },
    });
  };

  return (
    <main className="bg-carbon-black min-h-screen pb-20 overflow-hidden">
      <PageHero
        subtitle="Operational System"
        titleTop="Booking"
        titleMain="Online"
        description="Tentukan jadwal tanpa antre. Sistem presisi TJM Motozone."
      />

      <section className="layout-container -mt-10 relative z-30">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 bg-metallic-gray/10 border border-white/5 p-8 md:p-12 relative">
            {/* Progress Bar GSAP */}
            <div className="flex gap-2 mb-12">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className="h-1 flex-1 bg-white/10 relative overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-tjm-yellow transition-transform duration-700 ${
                      step >= s ? "translate-x-0" : "-translate-x-full"
                    }`}
                  />
                </div>
              ))}
            </div>

            <div ref={formRef}>
              {step === 1 && (
                <BookingStep1
                  next={() => changeStep(2)}
                  update={setFormData}
                  data={formData}
                />
              )}
              {step === 2 && (
                <BookingStep2
                  next={() => changeStep(3)}
                  prev={() => changeStep(1)}
                  update={setFormData}
                  data={formData}
                />
              )}
              {step === 3 && (
                <BookingStep3
                  submit={() => changeStep(4)}
                  prev={() => changeStep(2)}
                  data={formData}
                />
              )}
              {step === 4 && <BookingSuccess data={formData} />}
            </div>
          </div>

          {/* Side Dashboard (Summary) */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 border border-white/10 p-8 bg-carbon-black">
              <h3 className="font-montserrat font-bold text-tjm-yellow uppercase mb-6 tracking-widest text-sm">
                Booking Summary
              </h3>
              <ul className="space-y-4 font-mono text-[11px] uppercase tracking-tighter text-gray-400">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Customer</span>{" "}
                  <span className="text-white">{formData.name || "-"}</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Unit</span>{" "}
                  <span className="text-white">{formData.motor || "-"}</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Service</span>{" "}
                  <span className="text-white truncate max-w-[150px]">
                    {formData.package || "-"}
                  </span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Schedule</span>{" "}
                  <span className="text-white">
                    {formData.date} {formData.time}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
