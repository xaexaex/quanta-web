import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmailCapture from "@/components/EmailCapture";
import { Calendar, Users, MessagesSquare, Twitter, Send, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Community",
  description: "Join the Quanta Chain community. Connect with developers, miners, and blockchain enthusiasts building the quantum-resistant future.",
};

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-6">
              Join the <span className="text-[#00E599]">Community</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Be part of building the quantum-resistant future. Connect with developers, miners, and blockchain enthusiasts.
            </p>
          </div>

          {/* Email Capture */}
          <div className="max-w-3xl mx-auto mb-24">
            <EmailCapture 
              title="Get Launch Updates"
              description="Be the first to know when we launch Discord, Twitter, and the testnet. Get exclusive early access and rewards."
            />
          </div>

          {/* Social Channels */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Connect With Us</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="https://discord.gg/7KmMBrrJEz" target="_blank" className="border-2 border-gray-100 rounded-3xl p-8 hover:border-[#00E599] transition-all block">
                <div className="w-14 h-14 bg-[#00E599]/10 rounded-2xl flex items-center justify-center mb-6">
                  <MessagesSquare className="w-7 h-7 text-[#00E599]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Discord</h3>
                <p className="text-gray-600 mb-6">
                  Join our community hub for real-time discussions, support, and updates.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00E599] text-white rounded-full font-semibold hover:bg-[#00E599]/90 transition-all">
                  Join Now →
                </div>
              </a>

              <a href="https://x.com/quantachain" target="_blank" className="border-2 border-gray-100 rounded-3xl p-8 hover:border-[#00E599] transition-all block">
                <div className="w-14 h-14 bg-[#00E599]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Twitter className="w-7 h-7 text-[#00E599]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">X (Twitter)</h3>
                <p className="text-gray-600 mb-6">
                  Follow us for project updates, technical insights, and ecosystem news.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00E599] text-white rounded-full font-semibold hover:bg-[#00E599]/90 transition-all">
                  Follow Now →
                </div>
              </a>

              <a href="https://t.me/quantanetwork" target="_blank" className="border-2 border-gray-100 rounded-3xl p-8 hover:border-[#00E599] transition-all block">
                <div className="w-14 h-14 bg-[#00E599]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Send className="w-7 h-7 text-[#00E599]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Telegram</h3>
                <p className="text-gray-600 mb-6">
                  Fast-paced community chat for traders, developers, and enthusiasts.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00E599] text-white rounded-full font-semibold hover:bg-[#00E599]/90 transition-all">
                  Join Chat →
                </div>
              </a>
            </div>
          </div>

          {/* GitHub Community */}
          <div className="mb-24 bg-black text-white rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00E599]/10 rounded-full blur-[100px]" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <Github className="w-12 h-12 text-[#00E599]" />
                <h2 className="text-3xl md:text-4xl font-bold">Open Source</h2>
              </div>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Quanta is fully open source. Contribute code, report issues, or review our implementation on GitHub.
              </p>
              <a 
                href="https://github.com/xaexaex/quanta" 
                target="_blank"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#00E599] text-black font-bold rounded-full hover:bg-[#00E599]/90 transition-all hover:scale-105"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </div>
          </div>

          {/* Community Guidelines */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Community Guidelines</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <div className="border-l-4 border-[#00E599] pl-6">
                <h3 className="font-bold text-xl mb-2 text-black">Be Respectful</h3>
                <p>Treat all community members with respect. We embrace diversity of thought and background.</p>
              </div>
              <div className="border-l-4 border-[#00E599] pl-6">
                <h3 className="font-bold text-xl mb-2 text-black">Stay On Topic</h3>
                <p>Keep discussions relevant to Quanta, quantum computing, blockchain technology, and cryptography.</p>
              </div>
              <div className="border-l-4 border-[#00E599] pl-6">
                <h3 className="font-bold text-xl mb-2 text-black">No Financial Advice</h3>
                <p>Share information and insights, but avoid giving specific investment or financial advice.</p>
              </div>
              <div className="border-l-4 border-[#00E599] pl-6">
                <h3 className="font-bold text-xl mb-2 text-black">Help Others</h3>
                <p>Support newcomers, answer questions, and contribute to making the community welcoming.</p>
              </div>
              <div className="border-l-4 border-[#00E599] pl-6">
                <h3 className="font-bold text-xl mb-2 text-black">Report Issues</h3>
                <p>If you see spam, abuse, or violations of these guidelines, report them to moderators.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
