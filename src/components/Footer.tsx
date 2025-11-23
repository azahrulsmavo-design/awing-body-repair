import Link from "next/link";
import Image from "next/image";
import { Instagram, MapPin, Phone, Facebook, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <div className="relative w-64 h-24 mb-8">
                            <Image
                                src="/images/logo.png"
                                alt="AWING Body Repair"
                                fill
                                className="object-contain object-left brightness-0 invert"
                            />
                        </div>
                        <p className="text-slate-300 text-[17px] leading-relaxed mb-6">
                            Spesialis body repair dan pengecatan mobil premium di Jakarta. Mengembalikan keindahan kendaraan Anda dengan presisi.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-all">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Menu</h3>
                        <ul className="space-y-4">
                            <li><Link href="#hero" className="text-base text-slate-300 hover:text-blue-400 transition-colors">Beranda</Link></li>
                            <li><Link href="#about" className="text-base text-slate-300 hover:text-blue-400 transition-colors">Tentang Kami</Link></li>
                            <li><Link href="#services" className="text-base text-slate-300 hover:text-blue-400 transition-colors">Layanan</Link></li>
                            <li><Link href="#gallery" className="text-base text-slate-300 hover:text-blue-400 transition-colors">Galeri</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Layanan</h3>
                        <ul className="space-y-4">
                            <li className="text-base text-slate-300">Body Repair Total</li>
                            <li className="text-base text-slate-300">Pencocokan Warna</li>
                            <li className="text-base text-slate-300">Perbaikan Penyok</li>
                            <li className="text-base text-slate-300">Poles & Detailing</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Kontak</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-300 text-base">
                                <MapPin className="shrink-0 mt-1 text-blue-500" size={20} />
                                <span>Jl. Klp. Dua Raya No.45, Tugu, Kec. Cimanggis, Kota Depok</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-300 text-base">
                                <Phone className="shrink-0 text-blue-500" size={20} />
                                <span>+62 819-9589-6037</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-300 text-base">
                                <Mail className="shrink-0 text-blue-500" size={20} />
                                <span>info@awingbodyrepair.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} AWING Body Repair & Cat. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
