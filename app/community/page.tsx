import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MessagesSquare, Twitter, Send, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Community",
  description: "Join the Quanta Chain community. Connect with developers, miners, and blockchain enthusiasts building the quantum-resistant future.",
};

const channels = [
  {
    icon: MessagesSquare,
    title: "Discord",
    desc: "Join our community hub for technical discussions, mining support, development updates, and direct access to the core team.",
    href: "https://discord.gg/7KmMBrrJEz",
    cta: "Join Server",
  },
  {
    icon: Twitter,
    title: "X (Twitter)",
    desc: "Follow for testnet announcements, technical deep-dives into post-quantum cryptography, ecosystem news, and roadmap updates.",
    href: "https://x.com/quantachain",
    cta: "Follow Now",
  },
  {
    icon: Send,
    title: "Telegram",
    desc: "Fast-paced community chat for real-time discussions, quick support, and connecting with miners worldwide.",
    href: "https://t.me/quantanetwork",
    cta: "Join Chat",
  },
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-transparent text-black selection:bg-[#00E599] selection:text-black">
      <Navbar />

      <div className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        <div className="container mx-auto px-6">

          {/* Hero */}
          <div className="max-w-4xl mb-16 sm:mb-20">
            <div className="inline-block mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase px-4 py-2 bg-gray-100 rounded-full">
                Community
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight leading-[0.95]">
              Join the <br />
              <span className="text-[#00E599]">Community</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-light max-w-2xl">
              Connect with developers, miners, researchers, and blockchain enthusiasts{" "}
              <span className="text-black font-medium">securing the future.</span>
            </p>
          </div>

          {/* Social Channels */}
          <div className="mb-20 sm:mb-24">
            <div className="inline-block mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase px-4 py-2 bg-gray-100 rounded-full">
                Connect
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-10 tracking-tight">
              Connect <span className="text-[#00E599]">With Us</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {channels.map((ch, i) => (
                <a
                  key={i}
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white shadow-xl -translate-y-1 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[260px] transition-all duration-300 border border-[#00E599]/30 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div>
                    <div className="w-12 h-12 bg-[#00E599]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00E599]/20 transition-colors">
                      <ch.icon className="w-6 h-6 text-[#00E599]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{ch.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{ch.desc}</p>
                  </div>
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-sm font-bold rounded-full group-hover:bg-[#00E599] group-hover:text-black transition-all duration-300">
                      {ch.cta} →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Open Source / GitHub */}
          <div className="max-w-4xl">
            <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-12 border border-[#00E599]/30 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#00E599]/10 rounded-xl flex items-center justify-center">
                  <Github className="w-6 h-6 text-[#00E599]" />
                </div>
                <div>
                  <p className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase mb-1">Open Source</p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Contribute on GitHub</h2>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
                QUANTA is fully open source. Contribute to the codebase, report issues, review cryptographic implementation, or help improve documentation.
              </p>
              <a
                href="https://github.com/quantachain/quanta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-[#00E599] hover:text-black transition-all hover:scale-105 active:scale-95"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
