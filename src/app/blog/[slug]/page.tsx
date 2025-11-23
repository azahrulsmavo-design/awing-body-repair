import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog-data";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        return {
            title: "Artikel Tidak Ditemukan",
        };
    }

    return {
        title: `${post.title} | Blog AWING Body Repair`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
    };
}

export async function generateStaticParams() {
    const posts = getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);
    const allPosts = getBlogPosts();

    if (!post) {
        notFound();
    }

    // Logic for recommendations
    const newestPosts = allPosts.slice(0, 5); // Top 5 newest
    const otherPosts = allPosts.filter(p => p.slug !== slug).slice(0, 3); // 3 other posts

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        image: post.image,
        author: {
            "@type": "Person",
            name: post.author,
        },
        publisher: {
            "@type": "Organization",
            name: "AWING Body Repair",
            logo: {
                "@type": "ImageObject",
                url: "https://awingbodyrepair.com/logo.png",
            },
        },
        datePublished: post.date,
        description: post.excerpt,
    };

    return (
        <main className="pt-24 pb-16 min-h-screen bg-slate-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-slate-500 hover:text-blue-600 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Kembali ke Blog
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Main Content Column (8 columns) */}
                    <div className="lg:col-span-8">
                        <article className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
                            <header className="mb-8">
                                <div className="flex gap-2 mb-4">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                    {post.title}
                                </h1>

                                <div className="flex items-center gap-6 text-slate-500 border-b border-slate-100 pb-8">
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                                            <User className="w-5 h-5 text-slate-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900">{post.author}</p>
                                            <p className="text-xs">Penulis</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-5 h-5" />
                                        <span className="text-sm">{post.date}</span>
                                    </div>
                                </div>
                            </header>

                            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-10 shadow-md">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            <div
                                className="blog-content max-w-none text-slate-700 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </article>
                    </div>

                    {/* Sidebar (Right Side - 4 columns) */}
                    <aside className="lg:col-span-4 space-y-8">
                        {/* Newest Articles Widget */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 sticky top-24">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Tag className="w-5 h-5 text-blue-600" />
                                Artikel Terbaru
                            </h3>
                            <div className="space-y-6">
                                {newestPosts.map((newPost) => (
                                    <Link key={newPost.slug} href={`/blog/${newPost.slug}`} className="group flex gap-4 items-start">
                                        <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
                                            <Image
                                                src={newPost.image}
                                                alt={newPost.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-900 line-clamp-2 group-hover:text-blue-600 transition-colors mb-1">
                                                {newPost.title}
                                            </h4>
                                            <span className="text-xs text-slate-500 flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {newPost.date}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Artikel Lainnya (Bottom Section) */}
                <section className="mt-20 border-t border-slate-200 pt-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8">Artikel Lainnya</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {otherPosts.map((otherPost) => (
                            <Link key={otherPost.slug} href={`/blog/${otherPost.slug}`} className="group bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all">
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={otherPost.image}
                                        alt={otherPost.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-5">
                                    <h4 className="font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                        {otherPost.title}
                                    </h4>
                                    <p className="text-sm text-slate-500 line-clamp-2">
                                        {otherPost.excerpt}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
