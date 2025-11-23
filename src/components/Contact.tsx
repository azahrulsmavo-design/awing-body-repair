"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Hubungi Kami</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Kunjungi Bengkel Kami</h3>
                        <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                            Siap untuk merestorasi kendaraan Anda? Kunjungi kami untuk inspeksi dan estimasi gratis.
                            Tim kami siap memberikan solusi terbaik untuk mobil Anda.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">Lokasi</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        Jl. Klp. Dua Raya No.45, Tugu,<br />
                                        Kec. Cimanggis, Kota Depok,<br />
                                        Jawa Barat 16451
                                    </p>
                                    <Link
                                        href="https://maps.app.goo.gl/WfU2KhcakmqR8ucJ9"
                                        target="_blank"
                                        className="text-sm text-blue-600 hover:text-blue-700 mt-2 inline-block transition-colors font-medium"
                                    >
                                        Lihat di Google Maps &rarr;
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">Telepon & WhatsApp</h4>
                                    <p className="text-slate-600 mb-2">0877-7015-2344</p>
                                    <Link
                                        href="https://wa.me/6287770152344"
                                        target="_blank"
                                        className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors font-medium"
                                    >
                                        <MessageCircle size={18} />
                                        Chat via WhatsApp
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">Jam Operasional</h4>
                                    <p className="text-slate-600">Setiap Hari: 08:00 - 17:00</p>
                                    <p className="text-slate-500 text-sm mt-1">Buka setiap hari untuk kenyamanan Anda</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-[500px] rounded-2xl overflow-hidden border border-slate-200 shadow-lg relative"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.239639265674!2d106.8496463!3d-6.3630467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec6d630e6337%3A0x6000000000000000!2sJl.%20Klp.%20Dua%20Raya%20No.45%2C%20Tugu%2C%20Kec.%20Cimanggis%2C%20Kota%20Depok%2C%20Jawa%20Barat%2016451!5e0!3m2!1sen!2sid!4v1625000000000!5m2!1sen!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
