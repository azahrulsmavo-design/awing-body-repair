import { LucideIcon, Wrench, PaintBucket, Car, ShieldCheck } from "lucide-react";

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    image: string;
    tags: string[];
}

export const blogPosts: BlogPost[] = [
    {
        slug: "perbaikan-body-mobil-panduan-lengkap",
        title: "Perbaikan Body Mobil: Panduan Lengkap untuk Memulihkan Tampilan dan Nilai Kendaraan Anda",
        excerpt:
            "Perbaikan body mobil bukan sekadar urusan estetika. Panel yang penyok, goresan cat, bumper retak, hingga pintu yang rusak perlu segera ditangani.",
        date: "2025-08-17",
        author: "Admin AWING",
        image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop",
        tags: ["Panduan", "Body Repair"],
        content: `
      <p>Perbaikan body mobil bukan sekadar urusan estetika. Panel yang penyok, goresan cat, bumper retak, hingga pintu yang rusak perlu segera ditangani untuk mencegah kerusakan lebih lanjut seperti karat.</p>
      <h3>Mengapa Penting?</h3>
      <p>Kerusakan pada bodi mobil dapat menurunkan nilai jual kembali kendaraan Anda secara signifikan. Selain itu, kerusakan struktur yang tidak terlihat bisa membahayakan keselamatan berkendara.</p>
      <p>Di AWING Body Repair, kami menggunakan teknik modern untuk mengembalikan bentuk dan kekuatan bodi mobil Anda seperti semula.</p>
    `,
    },
    {
        slug: "servis-bodi-mobil-cepat",
        title: "Servis Bodi Mobil Kini Tidak Butuh Waktu Lama",
        excerpt:
            "Anda sering mengalami proses yang lama dan berbelit-belit ketika harus servis bodi mobil? Temukan solusinya di sini.",
        date: "2023-09-25",
        author: "Admin AWING",
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop",
        tags: ["Servis Cepat", "Tips"],
        content: `
      <p>Anda sering mengalami proses yang lama dan berbelit-belit ketika harus servis bodi mobil? Mobil Anda sudah sampai di bengkel tapi tak kunjung dilayani oleh teknisi?</p>
      <p>Kami memahami waktu Anda sangat berharga. Dengan manajemen alur kerja yang efisien dan peralatan canggih, AWING Body Repair berkomitmen memberikan layanan yang cepat tanpa mengorbankan kualitas.</p>
    `,
    },
    {
        slug: "pemilihan-warna-cat-mobil",
        title: "Pemilihan Warna Cat Mobil Anti Bosan",
        excerpt:
            "Tak Usah Beli Baru, Simak Tips Pemilihan Warna Cat Mobil Anti Bosan Ini. Solusi agar kendaraan lama terasa baru kembali.",
        date: "2023-09-25",
        author: "Admin AWING",
        image: "https://images.unsplash.com/photo-1494905998402-395d579af97f?q=80&w=2073&auto=format&fit=crop",
        tags: ["Warna", "Repaint"],
        content: `
      <p>Pemilihan warna cat mobil – membuat bosan dengan kendaraan lama? Solusinya tak harus beli baru. Mengganti warna cat mobil (repaint) bisa memberikan nuansa segar yang drastis.</p>
      <h3>Tips Memilih Warna</h3>
      <ul>
        <li>Pilih warna yang sesuai dengan karakter Anda.</li>
        <li>Pertimbangkan warna yang mudah perawatannya (seperti silver atau abu-abu).</li>
        <li>Gunakan cat berkualitas tinggi agar warna tahan lama dan tidak cepat pudar.</li>
      </ul>
    `,
    },
    {
        slug: "warna-cat-mobil-terpopuler",
        title: "Warna Cat Mobil Terpopuler Saat Ini",
        excerpt:
            "Warna cat mobil terpopuler adalah warna yang paling banyak kita temui. Apa saja tren warna saat ini?",
        date: "2023-09-23",
        author: "Admin AWING",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop",
        tags: ["Tren", "Warna"],
        content: `
      <p>Warna cat mobil terpopuler adalah warna yang paling banyak kita temui atau orang lain gunakan pada mobil mereka. Hal itu menjadikan sebuah warna cat mobil menjadi tren.</p>
      <p>Saat ini, warna-warna monokrom seperti Putih, Hitam, dan Abu-abu masih mendominasi. Namun, warna-warna unik seperti Nardo Grey atau warna pastel mulai banyak diminati untuk memberikan kesan modern dan sporty.</p>
    `,
    },
    {
        slug: "sebab-sasis-mobil-keropos",
        title: "Waspada! Ini Sebab Sasis Mobil Keropos",
        excerpt:
            "Tidak ada yang lebih menyebalkan daripada sasis mobil yang keropos. Ketahui penyebabnya sebelum terlambat.",
        date: "2023-09-22",
        author: "Admin AWING",
        image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=2000&auto=format&fit=crop",
        tags: ["Perawatan", "Sasis"],
        content: `
      <p>Sebab Sasis Mobil Keropos - Tidak ada yang lebih menyebalkan daripada sasis mobil yang keropos. Rasanya seperti mobil kita sedang berada dalam bahaya besar ketika bagian vital ini mulai rusak.</p>
      <p>Penyebab utamanya adalah karat yang tidak segera ditangani. Air hujan, lumpur, dan kotoran yang menempel di kolong mobil jika dibiarkan akan memicu korosi. Lakukan pelapisan anti-karat secara berkala untuk mencegahnya.</p>
    `,
    },
    {
        slug: "ahli-perbaikan-body-mobil",
        title: "Pentingnya Memilih Ahli Perbaikan Body Mobil",
        excerpt:
            "Memiliki kendaraan yang terdapat luka goresan atau penyok jelas membuat hati tidak nyaman. Percayakan pada ahlinya.",
        date: "2023-09-22",
        author: "Admin AWING",
        image: "https://images.unsplash.com/photo-1599256621730-535171e28e50?q=80&w=2069&auto=format&fit=crop",
        tags: ["Tips", "Edukasi"],
        content: `
      <p>Ahli Perbaikan Body Mobil – Memiliki kendaraan yang terdapat luka goresan atau penyok di sisi bagian tertentu jelas membuat hati tidak nyaman. Walaupun sedikit kerusakan, hal ini bisa mengurangi estetika mobil.</p>
      <p>Memilih bengkel yang tepat sangat krusial. Pastikan bengkel memiliki teknisi berpengalaman, peralatan lengkap, dan reputasi yang baik seperti AWING Body Repair untuk hasil yang memuaskan.</p>
    `,
    },
];

export function getBlogPosts() {
    return blogPosts;
}

export function getBlogPostBySlug(slug: string) {
    return blogPosts.find((post) => post.slug === slug);
}
