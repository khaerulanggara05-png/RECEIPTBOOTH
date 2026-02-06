# 📸 Gozeal Receipt Photobox

Sistem photobox mandiri (kiosk) berbasis web yang dirancang khusus untuk output **Printer Thermal**. Project ini memiliki alur pengguna yang mulus mulai dari halaman awal hingga cetak foto instan, lengkap dengan Panel Admin untuk pengaturan.

## ✨ Fitur Utama

- **Antarmuka Kiosk Responsif**: Desain tema gelap yang elegan, dioptimalkan untuk layar sentuh.
- **Pemilihan Layout Dinamis**: Berbagai pilihan tata letak foto dengan penghitungan harga otomatis.
- **Integrasi Pembayaran**: Simulasi alur pembayaran menggunakan QRIS.
- **Integrasi Kamera**: Pengambilan foto berkualitas tinggi dengan hitung mundur dan efek cermin (mirroring).
- **Optimasi Cetak Thermal**: Format output otomatis yang pas untuk printer struk 58mm/80mm.
- **Dashboard Admin**: Kendali penuh untuk mengubah nama booth, harga paket, dan melihat log transaksi.

## 📁 Struktur Project

```text
├── index.html          # Halaman awal (Sentuh untuk Mulai)
├── layout.html         # Pemilihan paket & layout foto
├── payment.html        # Simulasi pembayaran QRIS
├── camera.html         # Pengambilan foto & hitung mundur
├── frame.html          # Pemilihan bingkai (overlay)
├── result.html         # Pratinjau akhir & tombol cetak
├── admin.html          # Pengaturan booth & harga paket
├── system.js           # Logika utama transaksi & penyimpanan
├── vercel.json         # Konfigurasi deployment Vercel
└── kiosk.css           # Gaya utama & optimasi cetak thermal
