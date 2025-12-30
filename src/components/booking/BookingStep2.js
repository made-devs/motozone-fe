"use client";
import { bookingOptions } from "@/data/booking";

export default function BookingStep2({ next, prev, update, data }) {
  return (
    <div className="space-y-10">
      <div>
        <label className="block font-montserrat font-bold uppercase text-xs mb-4 tracking-widest text-tjm-yellow">
          Pilih Paket Service
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {bookingOptions.packages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => update({ ...data, package: pkg.name })}
              className={`p-4 text-left border text-xs font-bold uppercase transition-all ${
                data.package === pkg.name
                  ? "border-tjm-yellow bg-tjm-yellow text-black"
                  : "border-white/10 text-white hover:border-white/30"
              }`}
            >
              {pkg.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block font-montserrat font-bold uppercase text-xs mb-4 tracking-widest text-tjm-yellow">
          Pilih Jam Kedatangan
        </label>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {bookingOptions.timeSlots.map((slot) => (
            <button
              key={slot.time}
              disabled={slot.status === "full"}
              onClick={() => update({ ...data, time: slot.time })}
              className={`py-3 border text-[10px] font-mono transition-all
                ${
                  slot.status === "full"
                    ? "opacity-20 cursor-not-allowed line-through"
                    : ""
                }
                ${
                  data.time === slot.time
                    ? "bg-white text-black border-white"
                    : "border-white/10 text-white hover:border-tjm-yellow"
                }
              `}
            >
              {slot.time}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between pt-10">
        <button
          onClick={prev}
          className="text-xs uppercase font-bold text-gray-500 hover:text-white"
        >
          Kembali
        </button>
        <button onClick={next} className="btn-precision px-10 py-3">
          Next Step
        </button>
      </div>
    </div>
  );
}
