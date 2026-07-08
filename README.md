# 💼 Portfolio — Muhammad Fajar Kurniawan

Website portofolio pribadi milik **Muhammad Fajar Kurniawan**, seorang *Backend Developer & Fullstack Enthusiast* yang juga menyukai buku dan filsafat. Website ini dibangun menggunakan **Next.js** dan menampilkan profil, keahlian (skills), pengalaman/pendidikan, daftar proyek, hingga formulir kontak yang terhubung ke email.

> 🚧 **Status:** Proyek ini masih dalam tahap pengembangan aktif. Beberapa data (seperti daftar proyek dan pengalaman) masih berisi teks contoh (*Lorem Ipsum*) yang akan diganti dengan data asli seiring waktu.

---

## ✨ Fitur

- **Hero Section** — halaman pembuka dengan animasi.
- **About** — perkenalan singkat tentang pemilik portofolio.
- **Skills** — daftar keahlian teknis dengan kategori (Backend, Frontend, Tools) beserta level penguasaan.
- **Projects** — daftar proyek yang pernah dikerjakan, lengkap dengan link GitHub/demo, dan bisa difilter berdasarkan teknologi lewat API (`?tech=...`).
- **Experience** — linimasa riwayat pendidikan dan pengalaman kerja.
- **Contact Form** — formulir kontak yang mengirim pesan ke email pemilik lewat layanan **EmailJS**, diproses lewat API Route internal (bukan langsung dari browser, demi keamanan).
- **Animasi halus** menggunakan `framer-motion` (misalnya efek *fade-in* saat scroll).
- **Desain responsif** dengan Tailwind CSS.

---

## 🛠️ Teknologi yang Digunakan

| Kategori         | Teknologi                                  |
|------------------|---------------------------------------------|
| Framework        | [Next.js](https://nextjs.org/) 16 (App Router) |
| Bahasa           | TypeScript                                  |
| UI Library       | React 19                                    |
| Styling          | Tailwind CSS 4                              |
| Animasi          | Framer Motion                               |
| Kirim Email      | EmailJS                                     |
| Linting          | ESLint (config Next.js)                     |

---

## 📁 Struktur Folder

```
portfolio/
├── public/                  # Aset statis (ikon, gambar SVG, dll.)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/     # API Route: kirim pesan formulir kontak via EmailJS
│   │   │   └── projects/    # API Route: ambil & filter data proyek
│   │   ├── layout.tsx       # Layout utama (judul halaman, Navbar, Footer)
│   │   ├── page.tsx         # Halaman utama yang merangkai semua section
│   │   └── globals.css      # Style global
│   ├── components/          # Semua komponen React (Hero, About, Skills, Projects, Experience, Contact, Navbar, Footer, dll.)
│   └── data/                 # Data statis: skills.ts, projects.ts, experience.ts
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 🚀 Cara Menjalankan di Komputer Sendiri

### 1. Prasyarat
Pastikan sudah terinstal:
- **Node.js** versi 18 ke atas
- **npm** (atau bisa juga `yarn`/`pnpm`/`bun`, sesuai selera)

### 2. Clone repository
```bash
git clone https://github.com/FajarrKurniawan9/portfolio.git
cd portfolio
```

### 3. Install dependency
```bash
npm install
```

### 4. Siapkan environment variables
Buat file `.env.local` di root folder proyek, lalu isi dengan variabel berikut:

```bash
# Digunakan untuk memanggil API internal (misalnya saat fetch daftar proyek)
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Kredensial EmailJS (untuk fitur kirim pesan di form Contact)
EMAILJS_SERVICE_ID=isi_dengan_service_id_emailjs_kamu
EMAILJS_TEMPLATE_ID=isi_dengan_template_id_emailjs_kamu
EMAILJS_PUBLIC_KEY=isi_dengan_public_key_emailjs_kamu
```

> 💡 Kamu bisa mendapatkan `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, dan `EMAILJS_PUBLIC_KEY` dengan membuat akun gratis di [emailjs.com](https://www.emailjs.com/), lalu membuat *Email Service* dan *Email Template* di dashboard-nya.

### 5. Jalankan mode development
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya.

### 6. Build untuk production
```bash
npm run build
npm run start
```

---

## 🔌 API Routes

Proyek ini punya dua API Route internal (backend sederhana bawaan Next.js):

### `GET /api/projects`
Mengambil daftar proyek. Bisa difilter berdasarkan teknologi dengan query parameter `tech`.

Contoh:
```
GET /api/projects?tech=NestJS
```

### `POST /api/contact`
Menerima data dari formulir kontak (`name`, `email`, `message`), melakukan validasi sederhana, lalu meneruskan pengiriman email lewat EmailJS.

---

## 📜 Lint & Kualitas Kode

Untuk memeriksa kode dengan ESLint:
```bash
npm run lint
```

---

## 🌐 Deployment

Karena proyek ini dibuat dengan Next.js, cara paling mudah untuk deploy adalah lewat [Vercel](https://vercel.com/new) (dibuat oleh tim yang sama dengan Next.js). Jangan lupa untuk menambahkan environment variables (`EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_PUBLIC_KEY`, `NEXT_PUBLIC_BASE_URL`) di dashboard Vercel juga, ya.

---

## 📬 Kontak

Kalau ada pertanyaan atau ingin berkolaborasi, silakan hubungi lewat formulir kontak di website, atau lewat GitHub: [@FajarrKurniawan9](https://github.com/FajarrKurniawan9).
