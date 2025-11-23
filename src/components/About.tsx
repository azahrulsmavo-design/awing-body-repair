"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const features = [
    "Pencocokan Warna Profesional",
    "Teknisi Berpengalaman",
    "Bahan Cat Premium",
    "Perbaikan Bodi Struktural",
    "Garansi untuk Semua Pengerjaan"
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/about.jpg"
                                alt="Tentang AWING Body Repair"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Experience Badge */}
                        <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-2xl hidden md:block shadow-xl">
                            <p className="text-5xl font-bold mb-1">10+</p>
                            <p className="text-sm font-medium uppercase tracking-wider">Tahun<br />Keunggulan</p>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Tentang Kami</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Kami Tidak Sekadar Memperbaiki, <br />
                            Kami <span className="text-blue-600">Menciptakan Karya Seni</span>.
                        </h3>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            Di AWING Body Repair, kami memahami bahwa kendaraan Anda lebih dari sekadar alat transportasi—itu adalah investasi dan pernyataan diri. Fasilitas kami di Jakarta dilengkapi dengan teknologi terbaru untuk menangani segala hal mulai dari goresan kecil hingga perbaikan tabrakan besar.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                                    <span className="text-slate-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-8 border-t border-slate-200 pt-8">
                            <div>
                                <p className="text-3xl font-bold text-slate-900 mb-1">500+</p>
                                <p className="text-sm text-slate-500">Mobil Direstorasi</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-slate-900 mb-1">100%</p>
                                <p className="text-sm text-slate-500">Kepuasan Pelanggan</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
