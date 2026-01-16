import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { getAllPostSlugs, getPostContent, getRelatedPosts } from "@/lib/blog";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all blog posts
export function generateStaticParams() {
    const slugs = getAllPostSlugs();
    return slugs.map((slug) => ({
        slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostContent(slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | Quanta Chain Blog`,
        description: post.description,
        keywords: post.keywords,
        authors: [{ name: post.author }],
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPostContent(slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = getRelatedPosts(slug, 3);

    return (
        <main className="min-h-screen bg-white text-black">
            <Navbar />

            <article className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
                <div className="container mx-auto px-6">
                    {/* Back Button */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-[#00E599] transition-colors mb-8 font-semibold"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    {/* Article Header */}
                    <div className="max-w-4xl mx-auto mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-4 py-2 bg-[#00E599]/10 text-[#00E599] text-sm font-bold rounded-full border border-[#00E599]/20">
                                {post.category}
                            </span>
                            <span className="text-gray-400">
                                {new Date(post.date).toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight leading-tight">
                            {post.title}
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            {post.description}
                        </p>

                        <div className="flex items-center gap-6 text-sm text-gray-500 pb-8 border-b border-gray-200">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>
                                    {new Date(post.date).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{post.readTime}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>By {post.author}</span>
                            </div>
                        </div>
                    </div>

                    {/* Article Content */}
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg prose-gray max-w-none
              prose-headings:font-bold prose-headings:tracking-tight
              prose-h1:text-4xl prose-h1:mb-6
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-[#00E599] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-black prose-strong:font-bold
              prose-code:text-[#00E599] prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-2xl prose-pre:overflow-x-auto
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
              prose-li:text-gray-700 prose-li:mb-2
              prose-blockquote:border-l-4 prose-blockquote:border-[#00E599] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600
              prose-table:w-full prose-table:border-collapse
              prose-th:bg-gray-100 prose-th:p-3 prose-th:text-left prose-th:font-bold
              prose-td:border prose-td:border-gray-200 prose-td:p-3
              prose-img:rounded-2xl prose-img:shadow-lg
            ">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {post.content}
                            </ReactMarkdown>
                        </div>

                        {/* Article Footer */}
                        <div className="mt-16 pt-8 border-t border-gray-200">
                            <div className="bg-gray-50 rounded-2xl p-8">
                                <h3 className="text-xl font-bold mb-4">Join the Conversation</h3>
                                <p className="text-gray-600 mb-6">
                                    Have questions or thoughts about this article? Join our community to discuss quantum-resistant blockchain technology.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="https://discord.gg/7KmMBrrJEz"
                                        target="_blank"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-[#00E599] transition-colors"
                                    >
                                        Join Discord
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <Link
                                        href="https://github.com/quantachain/quanta"
                                        target="_blank"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 text-black font-semibold rounded-full hover:bg-gray-300 transition-colors"
                                    >
                                        View on GitHub
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <div className="max-w-6xl mx-auto mt-20">
                            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {relatedPosts.map((relatedPost) => (
                                    <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                                        <div className="border-2 border-gray-100 rounded-2xl p-6 hover:border-[#00E599]/30 transition-all group cursor-pointer h-full">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="text-xs font-bold text-[#00E599]">
                                                    {relatedPost.category}
                                                </span>
                                                <span className="text-xs text-gray-400">•</span>
                                                <span className="text-xs text-gray-500">
                                                    {relatedPost.readTime}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold mb-3 group-hover:text-[#00E599] transition-colors">
                                                {relatedPost.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 line-clamp-2">
                                                {relatedPost.description}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </article>

            <Footer />
        </main>
    );
}
