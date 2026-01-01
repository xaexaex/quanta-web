import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmailCapture from "@/components/EmailCapture";
import Link from "next/link";
import { Calendar, ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical insights, development updates, and perspectives on quantum-resistant blockchain technology and post-quantum cryptography.",
};

// Blog post data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "Why Quantum Resistance Matters Now",
    excerpt: "Quantum computers are advancing faster than most realize. Learn why we need quantum-resistant blockchains today, not tomorrow.",
    date: "Coming Soon",
    category: "Security",
    readTime: "5 min read",
    slug: "why-quantum-resistance-matters"
  },
  {
    id: 2,
    title: "Understanding Falcon-512 Signatures",
    excerpt: "A deep dive into the NIST-standardized post-quantum signature scheme that powers Quanta's security.",
    date: "Coming Soon",
    category: "Technology",
    readTime: "8 min read",
    slug: "understanding-falcon-512"
  },
  {
    id: 3,
    title: "Building on Quanta: Developer Guide",
    excerpt: "Everything developers need to know to start building quantum-resistant applications on Quanta Chain.",
    date: "Coming Soon",
    category: "Development",
    readTime: "10 min read",
    slug: "building-on-quanta"
  },
  {
    id: 4,
    title: "Proof-of-Work in the Quantum Era",
    excerpt: "How Quanta's PoW consensus mechanism remains secure against quantum attacks while maintaining decentralization.",
    date: "Coming Soon",
    category: "Consensus",
    readTime: "6 min read",
    slug: "pow-quantum-era"
  }
];

const categories = ["All", "Security", "Technology", "Development", "Consensus", "Updates"];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Hero */}
          <div className="text-center mb-20">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-6">
              Quanta <span className="text-[#00E599]">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Technical insights, development updates, and perspectives on building quantum-resistant blockchain infrastructure.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  category === "All"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="bg-gradient-to-br from-black to-gray-900 text-white rounded-3xl overflow-hidden">
              <div className="p-12 md:p-16">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-2 bg-[#00E599] text-black text-sm font-bold rounded-full">
                    Featured
                  </span>
                  <span className="text-gray-400">Coming Soon</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Introducing Quanta: The Quantum-Resistant Blockchain
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Why we're building a blockchain from scratch with post-quantum cryptography, what makes it different, and our vision for securing digital assets in the quantum era.
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-400 mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Coming Soon</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>12 min read</span>
                  </div>
                </div>
                <button disabled className="inline-flex items-center gap-3 px-8 py-4 bg-[#00E599] text-black font-bold rounded-full opacity-50 cursor-not-allowed">
                  Read Article
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="border-2 border-gray-100 rounded-3xl p-8 hover:border-[#00E599] transition-all group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-bold text-[#00E599]">{post.category}</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00E599] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <button disabled className="inline-flex items-center gap-2 text-gray-400 font-semibold cursor-not-allowed">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-3xl mx-auto mb-20">
            <EmailCapture 
              title="Never Miss an Update"
              description="Get notified when we publish new articles, technical deep-dives, and development updates."
              buttonText="Subscribe to Blog"
            />
          </div>

          {/* Coming Soon Notice */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-50 border-2 border-gray-200 rounded-3xl p-12">
              <h3 className="text-2xl font-bold mb-4">More Content Coming Soon</h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                We're working on comprehensive technical documentation, tutorials, and regular development updates. Subscribe to our newsletter to be notified when new content is published.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
