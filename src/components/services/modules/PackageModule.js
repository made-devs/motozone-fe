export default function PackageModule({ data }) {
  return (
    <div className="layout-container">
      <div className="grid md:grid-cols-3 gap-8">
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`relative p-8 border ${
              item.isFeatured
                ? "border-tjm-yellow bg-tjm-yellow/5"
                : "border-white/10"
            } flex flex-col`}
          >
            {item.isFeatured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-tjm-yellow text-black text-[10px] font-black px-4 py-1 uppercase tracking-widest">
                Most Recommended
              </span>
            )}
            <h3 className="text-3xl font-montserrat font-bold uppercase mb-1">
              {item.name}
            </h3>
            <span className="text-tjm-yellow font-mono text-xl mb-6">
              {item.tier}
            </span>
            <p className="text-gray-400 text-sm mb-8 font-inter">
              {item.focus}
            </p>

            <ul className="space-y-4 mb-10 flex-1">
              {item.details?.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-gray-300"
                >
                  <span className="text-tjm-yellow">▹</span> {point}
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-white/5 mt-auto text-center font-montserrat font-bold text-xs uppercase tracking-widest">
              Goal: {item.goal}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
