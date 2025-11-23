"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

const projects = [
    {
        image: "/images/portfolio-1.jpg",
        title: "Repair & Cat Ford Everest",
        category: "Body Repair"
    },
    {
        image: "/images/portfolio-2.jpg",
        title: "Restorasi Vespa Klasik",
        category: "Restorasi Motor"
    },
    {
        image: "/images/portfolio-3.jpg",
        title: "Cat Full Body Toyota Vios",
        category: "Repaint Full Body"
    },
    {
        image: "/images/portfolio-4.jpg",
        title: "Cat Panel Toyota Camry",
        category: "Cat Panel"
    },
    {
        image: "/images/portfolio-5.jpg",
        title: "Cat Moge Harley Davidson",
        category: "Cat Motor"
    },
    {
        image: "/images/portfolio-1.jpg", // Reusing image for demo
        title: "Body Repair Honda Freed",
        category: "Body Repair"
    }
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4"
                    >
                        Portofolio
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        Hasil Karya Kami
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 max-w-2xl mx-auto text-lg"
                    >
                        Lihat transformasi kendaraan yang telah kami kerjakan. Bukti nyata dari dedikasi kami terhadap kualitas dan detail.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-blue-400 text-sm font-medium mb-2">{project.category}</span>
                                <h4 className="text-xl font-bold text-white">{project.title}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="https://instagram.com"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all"
                    >
                        <Instagram size={20} />
                        Lihat Lebih Banyak di Instagram
                    </Link>
                </div>
            </div>
        </section>
    );
}
