# 🚗 AWING Body Repair & Cat — Modern Landing Page

Situs resmi untuk **AWING Body Repair & Cat**, bengkel body repair dan repaint mobil yang berlokasi di Depok.  
Website ini dibangun untuk fokus pada **konversi WhatsApp**, tampilan **modern premium**, dan siap untuk **SEO lokal**.

## 🎯 Goal
Membuat landing page modern (one page) yang:
- Fokus pada konversi WhatsApp
- Menampilkan layanan, proses kerja, dan galeri before-after
- Menggunakan desain **Slate Grey + Electric Blue** dengan tema **Light/Dark Modern**
- Memiliki blog untuk SEO (`/blog` & `/blog/[slug]`)
- Ringan, responsif, dan di-deploy dengan mudah (Vercel)

---

## 🧩 Tech Stack

### **Frontend**
- **Next.js 16 (App Router)**
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
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
| Background | `#0F172A` (Slate 900) / `#F8FAFC` (Slate 50) |
| Text Primary | `#F8FAFC` / `#0F172A` |
| Accent 1 | `#3B82F6` (Blue 500) |
| Accent 2 | `#2563EB` (Blue 600) |
| Border | `#1E293B` / `#E2E8F0` |

### **Typography**
- **Inter** (Bold / SemiBold / Medium / Regular)
- Heading: ExtraBold / Bold  
- Body: Regular  
- CTA Button: SemiBold

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
├── Navbar.tsx            # Responsive Navigation
├── Hero.tsx              # Hero Section with Background Image
├── Features.tsx          # Key Features
├── Services.tsx          # Service List
├── Gallery.tsx           # Before/After Gallery
├── Testimonials.tsx      # Customer Reviews
├── About.tsx             # About Us
├── Contact.tsx           # Contact Form & Map
├── Footer.tsx            # Footer
└── BlogPreview.tsx       # Latest Articles
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
/components/Navbar.tsx
/components/Hero.tsx
/components/Contact.tsx
```

Ganti placeholder:

```
6281995896037
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

* [x] Responsif di mobile, tablet, desktop
* [x] CTA WhatsApp berfungsi
* [x] Smooth scroll antar section
* [x] Blog muncul & slug berfungsi
* [x] Logo & Background Image Updated

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
