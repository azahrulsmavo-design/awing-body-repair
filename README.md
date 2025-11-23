# 🚗 AWING Body Repair & Cat — Modern Landing Page (Next.js 14)

Situs resmi untuk **AWING Body Repair & Cat**, bengkel body repair dan repaint mobil yang berlokasi di Depok.  
Website ini dibangun untuk fokus pada **konversi WhatsApp**, tampilan **modern premium**, dan siap untuk **SEO lokal**.

## 🎯 Goal
Membuat landing page modern (one page) yang:
- Fokus pada konversi WhatsApp
- Menampilkan layanan, proses kerja, dan galeri before-after
- Menggunakan desain **Slate Grey + Electric Blue**
- Memiliki blog untuk SEO (`/blog` & `/blog/[slug]`)
- Ringan, responsif, dan di-deploy dengan mudah (Vercel)

---

## 🧩 Tech Stack

### **Frontend**
- **Next.js 14 (App Router)**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Lucide Icons**
- **Framer Motion**
- **next/font** with *Inter*

### **Infrastructure**
- Deployment: **Vercel**
- SEO extras: Sitemap, Robots, Metadata API, OpenGraph
- Image optimization: built-in Next.js `<Image />`

---

## 🎨 Design System

### **Color Palette — Slate + Blue**
| Purpose | Color |
|--------|--------|
| Background | `#F1F5F9` |
| Text Primary | `#0F172A` |
| Accent 1 | `#3B82F6` |
| Accent 2 | `#1D4ED8` |
| Border | `#CBD5E1` |

### **Typography**
- **Inter** (Bold / SemiBold / Medium / Regular)
- Heading: ExtraBold / Bold  
- Body: Regular  
- CTA Button: SemiBold (UPPERCASE)

---

## 📁 Project Structure

```
src/
├── app/
│    ├── page.tsx               # Landing Page (One Page)
│    ├── layout.tsx             # Root Layout (Header, Footer)
│    ├── sitemap.ts             # Auto-generated sitemap
│    ├── robots.ts              # Robots.txt config
│    ├── blog/
│    │     ├── page.tsx         # Blog Index
│    │     └── [slug]/
│    │           └── page.tsx   # Blog Detail
│
└── components/
├── Header.tsx
├── Hero.tsx
├── Features.tsx
├── Services.tsx
├── Gallery.tsx
├── Process.tsx
├── Pricing.tsx
├── Testimonials.tsx
├── Location.tsx
├── Footer.tsx
└── FloatingCTA.tsx       # WhatsApp floating button
```

---

## 🚀 Getting Started

### 1️⃣ Clone repository
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run development server

```bash
npm run dev
```

### 4️⃣ Visit in browser

```
http://localhost:3000
```

---

## ⚙️ Configuration Notes

### 🔧 Update WhatsApp Number

Di file konfigurasi CTA:

```
/components/FloatingCTA.tsx
/components/Hero.tsx
```

Ganti placeholder:

```
6281234567890
```

→ menjadi nomor resmi bisnis.

---

## 🔍 SEO Features

* Dynamic metadata via **Next.js Metadata API**
* **/sitemap.xml** auto-generated
* **/robots.txt**
* SEO-optimized routing for blog (`/blog/slug`)
* Local SEO-focused content structure
* OpenGraph & social share preview

---

## 🧪 Verification Checklist

* [ ] Responsif di mobile, tablet, desktop
* [ ] CTA WhatsApp berfungsi
* [ ] Smooth scroll antar section
* [ ] LCP < 2.5s (Lighthouse)
* [ ] Blog muncul & slug berfungsi
* [ ] Ganti foto placeholder dengan foto asli

---

## 📦 Deployment

### Deploy ke Vercel:

```
vercel
```

Atau gunakan tombol berikut:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 📑 License

MIT License — bebas untuk digunakan dan dimodifikasi.

---

## 👤 Credits

Dibangun untuk bisnis: **AWING Body Repair & Cat – Depok**
Didesain dengan style modern premium & fokus konversi.
