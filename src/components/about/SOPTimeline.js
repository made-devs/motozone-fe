const steps = [
  'CHECK-IN',
  'DIAGNOSA',
  'ESTIMASI',
  'APPROVAL',
  'PENGERJAAN',
  'QC',
  'DELIVERY',
];

export default function SOPTimeline() {
  return (
    <section className="py-24 bg-metal/20">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-black text-white uppercase mb-16 tracking-widest">
          The <span className="text-signal">Standard_</span> Workflow
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-4 overflow-x-auto pb-8">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 min-w-[150px] relative">
              <div className="bg-metal border border-border p-6 text-center group hover:border-signal transition-colors rounded-none">
                <span className="block text-xs text-neutral-500 font-bold mb-2">
                  STEP 0{i + 1}
                </span>
                <span className="text-white font-black uppercase text-sm group-hover:text-signal">
                  {step}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10 text-signal font-bold">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
