export default function SimpleModule({ data }) {
  return (
    <div className="layout-container">
      <div className="max-w-4xl mx-auto">
        {/* Price Tag Highlight (Khusus buat Helm Spa atau promo) */}
        {data.priceTag && (
          <div className="mb-12 inline-block bg-tjm-yellow text-black px-6 py-2 font-montserrat font-black uppercase tracking-widest skew-x-[-12deg]">
            <span className="inline-block skew-x-[12deg]">{data.priceTag}</span>
          </div>
        )}

        <div className="grid gap-6">
          {data.features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-metallic-gray/5 border border-white/5 p-8 flex flex-col md:flex-row md:items-center justify-between hover:border-tjm-yellow/30 transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="text-tjm-yellow font-mono text-lg font-bold opacity-40">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </div>
                <div>
                  <h4 className="text-xl font-montserrat font-bold uppercase mb-1">
                    {feature.name}
                  </h4>
                  {feature.desc && (
                    <p className="text-gray-500 text-sm font-inter">
                      {feature.desc}
                    </p>
                  )}
                  {feature.time && (
                    <span className="inline-block mt-2 text-[10px] font-mono bg-white/5 px-2 py-1 text-gray-400">
                      EST: {feature.time}
                    </span>
                  )}
                </div>
              </div>

              {/* Status Indicator */}
              <div className="mt-4 md:mt-0 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-tjm-yellow animate-pulse" />
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  Ready to Service
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note Tambahan */}
        <div className="mt-12 flex items-center gap-4 text-gray-500 text-[11px] font-mono uppercase tracking-[0.2em]">
          <div className="h-[1px] flex-1 bg-white/10" />
          <span>TJM Precision Standards Applied</span>
          <div className="h-[1px] flex-1 bg-white/10" />
        </div>
      </div>
    </div>
  );
}
