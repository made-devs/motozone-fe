export const membershipData = {
  hero: {
    subtitle: "Elite Access",
    titleTop: "CAVE",
    titleMain: "MEMBERSHIP",
    description:
      "Masuk ke dalam lingkaran eksklusif TJM CAVE Performance. Nikmati penghematan biaya perawatan, prioritas antrean tanpa kompromi, dan bonus performa khusus member.",
    bgImage:
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1600",
  },
  tiers: [
    {
      id: "silver",
      name: "Silver Tier",
      price: "1 Juta",
      period: "per tahun",
      accent: "text-zinc-400",
      border: "border-zinc-400/20",
      benefits: [
        "Prioritas Antrean (Booking 24 Jam)",
        "Diskon Jasa Servis 5%",
        "1x Free Nano Wash",
        "Akses Lounge & Coffee Corner",
      ],
    },
    {
      id: "gold",
      name: "Gold Tier",
      price: "3 Juta",
      period: "per tahun",
      accent: "text-tjm-yellow",
      border: "border-tjm-yellow",
      isFeatured: true,
      benefits: [
        "Prioritas Utama (Tanpa Antre)",
        "Diskon Jasa Servis 10%",
        "Diskon Suku Cadang 5%",
        "1x Free Dyno Test & Analysis",
        "4x Free Nano Wash",
      ],
    },
    {
      id: "platinum",
      name: "Platinum Tier",
      price: "5 Juta",
      period: "per tahun",
      accent: "text-white",
      border: "border-white/50",
      benefits: [
        "Concierge Service (Antar Jemput)",
        "Diskon Jasa Servis 15%",
        "Diskon Suku Cadang 10%",
        "Unlimited Dyno Check-Up",
        "Free Detailing & Coating Module",
        "Akses Eksklusif Event Track Day",
      ],
    },
  ],
};
