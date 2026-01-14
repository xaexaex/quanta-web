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
    <main className="min-h-screen bg-transparent text-black">
      <Navbar />

      <div className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mb-16 sm:mb-20">
            <div className="inline-block mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase px-4 py-2 bg-gray-100 rounded-full">
                Community
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight leading-[0.95]">
              Join the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E599] to-emerald-600">Community</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-light max-w-2xl">
              Join the movement building quantum-resistant infrastructure. Connect with developers, miners, researchers, and blockchain enthusiasts <span className="text-black font-medium">securing the future.</span>
            </p>
          </div>

          {/* Email Capture */}
          {/* <EmailCapture /> */}

          {/* Social Channels */}
          <div className="mb-20 sm:mb-24 mt-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Connect With Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <a href="https://discord.gg/7KmMBrrJEz" target="_blank" className="border-2 border-gray-100 rounded-3xl p-8 hover:border-[#00E599]/30 transition-all block group">
                <div className="w-14 h-14 bg-[#00E599]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00E599]/20 transition-colors">
                  <MessagesSquare className="w-7 h-7 text-[#00E599]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Discord</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Join our community hub for technical discussions, mining support, development updates, and direct access to the core team.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00E599] text-white rounded-full font-semibold hover:bg-[#00E599]/90 transition-all">
                  Join Now →
                </div>
              </a>

              <a href="https://x.com/quantachain" target="_blank" className="border-2 border-gray-100 rounded-3xl p-8 hover:border-[#00E599]/30 transition-all block group">
                <div className="w-14 h-14 bg-[#00E599]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00E599]/20 transition-colors">
                  <Twitter className="w-7 h-7 text-[#00E599]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">X (Twitter)</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Follow for testnet announcements, technical deep-dives into post-quantum cryptography, ecosystem news, and roadmap updates.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00E599] text-white rounded-full font-semibold hover:bg-[#00E599]/90 transition-all">
                  Follow Now →
                </div>
              </a>

              <a href="https://t.me/quantanetwork" target="_blank" className="border-2 border-gray-100 rounded-3xl p-8 hover:border-[#00E599]/30 transition-all block group">
                <div className="w-14 h-14 bg-[#00E599]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00E599]/20 transition-colors">
                  <Send className="w-7 h-7 text-[#00E599]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Telegram</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Fast-paced community chat for real-time discussions, quick support, trading insights, and connecting with miners worldwide.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00E599] text-white rounded-full font-semibold hover:bg-[#00E599]/90 transition-all">
                  Join Chat →
                </div>
              </a>
            </div>
          </div>

          {/* GitHub Community */}
          <div className="mb-24 border-2 border-gray-100 rounded-3xl p-12 hover:border-[#00E599]/30 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#00E599]/10 rounded-xl flex items-center justify-center">
                <Github className="w-6 h-6 text-[#00E599]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Open Source</h2>
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              QUANTA is fully open source. Contribute to the codebase, report issues, review cryptographic implementation, or help improve documentation on GitHub.
            </p>
            <a
              href="https://github.com/quantachain/quanta"
              target="_blank"
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all hover:scale-105"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>

          {/* Community Guidelines */}
          {/* <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Community Guidelines</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <div className="border-l-4 border-[#00E599] pl-6">
                <h3 className="font-bold text-xl mb-2 text-black">Be Respectful</h3>
                <p>Treat all community members with respect. We embrace diversity of thought and background.</p>
              </div>
              <div className="border-l-4 border-[#00E599] pl-6">
                <h3 className="font-bold text-xl mb-2 text-black">Stay On Topic</h3>
                <p>Keep discussions relevant to QUANTA, post-quantum cryptography, blockchain technology, mining, and tokenomics.</p>
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
          </div> */}
        </div>
      </div>

      <Footer />
    </main>
  );
}
