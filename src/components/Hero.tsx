"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-slate-50">
            <div className="container mx-auto px-6 relative z-20 pt-20">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block py-2 px-4 rounded-full bg-blue-50 border border-blue-100 text-sm font-semibold text-blue-600 mb-6">
                            Restorasi Mobil Premium di Jakarta
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
                            Kembalikan <br />
                            <span className="text-blue-600">
                                Kejayaan Asli Kendaraan Anda
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Layanan body repair dan pengecatan ahli menggunakan teknologi terkini.
                            Kami mengembalikan kesempurnaan pada setiap lekukan dan warna.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="#contact"
                                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25 flex items-center gap-2 w-full sm:w-auto justify-center"
                            >
                                Dapatkan Estimasi Gratis
                                <ArrowRight size={20} />
                            </Link>
                            <Link
                                href="#gallery"
                                className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all w-full sm:w-auto justify-center"
                            >
                                Lihat Hasil Karya
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
