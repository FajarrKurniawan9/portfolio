## Konteks proyek (JANGAN diubah tanpa alasan kuat)

Ini BUKAN proyek baru. Kamu sedang merestyle proyek Next.js yang sudah
berjalan, bukan generate dari nol. Sebelum menulis kode apa pun:

- Baca `AGENTS.md` dan ikuti instruksinya (baca docs Next.js di
  `node_modules/next/dist/docs/` sebelum menulis kode — versi Next.js di
  proyek ini punya breaking changes dari yang kamu tahu).
- Stack aktual: Next.js 16 (App Router) + React 19 + TypeScript +
  Tailwind CSS 4 + framer-motion + EmailJS. JANGAN migrasi ke Vite.
  JANGAN ganti framer-motion ke library animasi lain.
- Struktur yang sudah ada dan HARUS dipertahankan (hanya restyle isi,
  jangan ubah struktur folder):
  - `src/app/page.tsx` — merangkai semua section
  - `src/app/layout.tsx` — root layout
  - `src/components/*.tsx` — satu file per section (Navbar, Hero, About,
    Skills, Experience, Projects, Contact, Footer, SectionTitle, FadeIn)
  - `src/data/*.ts` — data statis (projects.ts, skills.ts, experience.ts)
  - `src/app/api/contact/route.ts` dan `src/app/api/projects/route.ts` —
    API routes yang sudah berfungsi, JANGAN dihapus atau dipecah ulang
  - Fitur EmailJS di `Contact.tsx` (form kontak nyata, bukan CTA statis)
    HARUS tetap berfungsi setelah restyle — cuma ganti visualnya mengikuti
    design system baru, bukan hapus formnya.
  - Section **Experience** (linimasa pendidikan/pengalaman) TIDAK ada di
    referensi desain di bawah, tapi WAJIB dipertahankan dan direstyle
    mengikuti design system baru, ditempatkan secara natural (mis. antara
    About dan Open Source, atau sesuai pertimbanganmu) — jangan dihapus.

Task: restyle total visual (warna, tipografi, animasi, layout section)
mengikuti design system di bawah, dengan konten dan identitas ASLI milik
pemilik portofolio ini, bukan placeholder "Alex Chen".

## Identitas pemilik (ganti semua placeholder di desain dengan ini)

- Nama: Muhammad Fajar Kurniawan
- Role/tagline: Backend Engineer & Fullstack Enthusiast
- Ringkasan 1 kalimat untuk sub-hero (ganti "Full-stack developer
  specialising in React, Node.js, and TypeScript..."): Backend Engineer yang berspesialisasi pada Nestjs dan MySQL lalu terjun kedunia Full-stack developer.
- Status availability untuk badge "AVAILABLE FOR HIRE": OPEN TO WORK · 2026
- Link sosial untuk footer (GitHub · LinkedIn · Twitter/lainnya):
  GitHub: <https://github.com/FajarrKurniawan9>
  LinkedIn: <https://www.linkedin.com/in/mfajarkurniawan>
- Email/kontak untuk "Or email me": <mfajarkurniawa@gmail.com> (dikonfirmasi
  benar tanpa huruf "n" di akhir — jangan "koreksi" jadi mfajarkurniawan@)
- CV untuk tombol "Download CV": <https://drive.google.com/file/d/1BqcjXUduvstMRwAbJwV1zRmrViBPKj1a/view?usp=sharing>
  (catatan: ini link preview Google Drive, bukan direct-download — klik
  tombol akan membuka tab preview, bukan langsung mengunduh file; ini
  sudah cukup untuk sekarang, tidak perlu diubah kecuali diminta)

## Data proyek

`src/data/projects.ts` saat ini masih berisi "Lorem Ipsum 1/2/3". Ganti
dengan proyek nyata (boleh tetap 3, sesuaikan section "Featured Projects"
di desain yang minta persis 3 kartu besar):

Project 1 : Askala - Asisten Kerjasama Lingkungan Sekolah | Software untuk mempermudah akses ke data publik sekolah | NextJs, NestJs, Supabase, Vercel | (Backend) <https://github.com/FajarrKurniawan9/askala-siakad-system.git>, (Frontend) <https://github.com/FajarrKurniawan9/app-askala.git>

Project 2 : Smasara - Smara Aksara | Sistem Catatan Komprehensif untuk ekosistem yang lebih efisien | Golang (Fiber), SvelteKit, TailwindCSS, PostgreSQL, Docker | <https://github.com/FajarrKurniawan9/smasara-workspace.git>

Project 3 : Apos - Apotek Software | Aplikasi manajemen apotek berbasis web untuk mengelola data dan transaksi obat | Laravel 12, React | <https://github.com/FajarrKurniawan9/apotek_software.git>

Untuk gambar mockup/screenshot di tiap kartu proyek: Untuk Project 1, sudah ada D:\portfolio\public\ProjectSatu_Screenshot.png, tapi untuk Project 2 dan 3 pakai placeholder gradient/dashboard-mockup CSS-only, JANGAN generate file gambar biner

## Foto/portrait di section About

Sudah ada foto di path D:\portfolio\public\FotoProfile.jpg

## Open Source / GitHub stats (section 6)

Prompt asli minta angka statis (stars/repos/contributions) yang nanti "wired to GitHub API post-generation". Untuk sekarang: Biarkan angka placeholder jelas ditandai TODO di komentar kode.

## Testimonials (section 7)

Skip aja bagian ini.

## shadcn/ui — pakai atau tidak?

Proyek ini belum pakai shadcn/ui (komponen sejauh ini custom Tailwind).
Install shadcn/ui dan pakai konsisten di semua section untuk komponen
Button, Card, dan Badge (jangan campur — bagian yang sama jangan ada yang
custom Tailwind murni dan ada yang shadcn). Saat `init`, konfigurasikan
theme shadcn supaya memakai token warna custom di Design System di bawah
(--background, --surface, --primary, dst), BUKAN default theme
zinc/slate bawaan shadcn — token CSS variable harus tetap satu sumber
kebenaran di `globals.css`, shadcn hanya styling di atasnya.

Dependency baru yang tetap dibutuhkan terlepas dari pilihan di atas:
`lucide-react` (untuk ikon — belum ada di package.json, perlu
`npm install lucide-react`).

---

## Design System (terapkan ke `src/app/globals.css`, ganti token lama)

```css
:root {
  --background: 0 0% 4%; /* #0a0a0a near-black */
  --surface: 0 0% 7%; /* #121212 surface */
  --surface-raised: 0 0% 10%; /* #1a1a1a raised */
  --border: 0 0% 13%; /* #212121 border */
  --foreground: 0 0% 95%; /* #f2f2f2 off-white */
  --muted: 0 0% 48%; /* dinaikkan dari 42% ke 48% supaya
                                        rasio kontras teks kecil lolos
                                        WCAG AA (~4.5:1) di atas background
                                        near-black */
  --primary: 142 72% 50%; /* #22d472 code green */
  --primary-dark: 142 76% 38%; /* #18a355 hover */
  --primary-glow: 142 72% 50% / 0.12;
  --mono: "JetBrains Mono", monospace;
}
```

Import font (ganti Inter yang dipakai sekarang):
`https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap`

- Display / H1–H2: Sora 700–800, letter-spacing -0.04em
- Body / UI: Sora 300–500
- Code / Labels / elemen teknis: JetBrains Mono 400–500

Tambahkan juga di head (belum ada sama sekali di layout.tsx saat ini):
`<title>`, meta description, dan Open Graph tags (title, description,
og:image) untuk preview link yang layak saat dibagikan — pakai identitas
di atas. Untuk og:image, pakai `/FotoProfile.jpg` yang sudah ada di
`public/` sebagai fallback (bukan gambar khusus dibuat baru).

## Visual Effects

**Terminal code block hero accent** — floating dark card behind/beside H1:

```
background: hsl(var(--surface)); border: 1px solid hsl(var(--border));
border-radius: 8px; padding: 20px 24px; font-family: var(--mono); font-size: 13px;
```

Isi kode ganti dengan data nyata pemilik portofolio, contoh pola:

```jsx
// building the future
const fajar = {
  role: "Backend Developer",
  stack: ["NestJS", "TypeScript", "MySQL"],
  open: true,
};
```

(Sesuaikan array stack dengan top skill di `src/data/skills.ts`.)
Animate: float `y: [0, -8, 0]`, duration 4s, infinite ease-in-out.

**Glow card hover** — semua card: `transition: border-color 0.18s,
box-shadow 0.18s`. Hover: `border-color: hsl(var(--primary))`,
`box-shadow: 0 0 32px hsl(142 72% 50% / 0.16)` (dinaikkan dari 0.12 ke
0.16 supaya glow tidak nyaris tak terlihat di monitor kalibrasi standar).

**Typing cursor** — setelah hero H1: `<span>|</span>` dengan
`animation: blink 1s step-end infinite; @keyframes blink { 50% { opacity: 0; } }`.

**Stagger fade-up** — `initial={{ opacity: 0, y: 20 }}` →
`animate={{ opacity: 1, y: 0 }}`, 0.5s, pakai komponen `FadeIn.tsx` yang
sudah ada di proyek ini (extend, jangan tulis ulang dari nol) dengan
IntersectionObserver per section.

## Sections (urutan mengikuti page.tsx yang sudah ada, restyle isinya)

1. **Navbar** — fixed, `background: hsl(var(--background) / 0.92)`, blur
   12px, border-bottom. Kiri: nama Sora 700 16px putih + tag role
   JetBrains Mono 10px hijau. Tengah: nav ke section yang ada di proyek
   ini (Projects · Skills · Experience · About · Contact — sesuaikan
   dengan section yang benar-benar ada). Kanan: tombol "Hire me →" hijau,
   border-radius 6px, Sora 600 12px (link ke section Contact).

2. **Hero** — full viewport, dua kolom, padding 100px 64px. Kiri: badge
   JetBrains Mono 11px hijau availability + cursor berkedip. H1 Sora 800,
   clamp(52px, 6.5vw, 88px), line-height 0.92, teks headline (2 baris):
   ```
   Building backends
   that scale reliably.
   ```
   Sub: sesuai identitas di atas. CTA: "View projects →" (hijau
   filled) + "Download CV" (ghost border, hanya render kalau CV tersedia).
   Tech tag pills JetBrains Mono 10px — ambil dari skill teratas di
   `src/data/skills.ts`. Kanan: terminal code block dengan
   `filter: drop-shadow(0 0 40px hsl(142 72% 50% / 0.15))`.

3. **Featured Projects** — H2 Sora 800 "Projects." 3 kartu besar
   full-width dari `src/data/projects.ts` (data asli, bukan Lorem Ipsum).
   Tiap kartu `background: hsl(var(--surface))`, border, border-radius
   12px, padding 32px, flex row. Kiri: tag tech JetBrains Mono 10px hijau,
   nama proyek Sora 700 22px, deskripsi 2 baris, chip tech, link
   "View project →" (kalau ada demo/github link). Kanan: placeholder
   mockup sesuai keputusan di atas. Glow saat hover.

4. **Tech Stack** — surface bg, padding 96px 64px. H2 "The stack." Ambil
   kategori dari `Skill['category']` yang sudah ada (backend/frontend/
   tools) alih-alih hardcode Frontend/Backend seperti prompt asli — ini
   supaya section benar-benar reflect skill asli sesuai catatan di prompt
   sumber ("Tech stack section should reflect real skills"). Tiap item:
   card kecil dengan ikon lucide-react + nama JetBrains Mono 11px. Header
   kategori JetBrains Mono 9px muted uppercase. Glow hover.

5. **Experience** (section existing, restyle saja) — pertahankan struktur
   linimasa yang sudah ada di `Experience.tsx`, terapkan design system
   baru (warna, font, spacing, glow-on-hover jika berupa card).

6. **About** — dua kolom, padding 96px 64px. Kiri: H2 "About me." 3
   paragraf (latar belakang, cara kerja, apa yang dibangun) — tulis versi
   nyata, bukan generic. Stat chip 3 buah:
   - Tahun ngoding: mulai ngoding sejak 2024 — tampilkan sebagai
     "X+ tahun ngoding" dengan X dihitung dinamis dari tahun sekarang
     dikurangi 2024 (jangan hardcode angka statis biar tetap benar di
     tahun-tahun berikutnya)
   - Jumlah proyek: hitung otomatis dari panjang array `src/data/projects.ts`
     (jangan hardcode angka, biar konsisten kalau nanti ditambah)
   - Status: "Siswa SMK · PKL" atau "Mencari peluang kerja" — pakai status
     yang sedang berlaku sekarang (SMK/PKL atau cari kerja), tanyakan ke
     user status mana yang aktif kalau tidak jelas dari konteks. Kanan:
     foto sesuai keputusan di atas.

7. **Open Source / GitHub** — sesuai keputusan section di atas.

8. **Testimonials** — sesuai keputusan section di atas (skip kalau belum
   ada testimoni nyata).

9. **Contact CTA + form** — gabungkan CTA statis dari prompt asli (H2
   "Let's build something.", radial glow, availability note) DI ATAS
   form EmailJS yang sudah ada di `Contact.tsx` — jangan buang formnya,
   cukup restyle. Tombol "Or email me" pakai email dari data di atas.

10. **Footer** — `hsl(0 0% 3%)`, padding 40px 64px 24px. Kiri: nama + role
    JetBrains Mono 10px muted. Kanan: ikon sosial dari link di atas
    (lucide-react icons), muted → hijau saat hover. Bawah: copyright
    JetBrains Mono 10px muted.

## Responsive

Mobile: nav hamburger overlay · hero single column, code block di bawah
80-85% width · projects stack penuh · stack grid 3 kolom (atau 2 kalau
sempit) · about single column · experience timeline tetap vertikal.

## Dependencies yang perlu ditambahkan

```json
{ "lucide-react": "^0.400.0" }
```

(framer-motion sudah ada di package.json, tidak perlu ditambah lagi.)

## Catatan terakhir untuk Claude Code

- Jalankan `npm run lint` dan `npm run build` setelah selesai, pastikan
  tidak ada error TypeScript/ESLint sebelum menganggap task selesai.
- Jangan hapus `.env.local`, API routes, atau logic EmailJS yang sudah
  berfungsi — task ini murni restyle + reorganisasi visual, bukan rewrite
  fungsionalitas.
- Kalau ada bagian `[ISI: ...]` yang masih belum terisi saat prompt ini
  di-paste, tanya balik ke user alih-alih menebak/mengisi dengan data
  fiktif.
