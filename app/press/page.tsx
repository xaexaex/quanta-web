import { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Press Kit",
  description: "Quanta Chain press kit. Download logos, brand assets, project descriptions, and media resources for coverage of the quantum-resistant blockchain.",
};

const quickFacts = [
  { label: "Name", value: "Quanta Chain" },
  { label: "Type", value: "Post-Quantum Layer 1 Blockchain" },
  { label: "Technology", value: "Rust, Falcon-512, AlephBFT" },
  { label: "Consensus", value: "AlephBFT (Byzantine Fault Tolerant)" },
  { label: "Block Time", value: "~6 seconds BFT finality" },
  { label: "GitHub", value: "github.com/quantachain/quanta", href: "https://github.com/quantachain/quanta" },
];


const talkingPoints = [
  { title: "Quantum Threat Is Real", desc: "IBM, Google, and others are making rapid progress. Current blockchain cryptography will be vulnerable within a decade." },
  { title: "NIST-Standardized", desc: "Using officially standardized post-quantum algorithms, not experimental cryptography." },
  { title: "Production-Ready", desc: "Full-featured blockchain with HD wallets, encrypted memos, and comprehensive monitoring." },
  { title: "Rust Performance", desc: "Memory-safe implementation with the speed and security of Rust." },
  { title: "Developer-Friendly", desc: "Account-based model familiar to Ethereum developers." },
  { title: "Open Source", desc: "Fully transparent codebase for security audits and community contributions." },
];

const brandGuidelines = [
  { ok: true, text: "Use the official Quanta wordmark with the green dot accent" },
  { ok: true, text: "Maintain clear space around the logo (minimum 20px)" },
  { ok: true, text: "Use the primary green (#00E599) for accents and highlights" },
  { ok: false, text: "Don't alter the logo colors or proportions" },
  { ok: false, text: "Don't use gradients or effects on the wordmark" },
];

const timeline = [
  { active: true, title: "Current Phase: Testnet Live", desc: "Core protocol development complete. Testnet running publicly with faucet & block explorer. Target: Q2 2026" },
  { active: false, title: "Next: External Audit & Bug Bounty", desc: "Full external security audits and public bug bounty program. Target: Q3 2026" },
  { active: false, title: "Future: Mainnet Launch", desc: "Production mainnet with full ecosystem tools (wallet, explorer, mining pools). Target: Q1 2027" },
];

export default function PressKitPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-[#00E599] selection:text-black">
      <Navbar />

      <div className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        <div className="container mx-auto px-6">

          {/* Hero */}
          <div className="max-w-4xl mb-16 sm:mb-20">
            <div className="inline-block mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#00E599] uppercase px-4 py-2 bg-[rgba(0,229,153,0.1)] rounded-full border border-[rgba(0,229,153,0.2)]">
                Press Kit
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight leading-[0.95] text-white">
              Press <br />
              <span className="text-[#00E599]">Kit</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#8a8a8a] leading-relaxed font-light max-w-2xl">
              Everything you need to cover Quanta.{" "}
              <span className="text-white font-medium">Logos, brand assets, descriptions, and media resources.</span>
            </p>
          </div>

          {/* Quick Facts */}
          <div className="max-w-4xl mb-24">
            <div className="inline-block mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase px-4 py-2 bg-gray-100 rounded-full">
                At a Glance
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-10 tracking-tight">
              Quick <span className="text-[#00E599]">Facts</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {quickFacts.map((fact, i) => (
                <div key={i} className="bg-[#0f0f0f] rounded-2xl p-6 border border-[rgba(0,229,153,0.15)] hover:border-[rgba(0,229,153,0.4)] transition-all duration-300">
                  <div className="w-8 h-8 rounded-full border border-[rgba(0,229,153,0.3)] flex items-center justify-center mb-4 text-sm font-mono text-[#00E599] font-medium">
                    {i + 1}
                  </div>
                  <p className="text-xs font-mono font-bold tracking-widest text-[#4a4a4a] uppercase mb-1">{fact.label}</p>
                  {fact.href ? (
                    <a href={fact.href} target="_blank" rel="noopener noreferrer" className="text-[#00E599] font-semibold hover:underline text-sm">{fact.value}</a>
                  ) : (
                    <p className="text-white font-semibold text-sm">{fact.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Project Descriptions */}
          <div className="max-w-4xl mb-24">
            <div className="inline-block mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase px-4 py-2 bg-gray-100 rounded-full">
                Copy-Ready
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-10 tracking-tight">
              Project <span className="text-[#00E599]">Descriptions</span>
            </h2>
            <div className="space-y-5">
              {[
                {
                  label: "One-Liner (Twitter/Social)",
                  text: "Quanta: The first quantum-resistant blockchain built with NIST-standardized post-quantum cryptography."
                },
                {
                  label: "Short Description (100 words)",
                  text: "Quanta is a next-generation blockchain designed to be secure against quantum computer attacks. Built entirely in Rust and utilizing NIST-standardized post-quantum cryptographic algorithms (Falcon-512 for digital signatures and Kyber-1024 for key encapsulation), Quanta provides enterprise-grade security for the quantum era. With a ~30 second block time, familiar account-based model, and comprehensive security features including HD wallet support and encrypted transaction memos, Quanta is production-ready infrastructure for decentralized applications that need to withstand future quantum threats."
                },
                {
                  label: "Long Description (250 words)",
                  text: "Quanta Chain is the world's first production-ready, quantum-resistant blockchain protocol built from the ground up to protect against the imminent threat posed by quantum computers. As major tech companies make rapid advances in quantum computing capabilities, traditional blockchain networks using ECDSA and RSA cryptography face an existential security risk. Quanta addresses this challenge head-on.\n\nDeveloped entirely in Rust for memory safety and performance, Quanta implements NIST-standardized post-quantum cryptographic algorithms: Falcon-512 for digital signatures and Kyber-1024 for key encapsulation mechanisms. This isn't experimental cryptography — these are officially standardized algorithms vetted by the world's leading cryptographers.\n\nThe protocol features a familiar account-based model similar to Ethereum, making it accessible for developers transitioning from existing blockchain platforms. With approximately 30-second block times, comprehensive security monitoring, HD wallet support, and encrypted transaction memos, Quanta provides all the features enterprises need for real-world deployment.\n\nQuanta uses Proof-of-Work consensus with SHA-256 mining, enabling decentralized network security while remaining quantum-resistant. The entire codebase is open source, allowing security researchers and developers worldwide to audit and contribute to the protocol."
                },
              ].map((desc, i) => (
                <div key={i} className="bg-white shadow-xl -translate-y-1 rounded-2xl p-6 sm:p-8 border border-[#00E599]/30 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                  <p className="text-xs font-mono font-bold tracking-widest text-[#00E599] uppercase mb-3">{desc.label}</p>
                  <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">{desc.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Brand Assets */}
          <div className="max-w-4xl mb-24">
            <div className="inline-block mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase px-4 py-2 bg-gray-100 rounded-full">
                Brand
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-10 tracking-tight">
              Brand <span className="text-[#00E599]">Assets</span>
            </h2>

            {/* Brand Colors */}
            <h3 className="text-xl font-bold mb-5 text-gray-900">Brand Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
              {[
                { bg: "bg-[#00E599]", label: "Primary", hex: "#00E599" },
                { bg: "bg-black", label: "Black", hex: "#000000" },
                { bg: "bg-white border-2 border-gray-200", label: "White", hex: "#FFFFFF" },
                { bg: "bg-gray-500", label: "Gray", hex: "#6B7280" },
              ].map((c, i) => (
                <div key={i} className="bg-white shadow-xl rounded-2xl p-4 border border-gray-100">
                  <div className={`w-full h-20 ${c.bg} rounded-xl mb-3`} />
                  <p className="font-bold text-sm">{c.label}</p>
                  <p className="text-xs text-gray-500 font-mono">{c.hex}</p>
                </div>
              ))}
            </div>

            {/* Logo Downloads */}
            <h3 className="text-xl font-bold mb-5 text-gray-900">Logo Downloads</h3>
            <div className="grid md:grid-cols-2 gap-5 mb-12">
              {/* Light bg logo */}
              <div className="bg-white shadow-xl rounded-2xl p-6 border border-[#00E599]/30">
                <div className="bg-gray-50 flex items-center justify-center h-36 mb-4 rounded-xl">
                  <Image src="/logo/quanta-transparent-bg-logo.svg" alt="Quanta Logo" width={120} height={120} className="w-28 h-28" />
                </div>
                <p className="text-sm font-semibold text-gray-700 text-center mb-4">Transparent Logo — Light Background</p>
                <div className="flex gap-2">
                  <a href="/logo/quanta-transparent-bg-logo.svg" download className="flex-1 px-4 py-2.5 bg-black text-white rounded-full text-sm font-semibold hover:bg-[#00E599] hover:text-black transition-all text-center flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" /> SVG
                  </a>
                  <a href="/logo/quanta-transparent-bg-logo.png" download className="flex-1 px-4 py-2.5 bg-gray-100 text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition-all text-center flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" /> PNG
                  </a>
                </div>
              </div>

              {/* Dark bg logo */}
              <div className="bg-black shadow-xl rounded-2xl p-6 border border-white/10">
                <div className="bg-black flex items-center justify-center h-36 mb-4 rounded-xl">
                  <Image src="/logo/quanta-white-bg-logo.svg" alt="Quanta Logo White" width={120} height={120} className="w-28 h-28" />
                </div>
                <p className="text-sm font-semibold text-gray-400 text-center mb-4">White Logo — Dark Background</p>
                <div className="flex gap-2">
                  <a href="/logo/quanta-white-bg-logo.svg" download className="flex-1 px-4 py-2.5 bg-[#00E599] text-black rounded-full text-sm font-semibold hover:bg-[#00c282] transition-all text-center flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" /> SVG
                  </a>
                  <a href="/logo/quanta-white-bg-logo.png" download className="flex-1 px-4 py-2.5 bg-gray-800 text-white rounded-full text-sm font-semibold hover:bg-gray-700 transition-all text-center flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" /> PNG
                  </a>
                </div>
              </div>

              {/* Black logo */}
              <div className="bg-white shadow-xl rounded-2xl p-6 border border-[#00E599]/30">
                <div className="bg-gray-50 flex items-center justify-center h-36 mb-4 rounded-xl">
                  <Image src="/logo/quanta-black-bg-logo.svg" alt="Quanta Logo Black" width={120} height={120} className="w-28 h-28" />
                </div>
                <p className="text-sm font-semibold text-gray-700 text-center mb-4">Black Logo — Light Background</p>
                <div className="flex gap-2">
                  <a href="/logo/quanta-black-bg-logo.svg" download className="flex-1 px-4 py-2.5 bg-black text-white rounded-full text-sm font-semibold hover:bg-[#00E599] hover:text-black transition-all text-center flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" /> SVG
                  </a>
                  <a href="/logo/quanta-black-bg-logo.png" download className="flex-1 px-4 py-2.5 bg-gray-100 text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition-all text-center flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" /> PNG
                  </a>
                </div>
              </div>

              {/* Wordmark */}
              <div className="bg-white shadow-xl rounded-2xl p-6 border border-[#00E599]/30">
                <div className="bg-gray-50 flex items-center justify-center h-36 mb-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Image src="/logo/quanta-transparent-bg-logo.svg" alt="Quanta Logo" width={48} height={48} className="w-12 h-12" />
                    <span className="text-4xl font-bold tracking-tighter">Quanta<span className="text-[#00E599]">.</span></span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-700 text-center mb-1">Full Wordmark — Light</p>
                <p className="text-xs text-gray-400 text-center">Use logo + text for maximum brand recognition</p>
              </div>
            </div>

            {/* Brand Guidelines */}
            <h3 className="text-xl font-bold mb-5 text-gray-900">Brand Guidelines</h3>
            <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-[#00E599]/30 space-y-3">
              {brandGuidelines.map((g, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm ${g.ok ? "bg-[#00E599]/10 text-[#00E599]" : "bg-red-50 text-red-500"}`}>
                    {g.ok ? "✓" : "✗"}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{g.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Talking Points */}
          <div className="max-w-4xl mb-24">
            <div className="inline-block mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase px-4 py-2 bg-gray-100 rounded-full">
                Messaging
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-10 tracking-tight">
              Key Talking <span className="text-[#00E599]">Points</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {talkingPoints.map((p, i) => (
                <div key={i} className="bg-white shadow-xl -translate-y-1 rounded-2xl p-6 border border-[#00E599]/30 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                  <div className="w-8 h-8 rounded-full border border-teal-600/30 flex items-center justify-center mb-4 text-sm font-mono text-teal-700 font-medium">{i + 1}</div>
                  <h3 className="font-bold text-base mb-2 text-gray-900">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mb-24">
            <div className="inline-block mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase px-4 py-2 bg-gray-100 rounded-full">
                Timeline
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-10 tracking-tight">
              Current Status <span className="text-[#00E599]">&amp; Timeline</span>
            </h2>
            <div className="bg-white shadow-xl rounded-2xl p-8 border border-[#00E599]/30 space-y-6">
              {timeline.map((t, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${t.active ? "bg-[#00E599]" : "bg-gray-200"}`} />
                  <div>
                    <h3 className={`font-bold text-base mb-1 ${t.active ? "text-gray-900" : "text-gray-500"}`}>{t.title}</h3>
                    <p className="text-sm text-gray-500">{t.desc}</p>
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400 italic">All dates are estimates and subject to security audit results. We prioritize security over speed.</p>
              </div>
            </div>
          </div>

          {/* Media Contact */}
          <div className="max-w-4xl">
            <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-12 border border-[#00E599]/30 text-center">
              <div className="w-12 h-12 bg-[#00E599]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-6 h-6 text-[#00E599]" />
              </div>
              <div className="inline-block mb-4">
                <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase px-4 py-2 bg-gray-100 rounded-full">
                  Contact
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight mt-4">
                Media <span className="text-[#00E599]">Inquiries</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto">
                For interviews, comments, or additional information, reach out via GitHub or email us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/quantachain/quanta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-[#00E599] hover:text-black transition-all hover:scale-105 active:scale-95"
                >
                  Contact on GitHub
                </a>
                <a
                  href="mailto:press@quantachain.org"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-gray-200 text-gray-700 font-semibold rounded-full hover:border-[#00E599] hover:text-black transition-all"
                >
                  press@quantachain.org
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
