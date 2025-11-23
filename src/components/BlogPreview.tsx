"use client";

import { motion } from "framer-motion";
import { getBlogPosts } from "@/lib/blog-data";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogPreview() {
    // Get latest 3 posts
    const posts = getBlogPosts().slice(0, 3);

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4"
                    >
                        Artikel Terbaru
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
                    >
                        Tips & Berita Otomotif
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 max-w-2xl mx-auto text-lg"
                    >
                        Dapatkan wawasan terbaru seputar perawatan mobil, tips pengecatan, dan edukasi body repair dari ahli kami.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-slate-100 flex flex-col"
                        >
                            <Link href={`/blog/${post.slug}`} className="block relative h-48 overflow-hidden group">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </Link>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {post.date}
                                    </span>
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                </h4>
                                <p className="text-slate-600 mb-4 line-clamp-3 text-sm flex-grow">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto pt-4 border-t border-slate-100">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                                    >
                                        Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all"
                    >
                        Lihat Semua Artikel
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
