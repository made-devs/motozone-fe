export default function TrainingTimeline({ schedule }) {
  return (
    <section className="py-32 px-6">
      <div className="layout-container">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-montserrat font-black uppercase italic mb-4">
            7-DAY <span className="text-tjm-yellow">INTERNAL TRAINING_</span>
          </h2>
          <p className="text-gray-500">
            Standarisasi keahlian teknisi kami melalui pelatihan intensif
            berkelanjutan.
          </p>
        </div>

        <div className="border border-white/10 overflow-hidden">
          {schedule.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-4 border-b border-white/5 last:border-0 group"
            >
              <div className="bg-zinc-900/50 p-6 font-montserrat font-black uppercase italic text-tjm-yellow border-r border-white/10 group-hover:bg-tjm-yellow group-hover:text-black transition-colors">
                {item.day}
              </div>
              <div className="md:col-span-3 p-6 text-white font-inter font-medium tracking-wide">
                {item.topic}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
