export default function WarrantySection({ data }) {
  return (
    <section className="mb-32 bg-tjm-yellow p-1 md:p-12 relative overflow-hidden">
      {/* Ornamen Caution Lines */}
      <div
        className="absolute top-0 right-0 w-32 h-full opacity-10 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #000, #000 10px, transparent 10px, transparent 20px)`,
        }}
      />

      <div className="bg-black p-8 md:p-16 border border-black/10">
        <h2 className="text-5xl md:text-7xl font-montserrat font-black uppercase italic tracking-tighter mb-10 text-tjm-yellow">
          {data.title}
        </h2>
        <ul className="space-y-6">
          {data.points.map((point, i) => (
            <li key={i} className="flex items-start gap-4">
              <div className="w-6 h-6 bg-tjm-yellow flex-shrink-0 flex items-center justify-center mt-1">
                <span className="text-black font-black text-xs">{i + 1}</span>
              </div>
              <p className="text-white font-inter font-bold uppercase text-sm md:text-base tracking-wide">
                {point}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
