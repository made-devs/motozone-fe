export default function RoadmapModule({ data }) {
  return (
    <div className="layout-container space-y-24">
      {data.map((item, idx) => (
        <div
          key={idx}
          className="relative grid lg:grid-cols-12 gap-12 items-center group"
        >
          {/* Background Number */}
          <div className="absolute -left-10 top-0 text-[15rem] font-montserrat font-black text-white/[0.03] pointer-events-none select-none">
            0{item.id}
          </div>

          <div className="lg:col-span-5 relative z-10">
            <h3 className="text-4xl font-montserrat font-bold uppercase leading-tight mb-4">
              {item.name} <br />
              <span className="text-tjm-yellow text-xl">{item.subtitle}</span>
            </h3>
            <div className="flex gap-6 font-mono text-xs text-gray-500 uppercase tracking-widest">
              <span>Time: {item.time}</span>
              <span>Insp: {item.inspection}</span>
            </div>
          </div>

          <div className="lg:col-span-7 bg-metallic-gray/10 p-8 border-l-2 border-tjm-yellow/50">
            <p className="text-white font-inter text-lg mb-4 italic opacity-80">
              "{item.goal}"
            </p>
            <div className="grid grid-cols-2 gap-4">
              {item.details?.map((detail, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-400"
                >
                  <div className="w-1 h-1 bg-tjm-yellow" /> {detail}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
