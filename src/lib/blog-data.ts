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
        slug: "tips-merawat-cat-mobil-agar-tetap-kinclong",
        title: "5 Tips Merawat Cat Mobil Agar Tetap Kinclong di Cuaca Ekstrem",
        excerpt:
            "Jangan biarkan panas matahari dan hujan merusak kilau mobil Anda. Simak tips ampuh merawat cat mobil agar tetap awet dan bercahaya.",
        date: "2023-10-25",
        author: "Admin AWING",
        image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop",
        tags: ["Perawatan", "Cat Mobil", "Tips"],
        content: `
      <p>Cuaca ekstrem seperti panas terik yang menyengat dan hujan deras yang tiba-tiba bisa menjadi musuh utama bagi cat mobil Anda. Jika dibiarkan tanpa perawatan yang tepat, cat mobil bisa cepat kusam, pudar, bahkan mengelupas. Berikut adalah 5 tips ampuh untuk menjaga cat mobil Anda tetap kinclong:</p>

      <h3>1. Cuci Mobil Secara Rutin</h3>
      <p>Debu, kotoran burung, dan getah pohon yang menempel terlalu lama dapat merusak lapisan cat. Usahakan mencuci mobil minimal seminggu sekali, terutama setelah terkena hujan karena air hujan mengandung asam yang korosif.</p>

      <h3>2. Gunakan Sabun Khusus Mobil</h3>
      <p>Hindari menggunakan deterjen atau sabun cuci piring karena dapat mengikis lapisan wax pelindung cat. Gunakan sampo khusus mobil yang memiliki pH seimbang.</p>

      <h3>3. Lakukan Polishing dan Waxing</h3>
      <p>Polishing berguna untuk menghilangkan baret halus, sedangkan waxing memberikan lapisan pelindung tambahan agar cat tidak mudah kusam akibat sinar UV. Lakukan waxing setidaknya 3 bulan sekali.</p>

      <h3>4. Parkir di Tempat Teduh</h3>
      <p>Sinar matahari langsung (UV) adalah penyebab utama cat mobil memudar. Jika memungkinkan, parkirlah di garasi atau gunakan sarung mobil (car cover) jika harus parkir di luar ruangan.</p>

      <h3>5. Segera Perbaiki Baret atau Penyok</h3>
      <p>Baret yang dalam bisa menembus lapisan cat hingga ke logam, menyebabkan karat. Jika ada kerusakan pada bodi mobil, segera bawa ke bengkel body repair terpercaya seperti <strong>AWING Body Repair</strong> untuk penanganan profesional.</p>
    `,
    },
    {
        slug: "perbedaan-body-repair-dan-ketok-magic",
        title: "Apa Bedanya Body Repair dan Ketok Magic? Mana yang Lebih Baik?",
        excerpt:
            "Sering bingung memilih antara Body Repair atau Ketok Magic? Pahami perbedaan proses, hasil, dan biayanya di sini sebelum memutuskan.",
        date: "2023-11-10",
        author: "Admin AWING",
        image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=2070&auto=format&fit=crop",
        tags: ["Edukasi", "Body Repair"],
        content: `
      <p>Ketika mobil mengalami penyok atau baret, pemilik mobil seringkali dihadapkan pada dua pilihan: bengkel Body Repair atau Ketok Magic. Keduanya menawarkan solusi perbaikan bodi mobil, namun memiliki metode dan hasil yang berbeda.</p>

      <h3>Metode Pengerjaan</h3>
      <p><strong>Ketok Magic</strong> biasanya menggunakan alat-alat sederhana dan teknik khusus untuk mengembalikan bentuk plat bodi dari dalam atau luar tanpa banyak merusak cat asli (jika memungkinkan). Pengerjaannya cenderung lebih cepat.</p>
      <p><strong>Body Repair</strong> menggunakan prosedur standar pabrikan. Mulai dari pengelasan, pengetokan, pendempulan, hingga pengecatan ulang di ruang oven (spray booth) untuk hasil yang presisi dan warna yang sama persis dengan aslinya.</p>

      <h3>Kualitas Hasil</h3>
      <p>Body Repair umumnya menawarkan hasil yang lebih rapi dan tahan lama karena menggunakan bahan cat berkualitas dan proses pengecatan yang steril dari debu. Warna yang dihasilkan pun lebih akurat karena melalui proses color matching komputerisasi.</p>

      <h3>Mana yang Harus Dipilih?</h3>
      <p>Jika kerusakan hanya penyok kecil tanpa goresan cat yang parah, Ketok Magic bisa jadi solusi cepat dan hemat. Namun, jika kerusakan cukup parah, melibatkan struktur bodi, atau cat sudah terkelupas luas, <strong>Body Repair</strong> adalah pilihan terbaik untuk mengembalikan mobil Anda seperti baru.</p>
    `,
    },
    {
        slug: "tanda-mobil-perlu-siram-full-body",
        title: "3 Tanda Mobil Anda Sudah Perlu Siram Cat Full Body",
        excerpt:
            "Warna belang, cat kusam, atau banyak baret halus? Kenali tanda-tanda mobil Anda membutuhkan peremajaan total dengan cat full body.",
        date: "2023-12-05",
        author: "Admin AWING",
        image: "https://images.unsplash.com/photo-1494905998402-395d579af97f?q=80&w=2073&auto=format&fit=crop",
        tags: ["Repaint", "Tips"],
        content: `
      <p>Mobil yang sudah berusia beberapa tahun biasanya mulai menunjukkan tanda-tanda penuaan pada catnya. Kapan waktu yang tepat untuk melakukan pengecatan ulang seluruh bodi (siram full body)? Berikut tandanya:</p>

      <h3>1. Warna Cat Sudah Kusam dan Pudar (Chalking)</h3>
      <p>Jika cat mobil terlihat seperti berkapur atau warnanya tidak lagi tajam meskipun sudah dipoles, itu tandanya lapisan clear coat sudah menipis atau hilang. Ini saatnya untuk repaint.</p>

      <h3>2. Banyak Baret Halus (Swirl Marks) dan Penyok Kecil</h3>
      <p>Akumulasi baret-baret halus akibat pencucian yang salah atau gesekan ranting pohon bisa membuat mobil terlihat tidak terawat. Jika jumlahnya sudah terlalu banyak, spot repair mungkin akan membuat mobil terlihat belang. Full body repaint adalah solusi terbaik.</p>

      <h3>3. Clear Coat Mengelupas (Peeling)</h3>
      <p>Ini adalah tanda kerusakan cat yang paling parah. Jika lapisan bening pelindung cat sudah mulai mengelupas seperti kulit, maka lapisan cat di bawahnya tidak lagi terlindungi dan akan cepat rusak. Segera lakukan pengecatan ulang sebelum karat menyerang bodi mobil.</p>

      <p>Ingin mobil lama Anda terlihat seperti baru keluar dari showroom? Konsultasikan layanan siram full body di <strong>AWING Body Repair</strong>.</p>
    `,
    },
];

export function getBlogPosts() {
    return blogPosts;
}

export function getBlogPostBySlug(slug: string) {
    return blogPosts.find((post) => post.slug === slug);
}
