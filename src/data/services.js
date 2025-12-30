export const servicesData = {
  "inspeksi-motor": {
    title: "Inspeksi Motor TJM",
    highlightTitle: "Standar QC Motozone",
    subtitle: "Quality Control",
    description:
      "Menentukan kondisi real motor Anda untuk rekomendasi akurat. Laporan digital before–after.",
    heroImage:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1600",
    layoutType: "packages",
    packages: [
      {
        name: "Paket Reguler",
        tier: "30 Titik",
        focus: "Pemeriksaan dasar mesin, rem, ban, kelistrikan ringan.",
        goal: "Performa dan keamanan harian.",
        details: [
          "Cek Oli Mesin",
          "Cek Ketebalan Ban",
          "Cek Sistem Pengereman",
          "Cek Lampu-lampu",
          "30 Poin Inspeksi Lengkap...",
        ],
        addon: "Tambah opsi Nano Wash untuk finishing.",
      },
      {
        name: "Paket Super",
        tier: "55 Titik",
        focus:
          "Pemeriksaan mendalam seluruh sistem utama termasuk CVT, pendinginan, suspensi.",
        goal: "Kenyamanan berkendara maksimal.",
        isFeatured: true,
        subSections: [
          { title: "Mesin & CVT", points: ["Poin 1", "Poin 2"] },
          { title: "Suspensi & Kaki-Kaki", points: ["Poin 1", "Poin 2"] },
          { title: "Rem & Kelistrikan", points: ["Poin 1", "Poin 2"] },
          { title: "Bahan Bakar & Pendingin", points: ["Poin 1", "Poin 2"] },
        ],
      },
      {
        name: "Paket Ultra",
        tier: "110 Titik",
        focus:
          "Pemeriksaan total seluruh sistem (engine, kaki, CVT, rangka, kelistrikan, fuel, pendinginan, body, QC akhir).",
        goal: "Hasil rebuild sempurna, siap dyno.",
        details: ["Sub-bagian A s.d. J lengkap", "110 Poin Inspeksi Total..."],
      },
    ],
    cta: { primary: "Booking Inspeksi", secondary: "Konsultasi Mekanik" },
  },

  "engine-service": {
    title: "Engine Service",
    highlightTitle: "We Rebuild, Not Replace",
    subtitle: "Precision Rebuild",
    description:
      "Dari servis ringan harian hingga total overhaul dengan garansi.",
    heroImage:
      "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?q=80&w=1600",
    layoutType: "roadmap",
    packages: [
      {
        id: 1,
        name: "Basic Engine Service",
        subtitle: "Ganti Oli + Tune Up 4 in 1",
        price: "Tanya Admin",
        time: "±30 Menit",
        inspection: "20 Titik",
        goal: "Mesin bersih, halus, irit.",
        details: ["Rincian pekerjaan sesuai materi..."],
      },
      {
        id: 2,
        name: "Fuel System Restoration",
        subtitle: "Gurah + Tune Up 4 in 1",
        price: "Tanya Admin",
        time: "±45 Menit",
        inspection: "35 Titik",
        goal: "Tarikan kembali, efisiensi BBM.",
        details: ["Pembersihan kerak karbon", "Kalibrasi injector"],
      },
      {
        id: 3,
        name: "Mechanical Tune-Up",
        subtitle: "Setel Klep + Noken As + 4 in 1",
        price: "Tanya Admin",
        time: "±1.5 Jam",
        inspection: "55 Titik",
        goal: "Halus, tenaga stabil, efisiensi maksimal.",
        details: ["Penyetelan celah katup", "Pengecekan komponen head"],
      },
      {
        id: 4,
        name: "Engine Half Rebuild",
        subtitle: "Internal Service + 4 in 1",
        price: "Tanya Admin",
        time: "±1 Hari",
        inspection: "80 Titik",
        goal: "Senyap, tidak bocor, tenaga balik seperti baru.",
        details: ["Bongkar blok piston", "Skir klep", "Ganti paking set"],
      },
      {
        id: 5,
        name: "Engine Full Overhaul",
        subtitle: "Total Rebuild + 4 in 1",
        price: "Tanya Admin",
        time: "±1-2 Hari",
        inspection: "110 Titik",
        goal: "Seperti baru, halus, bertenaga, presisi jangka panjang.",
        details: [
          "Restorasi total mesin",
          "Pengecekan kruk as",
          "Ganti bearing total",
        ],
      },
    ],
    cta: { primary: "Konsultasi Mesin", secondary: "Booking Sekarang" },
  },

  "suspension-chassis": {
    title: "Suspension & Chassis",
    highlightTitle: "Stabil, Presisi, Nyaman",
    subtitle: "Steering Division",
    description: "Rebuild total kaki-kaki dan steering dengan standar lab.",
    heroImage:
      "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?q=80&w=1600",
    layoutType: "roadmap",
    packages: [
      {
        id: 1,
        name: "Basic Suspension Care",
        time: "±1 Jam",
        inspection: "25 Titik",
        goal: "Stabil, nyaman, aman harian.",
      },
      {
        id: 2,
        name: "Wheel & Brake Service",
        time: "±2 Jam",
        inspection: "40 Titik",
        goal: "Rem pakem, roda stabil.",
      },
      {
        id: 3,
        name: "CVT & Chassis Rebuild",
        time: "±1.5 Jam",
        inspection: "60 Titik",
        goal: "Tarikan mulus, motor stabil.",
      },
      {
        id: 4,
        name: "Full Suspension Rebuild",
        time: "±4 Jam",
        inspection: "80 Titik",
        goal: "Empuk, stabil, handling presisi.",
      },
      {
        id: 5,
        name: "Chassis & Underbody Restoration",
        time: "±8 Jam",
        inspection: "110 Titik",
        goal: "Presisi, nyaman, bebas getaran.",
      },
    ],
    cta: { primary: "Konsultasi Kaki-Kaki", secondary: "Booking" },
  },

  "dyno-performance": {
    title: "Dyno Performance Division",
    highlightTitle: "Tenaga Nyata, Bukan Rasa",
    subtitle: "Analysis Lab",
    description: "Power run, steady-state tuning, dan analisis grafik presisi.",
    heroImage:
      "https://images.unsplash.com/photo-1591438200350-1df5c312784d?q=80&w=1600",
    layoutType: "laboratory",
    services: [
      "Dyno Check-Up (Partial Throttle)",
      "Dyno Power Run (Full Throttle)",
      "Steady-State Calibration",
      "Remap ECU Stage 1–3",
      "Piggyback/Module Tuning",
      "TPS Calibration & Reset",
    ],
    equipment: [
      { name: "Fan Blower", desc: "High velocity cooling system" },
      { name: "Exhaust Extractor", desc: "Gas buang management" },
      { name: "Wideband O2", desc: "AFR Real-time sensor" },
    ],
    roomSpecs: [
      "Ruang operator terpisah berkaca",
      "Peredam akustik premium",
      "Ventilasi exhaust & fresh air inlet",
    ],
    bundling: [
      "Post-Dyno Care",
      "Dyno Maintain Pack",
      "Performance Lock Package",
    ],
    faq: [
      {
        q: "Bisa tanpa geber total?",
        a: "Bisa, gunakan layanan Dyno Check-Up.",
      },
      {
        q: "Aman untuk harian?",
        a: "Sangat aman dengan SOP pendinginan standar TJM.",
      },
    ],
    cta: { primary: "Jadwalkan Dyno", secondary: "Konsultasi Tuning" },
  },

  "tire-division": {
    title: "Tire Division",
    highlightTitle: "Grip, Presisi, Stabil",
    subtitle: "Pit Lane",
    description:
      "Presisi milimeter, stabil di kecepatan tinggi. Pit stop cepat, hasil stabil tanpa getar.",
    heroImage:
      "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?q=80&w=1600",
    layoutType: "sub-division",
    divisions: [
      {
        name: "TJM BALANCE LAB",
        services: [
          "Precision Balancing Service",
          "Wheel Dressing",
          "Vibration Analysis",
        ],
      },
      {
        name: "TIRE PIT+",
        services: [
          "Cek & Tambal Ban Presisi",
          "Nitrogen Refill",
          "Chain Lube Service",
        ],
      },
    ],
    cta: { primary: "Datang Tanpa Janji", secondary: "Booking" },
  },

  "detailing-coating": {
    title: "Detailing & Coating",
    highlightTitle: "Lebih Lengkap dari Scuto",
    subtitle: "Aesthetic Care",
    description: "Pembersihan menyeluruh, proteksi nano hydrophobic premium.",
    heroImage:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1600",
    layoutType: "packages",
    packages: [
      {
        name: "Quick Wash",
        price: "Rp 25.000",
        time: "15 Menit",
        goal: "Bersih singkat, siap jalan.",
      },
      {
        name: "Detailing",
        price: "Rp 50rb - 150rb",
        time: "±45 Menit",
        goal: "Seperti baru, bebas kusam.",
      },
      {
        name: "Detailing & Coating",
        price: "Rp 300rb - 500rb",
        time: "±1-2 Jam",
        goal: "Kilap premium, perlindungan tahan lama.",
      },
    ],
    cta: { primary: "Booking Detailing", secondary: "Lihat Before–After" },
  },

  "radiator-service": {
    title: "Radiator Service",
    highlightTitle: "Flush & Refill",
    subtitle: "Cooling System",
    description: "Jaga suhu stabil, cegah overheat.",
    heroImage:
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1600",
    layoutType: "simple",
    features: [
      {
        name: "Basic Radiator Service",
        time: "±10 Menit",
        inspection: "25 Titik",
        goal: "Suhu stabil, umur radiator panjang.",
      },
    ],
    cta: { primary: "Booking Radiator", secondary: "Konsultasi" },
  },

  "electrical-diagnostic": {
    title: "Electrical & Diagnostic",
    highlightTitle: "Akurat dan Aman",
    subtitle: "Digital Scanner",
    description: "ECU scan, reset adaptasi, inspeksi regulator dan aki.",
    heroImage:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600",
    layoutType: "simple",
    features: [
      { name: "FI/ECU Diagnostic", desc: "Scanning sensor digital" },
      { name: "Battery Health", desc: "Cek kesehatan aki" },
      { name: "Regulator Test", desc: "Cek pengisian kiprok" },
    ],
    cta: { primary: "Cek Gratis Saat Promo", secondary: "Booking" },
  },

  "helm-spa": {
    title: "Helm Spa Foam+",
    highlightTitle: "Foam Aktif, Quick Dry",
    subtitle: "Riding Gear Care",
    description: "Cuci helm water-based pH netral, aman untuk liner dan visor.",
    heroImage:
      "https://images.unsplash.com/photo-1558981420-87aa9dad1c89?q=80&w=1600",
    layoutType: "simple",
    features: [
      { name: "Deep Foam Cleaning", desc: "Water-based pH Netral" },
      { name: "Visor Care", desc: "Aman untuk Pinlock" },
      { name: "Odor Control", desc: "Silica & Charcoal anti bau" },
    ],
    priceTag: "Promo Grand Opening: Rp 10.000",
    cta: { primary: "Tambah ke Keranjang", secondary: "Booking" },
  },
};
