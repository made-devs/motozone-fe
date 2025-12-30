"use client";

export default function BookingStep1({ next, update, data }) {
  const handleChange = (e) => {
    update({ ...data, [e.target.name]: e.target.value });
  };

  const isFormValid = data.name && data.whatsapp && data.motor;

  return (
    <div className="space-y-8">
      <div className="border-l-2 border-tjm-yellow pl-6 mb-10">
        <h3 className="text-xl font-montserrat font-black uppercase tracking-tight">
          Stage 01: Identification
        </h3>
        <p className="text-gray-500 text-xs font-mono uppercase">
          Masukkan data unit dan identitas pemilik
        </p>
      </div>

      <div className="grid gap-6">
        <div className="group">
          <label className="block text-[10px] font-mono uppercase text-gray-500 mb-2 tracking-[0.2em] group-focus-within:text-tjm-yellow transition-colors">
            Full Name //
          </label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="CONTOH: BUDI SANTOSO"
            className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white font-montserrat font-bold uppercase tracking-widest focus:outline-none focus:border-tjm-yellow focus:ring-1 focus:ring-tjm-yellow transition-all placeholder:opacity-20"
          />
        </div>

        <div className="group">
          <label className="block text-[10px] font-mono uppercase text-gray-500 mb-2 tracking-[0.2em] group-focus-within:text-tjm-yellow transition-colors">
            WhatsApp Number //
          </label>
          <input
            type="tel"
            name="whatsapp"
            value={data.whatsapp}
            onChange={handleChange}
            placeholder="0812XXXXXX"
            className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white font-mono font-bold tracking-widest focus:outline-none focus:border-tjm-yellow focus:ring-1 focus:ring-tjm-yellow transition-all placeholder:opacity-20"
          />
        </div>

        <div className="group">
          <label className="block text-[10px] font-mono uppercase text-gray-500 mb-2 tracking-[0.2em] group-focus-within:text-tjm-yellow transition-colors">
            Motor Type & Year //
          </label>
          <input
            type="text"
            name="motor"
            value={data.motor}
            onChange={handleChange}
            placeholder="CONTOH: HONDA VARIO 160 (2023)"
            className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white font-montserrat font-bold uppercase tracking-widest focus:outline-none focus:border-tjm-yellow focus:ring-1 focus:ring-tjm-yellow transition-all placeholder:opacity-20"
          />
        </div>
      </div>

      <div className="pt-10 flex justify-end">
        <button
          onClick={next}
          disabled={!isFormValid}
          className={`btn-precision px-12 py-4 ${
            !isFormValid ? "opacity-20 grayscale cursor-not-allowed" : ""
          }`}
        >
          Initialize Config
        </button>
      </div>
    </div>
  );
}
