import { getBlogPosts } from "@/lib/blog-data";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Calendar, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Blog & Tips Otomotif | AWING Body Repair Depok",
    description:
        "Kumpulan artikel, tips perawatan cat mobil, dan edukasi seputar body repair dari ahli kami di AWING Body Repair Depok.",
};

export default function BlogIndexPage() {
    const posts = getBlogPosts();

    return (
        <main className="pt-24 pb-16 min-h-screen bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Blog & Tips Otomotif
                    </h1>
                    <p className="text-lg text-slate-600">
                        Informasi terbaru seputar perawatan mobil, tips pengecatan, dan
                        edukasi body repair untuk Anda.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <article
                            key={post.slug}
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
                                    <span className="flex items-center gap-1">
                                        <User className="w-4 h-4" />
                                        {post.author}
                                    </span>
                                </div>
                                <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                </h2>
                                <p className="text-slate-600 mb-4 line-clamp-3 text-sm flex-grow">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                                    <div className="flex gap-2">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                                    >
                                        Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
