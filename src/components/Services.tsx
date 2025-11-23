"use client";

import { motion } from "framer-motion";
import { PaintBucket, Car, Wrench, ShieldCheck, Sparkles, Hammer } from "lucide-react";

const services = [
    {
        icon: <Car size={32} />,
        title: "Cat Mobil Full Body",
        description: "Kembalikan kilau mobil seperti baru dengan full body repaint. Ubah warna untuk tampil beda atau segarkan warna asli yang sudah kusam."
    },
    {
        icon: <Wrench size={32} />,
        title: "Cat Panel & Body Repair",
        description: "Solusi untuk mobil penyok atau tergores. Layanan perbaikan panel dan pengecatan parsial untuk mengembalikan tampilan semula."
    },
    {
        icon: <Sparkles size={32} />,
        title: "Restorasi Mobil",
        description: "Kembalikan keantikan dan memori mobil klasik kesayangan Anda dengan layanan restorasi body total yang detail dan presisi."
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Salon Mobil & Detailing",
        description: "Tampil bangga dengan mobil bersih mengkilap. Detailing eksterior, interior, ruang mesin, hingga coating sesuai keinginan."
    },
    {
        icon: <Hammer size={32} />,
        title: "Setting Body & Bumper",
        description: "Perbaikan bumper turun, bercelah, atau terlepas akibat benturan. Kami setting ulang agar kembali rapi dan presisi."
    },
    {
        icon: <PaintBucket size={32} />,
        title: "Cat Motor & Lainnya",
        description: "Layanan pengecatan dan reparasi untuk motor gede (Moge), Vespa, dan kendaraan bermotor lainnya dengan kualitas terbaik."
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-slate-50 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4"
                    >
                        Keahlian Kami
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        Layanan Premium
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 max-w-2xl mx-auto text-lg"
                    >
                        Kami menawarkan rangkaian lengkap layanan perbaikan bodi dan pengecatan mobil yang dirancang untuk memenuhi standar kualitas tertinggi.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 rounded-lg bg-blue-50 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">{service.title}</h4>
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
