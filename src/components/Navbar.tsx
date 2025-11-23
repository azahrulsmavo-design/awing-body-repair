"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Beranda", href: "/#hero" },
    { name: "Tentang", href: "/#about" },
    { name: "Layanan", href: "/#services" },
    { name: "Galeri", href: "/#gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Kontak", href: "/#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "py-4 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm" : "py-6 bg-transparent"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="relative w-32 h-12">
                    <Image
                        src="/images/logo.png"
                        alt="AWING Body Repair"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors",
                                isScrolled ? "text-slate-600 hover:text-blue-600" : "text-slate-800 hover:text-blue-600"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="https://wa.me/6281995896037"
                        target="_blank"
                        className="px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-md hover:shadow-lg"
                    >
                        <Phone size={16} />
                        Pesan Sekarang
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={cn(
                        "md:hidden",
                        isScrolled ? "text-slate-900" : "text-slate-900"
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 md:hidden p-6 shadow-xl"
                    >
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-slate-700 hover:text-blue-600"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="https://wa.me/6281995896037"
                                target="_blank"
                                className="mt-4 w-full py-3 bg-blue-600 text-white text-center font-bold rounded-lg hover:bg-blue-700"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Buat Janji Temu
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
