import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Core Team",
  description: "Learn about Quanta Chain, our mission to build quantum-resistant blockchain infrastructure, and why post-quantum cryptography matters now.",
};

export default function AboutPage() {
  const techStack = [
    { title: "Language", desc: "Rust 2021 for memory safety and performance" },
    { title: "Signatures", desc: "Falcon-512 (NIST Level 1, lattice-based)" },
    { title: "Encryption", desc: "Kyber-1024 (NIST Level 5, 256-bit quantum security)" },
    { title: "Consensus", desc: "Adaptive PoW with 30s block time" },
  ];

  const transparency = [
    { title: "Funding Status", desc: "Self-funded by founding team. No venture capital, no pre-mine, no ICO. We're building for the long term, not a quick exit." },
    { title: "Development Progress", desc: "Active development since 2024. Core protocol implementation complete. Currently in Phase 1 of testnet preparation." },
    { title: "Audits & Security", desc: "External security audits scheduled for Q2 2026 during public testnet phase. Bug bounty program will launch alongside testnet." },
    { title: "Open Source Commitment", desc: "All code is MIT licensed and publicly available on GitHub. We believe in radical transparency and community-driven development." },
  ];

  return (
    <main className="min-h-screen bg-transparent text-black selection:bg-[#C4ED5F] selection:text-black">
      <Navbar />

      <div className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        <div className="container mx-auto px-6">

          {/* Hero */}
          <div className="max-w-4xl mx-auto mb-16 sm:mb-20">
            <div className="inline-block mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase px-4 py-2 bg-gray-100 rounded-full">
                Team
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight leading-[0.95]">
              Protocol <br />
              <span className="text-[#C4ED5F]">Maintainers</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-light max-w-2xl">
              Building production-ready quantum-resistant blockchain infrastructure with{" "}
              <span className="text-black font-medium">NIST-standardized post-quantum cryptography for long-term security.</span>
            </p>
          </div>

          {/* Core Maintainers */}
          <div className="mb-20 sm:mb-24 max-w-4xl mx-auto">
            <div className="bg-white shadow-xl -translate-y-1 rounded-2xl p-8 sm:p-12 border border-[#C4ED5F]/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 tracking-tight">
                Quantalabs
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
                The Quanta Protocol is actively developed and maintained by the engineering team at <strong className="text-black font-semibold">Quantalabs</strong>. We are a dedicated group of cryptographers, distributed systems engineers, and researchers focused exclusively on building sovereign, quantum-resistant infrastructure for the future of finance and enterprise.
              </p>
              <div className="inline-flex">
                <a
                  href="https://quantalabs.cc"
                  target="_blank"
                  className="bg-black text-black px-6 py-3 rounded-full font-bold hover:bg-[#C4ED5F] hover:text-black transition-colors flex items-center gap-2"
                >
                  Visit Quantalabs.cc
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
            </div>

            <div className="mt-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C4ED5F]/10 border border-[#C4ED5F]/20 rounded-full">
                <div className="w-2 h-2 bg-[#C4ED5F] rounded-full" />
                <p className="text-gray-700 font-semibold text-sm">
                  Supported by a global ecosystem of independent contributors
                </p>
              </div>
            </div>
          </div>

          {/* Why Quantum Resistance Matters */}
          <div className="max-w-4xl mx-auto mb-24">
            <div className="inline-block mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase px-4 py-2 bg-gray-100 rounded-full">
                The Mission
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight">
              Why Quantum Resistance <span className="text-[#C4ED5F]">Matters</span>
            </h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                Quantum computers are advancing rapidly. IBM, Google, and other tech giants are making significant progress. Conservative estimates suggest quantum computers capable of breaking current blockchain cryptography (ECDSA/EdDSA) could exist within 10–15 years.
              </p>
              <p>
                Traditional cryptographic algorithms like ECDSA and RSA, which secure billions of dollars in cryptocurrency today, will become vulnerable to Shor's algorithm running on sufficiently powerful quantum computers. This isn't speculation — it's a matter of when, not if.
              </p>
              <p className="font-semibold text-black">
                QUANTA is built from the ground up with NIST-standardized post-quantum cryptography: Falcon-512 signatures (NIST Level 1) and Kyber-1024 encryption (NIST Level 5, 256-bit quantum security). No known polynomial-time quantum attacks exist against these lattice-based algorithms.
              </p>
            </div>
          </div>

          {/* Project Transparency */}
          <div className="max-w-4xl mx-auto mb-24">
            <div className="inline-block mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase px-4 py-2 bg-gray-100 rounded-full">
                Transparency
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-10 tracking-tight">
              Project <span className="text-[#C4ED5F]">Transparency</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {transparency.map((item, i) => (
                <div
                  key={i}
                  className="bg-white shadow-xl -translate-y-1 rounded-2xl p-6 sm:p-8 border border-[#C4ED5F]/30 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full border border-teal-600/30 flex items-center justify-center mb-5 text-sm font-mono text-teal-700 font-medium">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="max-w-4xl mx-auto mb-24">
            <div className="inline-block mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase px-4 py-2 bg-gray-100 rounded-full">
                Built With
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-10 tracking-tight">
              Technology <span className="text-[#C4ED5F]">Stack</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((item, i) => (
                <div
                  key={i}
                  className="bg-white shadow-xl -translate-y-1 rounded-2xl p-6 border border-[#C4ED5F]/30 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full border border-teal-600/30 flex items-center justify-center mb-4 text-sm font-mono text-teal-700 font-medium">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-base mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call for Builders */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-12 border border-[#C4ED5F]/30 text-center">
              <div className="w-8 h-8 rounded-full border border-teal-600/30 flex items-center justify-center mb-6 text-sm font-mono text-teal-700 font-medium mx-auto">
                ✦
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900">Call for Passionate Builders</h3>
              <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
                We are looking for passionate contributors who believe in the post-quantum future. Whether you are a Rustacean, a cryptographer, or a community builder, join us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/quantachain/quanta/issues"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-black text-black font-bold rounded-full hover:bg-[#C4ED5F] hover:text-black transition-all hover:scale-105 active:scale-95"
                >
                  <Github className="w-5 h-5" />
                  View Open Issues
                </a>
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center text-sm text-gray-500">
                  <a href="mailto:contact@quantachain.org" className="text-[#C4ED5F] hover:underline font-semibold">contact@quantachain.org</a>
                  <span className="hidden sm:inline text-gray-300">|</span>
                  <a href="https://www.linkedin.com/company/quantachain" target="_blank" className="text-[#C4ED5F] hover:underline font-semibold">LinkedIn →</a>
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
