"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Workshop Background"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/20 to-slate-900/80" />
            </div>

            <div className="container mx-auto px-6 relative z-20 pt-20">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block py-2 px-4 rounded-full bg-blue-500/10 border border-blue-400/30 text-sm font-semibold text-blue-300 mb-4 backdrop-blur-sm">
                            Restorasi Mobil Premium di Jakarta
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight mb-4">
                            Kembalikan <br />
                            <span className="text-blue-500">
                                Kejayaan Asli Kendaraan Anda
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
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
                                className="px-8 py-4 bg-white/10 text-white border-2 border-white/20 font-semibold rounded-lg hover:bg-white/20 hover:border-white/40 transition-all w-full sm:w-auto justify-center backdrop-blur-sm"
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
