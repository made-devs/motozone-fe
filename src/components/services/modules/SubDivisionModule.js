export default function SubDivisionModule({ data }) {
  return (
    <div className="layout-container">
      <div className="grid lg:grid-cols-2 gap-1 bg-white/5 border border-white/10">
        {data.divisions.map((div, idx) => (
          <div
            key={idx}
            className="relative p-12 hover:bg-white/[0.02] transition-colors group"
          >
            {/* Ornamen Pojok */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-tjm-yellow/30" />

            <div className="relative z-10">
              <span className="text-tjm-yellow font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block">
                Division // 0{idx + 1}
              </span>
              <h3 className="text-4xl font-montserrat font-black uppercase mb-8 leading-tight group-hover:text-tjm-yellow transition-colors">
                {div.name}
              </h3>

              <ul className="space-y-6">
                {div.services.map((service, i) => (
                  <li key={i} className="flex items-center gap-4 group/item">
                    <div className="w-2 h-2 bg-tjm-yellow rotate-45 group-hover/item:scale-125 transition-transform" />
                    <span className="text-gray-300 font-montserrat font-bold text-sm uppercase tracking-wider">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Aksen Background Visual */}
            <div className="absolute bottom-4 right-4 text-white/[0.02] font-montserrat font-black text-6xl italic select-none">
              TJM_LAB
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 border border-dashed border-white/10 text-center">
        <p className="text-gray-500 font-inter italic text-sm">
          "Presisi milimeter, stabil di kecepatan tinggi. Hasil tanpa getar
          dengan mesin otomatis."
        </p>
      </div>
    </div>
  );
}
