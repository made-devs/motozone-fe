export const serviceCategories = [
  { id: 'maintenance', label: 'ROUTINE SERVICE' },
  { id: 'performance', label: 'PERFORMANCE TUNING' },
  { id: 'specialist', label: 'ENGINE SPECIALIST' },
];

export const servicePackages = {
  maintenance: [
    {
      name: 'LITE SERVICE',
      price: '150K',
      features: [
        'Pembersihan Injeksi',
        'Stel Rantai/Belt',
        'Check Up 12 Poin',
        'General Cleaning',
      ],
      isPopular: false,
    },
    {
      name: 'PRO SERVICE',
      price: '275K',
      features: [
        'Semua Fitur Lite',
        'Servis CVT/Throttle Body',
        'Ganti Oli Mesin',
        'Check Up 24 Poin',
      ],
      isPopular: true,
    },
    {
      name: 'MAX SERVICE',
      price: '450K',
      features: [
        'Semua Fitur Pro',
        'Gurah Mesin (Carbon)',
        'Kuras Radiator',
        'Reset ECU',
      ],
      isPopular: false,
    },
  ],
  performance: [
    {
      name: 'STAGE 1',
      price: '750K',
      features: [
        'Remap ECU Standar',
        'Optimasi Air-Fuel Ratio',
        'Unlimiter RPM',
        'Dyno Test 2x',
      ],
      isPopular: true,
    },
    {
      name: 'STAGE 2',
      price: '1.5M',
      features: [
        'Remap ECU + Open Filter',
        'Upgrade Koil/Busi',
        'Dyno Tuning (Fine Tune)',
        'Speed Limit Bypass',
      ],
      isPopular: false,
    },
  ],
  specialist: [
    {
      name: 'BLUEPRINTING',
      price: '2.5M+',
      features: [
        'Kalibrasi Komponen',
        'Porting Polish',
        'Setting Klep Presisi',
        'Analisa Performa',
      ],
      isPopular: true,
    },
  ],
};
