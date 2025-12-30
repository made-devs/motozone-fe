export default function LaboratoryModule({ data }) {
  return (
    <div className="layout-container space-y-20">
      {/* Services List */}
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h4 className="text-2xl font-montserrat font-bold uppercase border-b border-tjm-yellow/20 pb-4">
            Precision Services
          </h4>
          <div className="grid gap-4">
            {data.services.map((s, i) => (
              <div
                key={i}
                className="p-4 bg-white/5 border-l border-tjm-yellow flex justify-between items-center group hover:bg-white/10 transition-all"
              >
                <span className="font-montserrat font-bold text-sm uppercase">
                  {s}
                </span>
                <span className="text-[10px] font-mono text-gray-500">
                  READY
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment */}
        <div className="space-y-6">
          <h4 className="text-2xl font-montserrat font-bold uppercase border-b border-tjm-yellow/20 pb-4">
            Lab Equipment
          </h4>
          <div className="grid grid-cols-2 gap-4">
            {data.equipment.map((e, i) => (
              <div key={i} className="p-4 border border-white/5">
                <div className="text-tjm-yellow font-bold text-xs mb-1 uppercase">
                  {e.name}
                </div>
                <div className="text-[10px] text-gray-500 uppercase">
                  {e.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ & Room Specs */}
      <div className="bg-white/5 p-12 grid md:grid-cols-2 gap-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-tjm-yellow/20" />
        <div>
          <h4 className="text-xl font-montserrat font-bold mb-6 uppercase tracking-widest">
            Common Questions
          </h4>
          <div className="space-y-6">
            {data.faq.map((f, i) => (
              <div key={i}>
                <div className="text-tjm-yellow text-sm font-bold mb-2">
                  Q: {f.q}
                </div>
                <div className="text-gray-400 text-sm pl-4 border-l border-white/10 font-inter">
                  {f.a}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-montserrat font-bold mb-6 uppercase tracking-widest">
            Room Specifications
          </h4>
          {data.roomSpecs.map((spec, i) => (
            <div
              key={i}
              className="flex items-center gap-4 text-xs font-mono text-gray-400 uppercase tracking-tighter"
            >
              <span className="text-tjm-yellow opacity-50">#</span> {spec}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
