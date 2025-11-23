"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-600 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blue-400 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20"
                    >
                        <Star className="text-yellow-400 fill-yellow-400" size={20} />
                        <span className="font-bold text-lg">4.8/5</span>
                        <span className="text-slate-300">di Google Maps</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Apa Kata Mereka?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-300 text-lg max-w-2xl mx-auto"
                    >
                        Jangan ragu lagi. Sudah banyak yang membuktikan sendiri kualitas layanan AWING Body Repair.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 relative"
                        >
                            <Quote className="absolute top-6 right-6 text-blue-500/20" size={48} />
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-slate-300 mb-6 leading-relaxed italic">
                                "Hasil pengecatan sangat rapi dan warnanya benar-benar sama dengan aslinya. Pelayanan ramah dan harganya sangat masuk akal. Recommended banget buat yang cari bengkel cat di Depok!"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">
                                    {String.fromCharCode(65 + index)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Pelanggan Puas {index + 1}</h4>
                                    <p className="text-xs text-slate-400">Google Review</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
