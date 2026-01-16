import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmailCapture from "@/components/EmailCapture";
import Link from "next/link";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { getAllPosts, getFeaturedPosts, getAllCategories } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Quanta Chain - Quantum-Resistant Blockchain Insights",
  description: "Technical insights, development updates, and perspectives on quantum-resistant blockchain technology and post-quantum cryptography.",
  keywords: ["quantum blockchain", "post-quantum cryptography", "Falcon-512", "blockchain development", "quantum computing"],
  openGraph: {
    title: "Quanta Chain Blog",
    description: "Technical insights on quantum-resistant blockchain technology",
    type: "website",
  },
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPost = getFeaturedPosts()[0] || allPosts[0];
  const categories = getAllCategories();
  const latestPosts = allPosts.slice(0, 4);

  return (
    <main className="min-h-screen bg-transparent text-black">
      <Navbar />

      <div className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        <div className="container mx-auto px-6">
          {/* Hero */}
          <div className="max-w-4xl mb-16 sm:mb-20">
            <div className="inline-block mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase px-4 py-2 bg-gray-100 rounded-full">
                Blog
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight leading-[0.95]">
              Quanta <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E599] to-emerald-600">Blog</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-light max-w-2xl">
              Technical insights, development updates, and perspectives on building <span className="text-black font-medium">quantum-resistant blockchain infrastructure.</span>
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${category === "All"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="max-w-5xl mx-auto mb-20">
              <Link href={`/blog/${featuredPost.slug}`}>
                <div className="bg-white border-2 border-gray-100 rounded-3xl overflow-hidden hover:border-[#00E599]/30 transition-all cursor-pointer group">
                  <div className="p-12 md:p-16">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="px-4 py-2 bg-[#00E599]/10 text-[#00E599] text-sm font-bold rounded-full border border-[#00E599]/20">
                        Featured
                      </span>
                      <span className="text-gray-400">{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-black group-hover:text-[#00E599] transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                      {featuredPost.description}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-full group-hover:bg-[#00E599] transition-colors">
                      Read Article
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {latestPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <article className="border-2 border-gray-100 rounded-3xl p-8 hover:border-[#00E599]/30 transition-all group cursor-pointer">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-bold text-[#00E599]">{post.category}</span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00E599] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <div className="inline-flex items-center gap-2 text-black group-hover:text-[#00E599] font-semibold transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <EmailCapture />

          {/* SEO Content */}
          <div className="max-w-4xl mx-auto mt-20">
            <div className="bg-gray-50 border-2 border-gray-100 rounded-3xl p-12">
              <h3 className="text-2xl font-bold mb-4">Stay Updated on Quantum-Resistant Blockchain</h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                Our blog covers the latest developments in post-quantum cryptography, blockchain security, and the future of decentralized systems. Subscribe to our newsletter to get notified when new technical articles and development updates are published.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <h4 className="font-bold text-black mb-2">Topics We Cover:</h4>
                  <ul className="space-y-1">
                    <li>• Post-Quantum Cryptography</li>
                    <li>• Falcon-512 Signatures</li>
                    <li>• Blockchain Development</li>
                    <li>• Quantum Computing Threats</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">For Developers:</h4>
                  <ul className="space-y-1">
                    <li>• Technical Tutorials</li>
                    <li>• API Documentation</li>
                    <li>• Code Examples</li>
                    <li>• Best Practices</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
