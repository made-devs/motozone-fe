"use client";

export default function BookingStep3({ submit, prev, update, data }) {
  return (
    <div className="space-y-8">
      <div className="border-l-2 border-tjm-yellow pl-6 mb-10">
        <h3 className="text-xl font-montserrat font-black uppercase tracking-tight">
          Stage 03: Final Verification
        </h3>
        <p className="text-gray-500 text-xs font-mono uppercase">
          Review detail jadwal dan paket pilihan
        </p>
      </div>

      {/* Review Data Display */}
      <div className="grid md:grid-cols-2 gap-4 bg-white/5 p-6 border border-white/5">
        <div className="space-y-4">
          <div>
            <span className="text-[9px] font-mono text-gray-600 block uppercase">
              Customer
            </span>
            <span className="font-montserrat font-bold uppercase text-sm tracking-wide">
              {data.name}
            </span>
          </div>
          <div>
            <span className="text-[9px] font-mono text-gray-600 block uppercase">
              WhatsApp
            </span>
            <span className="font-mono font-bold text-sm tracking-wide">
              {data.whatsapp}
            </span>
          </div>
          <div>
            <span className="text-[9px] font-mono text-gray-600 block uppercase">
              Unit
            </span>
            <span className="font-montserrat font-bold uppercase text-sm tracking-wide">
              {data.motor}
            </span>
          </div>
        </div>
        <div className="space-y-4 md:border-l md:border-white/10 md:pl-6">
          <div>
            <span className="text-[9px] font-mono text-gray-600 block uppercase">
              Service Package
            </span>
            <span className="font-montserrat font-bold uppercase text-sm tracking-wide text-tjm-yellow">
              {data.package}
            </span>
          </div>
          <div>
            <span className="text-[9px] font-mono text-gray-600 block uppercase">
              Schedule
            </span>
            <span className="font-montserrat font-bold uppercase text-sm tracking-wide">
              {data.date} // {data.time}
            </span>
          </div>
        </div>
      </div>

      {/* Special Instructions / Notes */}
      <div className="group">
        <label className="block text-[10px] font-mono uppercase text-gray-500 mb-2 tracking-[0.2em] group-focus-within:text-tjm-yellow transition-colors">
          Special Instructions (Optional) //
        </label>
        <textarea
          name="notes"
          value={data.notes}
          onChange={(e) => update({ ...data, notes: e.target.value })}
          rows="4"
          placeholder="TULIS KELUHAN SPESIFIK ATAU REQUEST TAMBAHAN DI SINI..."
          className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white font-inter text-sm focus:outline-none focus:border-tjm-yellow transition-all placeholder:opacity-20 resize-none"
        ></textarea>
      </div>

      <div className="flex justify-between items-center pt-6">
        <button
          onClick={prev}
          className="text-xs font-montserrat font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
        >
          Re-calibrate
        </button>
        <button
          onClick={submit}
          className="btn-precision px-12 py-4 flex items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
          Transmit Booking
        </button>
      </div>
    </div>
  );
}
