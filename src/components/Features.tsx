"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Star, Wallet, Users } from "lucide-react";

const features = [
    {
        icon: <ShieldCheck size={32} />,
        title: "Menggunakan Bahan Berkualitas",
        description: "Dapatkan bahan berkualitas untuk body mobil Anda, dengan pilihan merek sesuai selera dan budget Anda."
    },
    {
        icon: <Star size={32} />,
        title: "Memberikan Service Terbaik",
        description: "Nikmati layanan lengkap dengan fasilitas yang terus ditingkatkan, mulai dari alat perbaikan modern hingga ruang pengecatan khusus (semi oven)."
    },
    {
        icon: <Wallet size={32} />,
        title: "Menawarkan Harga Bersaing",
        description: "Harga yang PAS dan masuk akal. Tanpa khawatir tertipu karena terlalu murah, atau boros karena kemahalan. Hasil terbaik untuk jangka panjang."
    },
    {
        icon: <Users size={32} />,
        title: "Dikerjakan Tenaga Ahli Profesional",
        description: "Tenaga ahli adalah yang UTAMA. Percayakan pada tim berpengalaman 10 tahun dengan spesialisasi body repair, painting, hingga detailing."
    }
];

export default function Features() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4"
                    >
                        Kenapa Memilih Kami
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
                    >
                        Mobil Kembali Tampan, <br /> Anda Semakin Bangga
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-6 rounded-xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-blue-100"
                        >
                            <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-6 text-blue-600">
                                {feature.icon}
                            </div>
                            <h4 className="text-lg font-bold mb-3 text-slate-900">{feature.title}</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
