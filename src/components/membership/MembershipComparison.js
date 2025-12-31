export default function MembershipComparison() {
  const features = [
    {
      name: "Prioritas Servis",
      silver: "24 Jam",
      gold: "VIP",
      platinum: "Platinum Priority",
    },
    {
      name: "Penjemputan Motor",
      silver: "X",
      gold: "S&K",
      platinum: "Gratis Radius 15km",
    },
    {
      name: "Dyno Analysis",
      silver: "Harga Normal",
      gold: "1x Gratis",
      platinum: "Unlimited Check",
    },
    { name: "Akses Lounge", silver: "✓", gold: "✓", platinum: "✓" },
  ];

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="layout-container">
        <h3 className="text-2xl font-montserrat font-black uppercase italic mb-12 text-center text-tjm-yellow">
          Technical Comparison_
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-tjm-yellow">
                <th className="py-6 px-4 font-montserrat font-black text-white uppercase italic">
                  Benefit
                </th>
                <th className="py-6 px-4 font-montserrat font-black text-zinc-400 uppercase italic">
                  Silver
                </th>
                <th className="py-6 px-4 font-montserrat font-black text-tjm-yellow uppercase italic">
                  Gold
                </th>
                <th className="py-6 px-4 font-montserrat font-black text-white uppercase italic text-shadow-glow">
                  Platinum
                </th>
              </tr>
            </thead>
            <tbody className="font-inter">
              {features.map((f, i) => (
                <tr
                  key={i}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="py-6 px-4 text-white font-bold text-sm uppercase">
                    {f.name}
                  </td>
                  <td className="py-6 px-4 text-zinc-500 text-sm">
                    {f.silver}
                  </td>
                  <td className="py-6 px-4 text-tjm-yellow text-sm font-bold">
                    {f.gold}
                  </td>
                  <td className="py-6 px-4 text-white text-sm font-bold italic">
                    {f.platinum}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
