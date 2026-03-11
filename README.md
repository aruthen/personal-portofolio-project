# Personal Portofolio Project

Project portfolio nyata yang akan dikembangkan bertahap.

## Live URL
- https://marutha-wira.vercel.app

## Nama Folder Project
- `personal-portofolio-project`

## Scope
- Landing section
- About section
- Setup deploy siap Vercel

## Tech Stack
- Vue 3
- Vite
- Tailwind CSS

## Menjalankan Lokal

```bash
npm install
npm run dev
```

## Build Production

```bash
npm run build
npm run preview
```

## Deploy ke Vercel
1. Push project ke GitHub
2. Import repository di Vercel
3. Framework preset: Vite (auto detect)
4. Build command: `npm run build`
5. Output directory: `dist`

Deployment production saat ini sudah aktif dan dapat diakses publik melalui URL di atas.

## Integrasi Strava (Grafik Lari Mingguan)

Fitur grafik lari mingguan menggunakan endpoint backend: `/api/strava-weekly`.

Tambahkan Environment Variables di Vercel Project:
- `STRAVA_CLIENT_ID`
- `STRAVA_CLIENT_SECRET`
- `STRAVA_REFRESH_TOKEN`

Setelah environment variable disimpan, lakukan redeploy agar grafik Strava aktif.

Untuk development lokal endpoint API Vercel, jalankan:

```bash
npx vercel dev
```

## Integrasi Instagram (3 Postingan Terbaru)

Fitur postingan Instagram otomatis menggunakan endpoint backend: `/api/instagram-latest`.

Tambahkan Environment Variables di Vercel Project:
- `INSTAGRAM_USER_ID`
- `INSTAGRAM_ACCESS_TOKEN`

Setelah environment variable disimpan, lakukan redeploy agar postingan terbaru tampil.

## Rencana Pengembangan Berikutnya
- Tambah section Projects
- Tambah Contact section
- Tambah data project dari JSON
- Tambah SEO/meta yang lebih lengkap
