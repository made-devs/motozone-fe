"use client";

export default function TheEquipment({ equipment }) {
  return (
    <section className="py-32 bg-zinc-950 border-y border-white/5 px-6">
      <div className="layout-container">
        <div className="mb-20">
          <h2 className="text-4xl font-montserrat font-black uppercase tracking-tighter italic">
            LABORATORY <span className="text-tjm-yellow">EQUIPMENT_</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/5 border border-white/5">
          {equipment.map((item, idx) => (
            <div
              key={idx}
              className="bg-carbon-black p-10 group hover:bg-tjm-yellow transition-colors duration-500"
            >
              <span className="text-[10px] font-mono text-tjm-yellow group-hover:text-black mb-6 block tracking-[0.5em]">
                SYS_VER_0{idx + 1}
              </span>
              <h3 className="text-2xl font-montserrat font-black uppercase mb-2 group-hover:text-black">
                {item.name}
              </h3>
              <p className="text-tjm-yellow group-hover:text-black/60 text-xs font-bold mb-6 uppercase tracking-widest">
                {item.brand}
              </p>
              <p className="text-gray-500 group-hover:text-black font-inter text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
