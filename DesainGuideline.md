🛠️ MECHANIC PRO — DESIGN SYSTEM GUIDELINE
Theme: Industrial Racing, Raw, Modern, Precision.

Tech Stack: Next.js (App Router), Tailwind CSS v4, GSAP (Club).

I. CORE PHILOSOPHY (Mood & Feel)
Visual: Gelap, Kontras Tinggi, Logam, Oli, Aspal.

Karakter: Maskulin, Tidak Basa-basi (No nonsense), Berani.

Shape Language: Sudut tajam 90 derajat (Sharp Edges), Garis Tebal, Layout Asimetris.

Vibe: Seperti masuk ke bengkel balap profesional—bersih, terorganisir, dan canggih.

II. COLOR PALETTE (Warna)
Menggunakan skema High Contrast dengan CSS Variables Tailwind v4.

1. Primary Colors
   🟡 Signal Yellow (#FACC15 / var(--color-signal))

Fungsi: Tombol CTA, Hover State, Highlight Teks, Garis Aksen.

Filosofi: Warna peringatan industri, garis jalan, kecepatan.

⚫ Vantablack (#0a0a0a / var(--color-canvas))

Fungsi: Background utama halaman (Body).

Filosofi: Aspal basah, ruang gelap, fokus.

2. Secondary Colors
   🌑 Dark Metal (#171717 / var(--color-metal))

Fungsi: Background Kartu (Card), Section selang-seling.

⚙️ Steel Grey (#262626 / var(--color-border))

Fungsi: Garis tepi (Border), Divider.

3. Typography Colors
   ⚪ Pure White (#FFFFFF) → Judul Utama (Heading).

aaa Machine Grey (#A3A3A3) → Teks Paragraf (Body). Hindari putih murni untuk paragraf agar mata tidak cepat lelah.

III. TYPOGRAPHY (Tipografi)
Aturan font untuk menciptakan kesan tegas dan teknikal.

1. Font Family
   Display / Heading: Oswald atau Barlow Condensed.

Style: Wajib UPPERCASE (Huruf Kapital Semua), Bold/Black (700-900).

Kesan: Poster balap, stiker mesin, peringatan bahaya.

Body / Content: Inter atau Manrope.

Style: Sentence case, Regular (400), Clean geometric.

Kesan: Manual book, data teknis, mudah dibaca.

2. Type Scale (Hierarki)
   Hero Title: text-6xl sd text-9xl | Leading: 0.9 (Sangat rapat).

Section Title: text-4xl sd text-5xl | Tracking: tight.

Card Title: text-2xl | Weight: Bold.

Label/Tag: text-xs | Font: Mono (Opsional) | Tracking: widest.

IV. UI COMPONENTS (Komponen)

1. Buttons (Tombol)
   Jangan gunakan Rounded Corners. Kita butuh sudut tajam.

Shape: Kotak sempurna (rounded-none).

Primary Button: Background Kuning, Teks Hitam, Font Bold Uppercase.

Secondary Button: Border Putih tipis, Background Transparan, Teks Putih.

Interaction: Tidak ada efek scale membal. Gunakan efek Fill Slide (warna mengisi dari kiri ke kanan).

2. Cards (Kartu)
   Style: Minimalis industrial.

Background: Dark Metal (#171717).

Border: 1px Solid Steel Grey (#262626).

Hover: Border berubah jadi Kuning (#FACC15).

3. Images (Gambar)
   Filter: Gunakan efek Grayscale (Hitam Putih) atau Desaturated untuk gambar pasif.

Active: Gambar menjadi berwarna saat di-hover.

Overlay: Selalu berikan lapisan hitam transparan (bg-black/40) agar teks di atasnya terbaca.

V. ANIMATION & MOTION (GSAP Rules)
Ini adalah kunci "mahal"-nya website ini. Animasi tidak boleh cute atau bouncy.

1. The "Heavy Metal" Physics
   Easing: Gunakan power3.out atau expo.out.

Artinya: Gerakan cepat di awal, lalu berhenti perlahan dengan presisi. Jangan gunakan elastic atau bounce.

Duration: Rata-rata 0.8s - 1.2s.

2. Scroll Interaction (ScrollSmoother)
   Smoothness: Set ke 1.5 atau 2 (Agak berat). Memberi kesan website memiliki "massa" atau bobot.

Parallax:

Background: data-speed="0.5" (Bergerak lebih lambat).

Content/Text: data-speed="1.1" (Bergerak sedikit lebih cepat).

3. Entrance Animation (Cara Elemen Masuk)
   Text Reveal: Gunakan GSAP SplitText.

Karakter atau kata muncul dari bawah (y: 100%) dengan overflow: hidden (Clipping Mask). Kesannya seperti teks dicetak atau muncul dari balik plat besi.

Stagger: Selalu gunakan jeda (stagger: 0.1) antar elemen list. Jangan muncul barengan.

4. Micro-Interactions
   Hover Link: Garis bawah (underline) muncul dari kiri ke kanan dengan cepat.

Cursor: (Opsional) Custom cursor berbentuk target bulat kecil warna kuning.

VI. LAYOUT GRID
Container: max-w-7xl (Lebar tapi terkontrol).

Spacing: Gunakan Negative Space yang luas. Jangan takut kosong. Kekosongan = Kemewahan.

Lines: Gunakan garis-garis tipis vertikal atau horizontal sebagai dekorasi background (seperti Blueprint).
