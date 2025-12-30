export const bookingOptions = {
  timeSlots: [
    { time: "09:00", status: "available" },
    { time: "10:00", status: "available" },
    { time: "11:00", status: "full" }, // Visual 'Full' bikin kesan bengkel laku
    { time: "13:00", status: "available" },
    { time: "14:00", status: "last_slot" },
    { time: "15:00", status: "available" },
  ],
  packages: [
    { id: "inspeksi", name: "Inspeksi 30/55/110 Titik" },
    { id: "engine", name: "Engine Service Packages" },
    { id: "suspension", name: "Suspension & Chassis" },
    { id: "dyno", name: "Dyno Performance Division" },
    { id: "detailing", name: "Detailing & Coating" },
    // ... sesuai list layanan sebelumnya
  ],
};
