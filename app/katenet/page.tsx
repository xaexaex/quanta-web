import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Zap, ShieldCheck, Cpu, Users, Globe, Coins, Code } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Katenet (V3 Testnet) | Quantachain",
  description: "The upcoming V3 Testnet for Quanta. Experience the future of Post Quantum AI execution, DPoS, and On Chain Governance.",
  alternates: {
    canonical: "https://katenet.quantachain.org",
  },
  openGraph: {
    title: "Katenet (V3 Testnet) | Quantachain",
    description: "The upcoming V3 Testnet for Quanta. Experience the future of Post Quantum AI execution, DPoS, and On Chain Governance.",
    url: "https://katenet.quantachain.org",
    siteName: "Quantachain",
    images: [
      {
        url: "https://www.quantachain.org/seo/image2.png",
        width: 1200,
        height: 630,
        alt: "Quantachain Katenet V3 Testnet",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Katenet (V3 Testnet) | Quantachain",
    description: "The upcoming V3 Testnet for Quanta. Experience the future of Post Quantum AI execution, DPoS, and On Chain Governance.",
    images: ["https://www.quantachain.org/seo/image2.png"],
  },
};

export default function KateTestnet() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">

        {/* --- HERO SECTION --- */}
        <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto bg-transparent text-center">
          <div className="max-w-6xl mx-auto">
            <span className="section-label inline-block mb-4 text-xs font-bold uppercase tracking-widest text-[#a8d343]">The Release</span>
            <h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tighter text-black mb-8"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <span className="block md:inline-block md:whitespace-nowrap">Launching Testnet V3</span>
              <br className="hidden md:block" />
              <span className="inline-block mt-3 sm:mt-4 text-[#C4ED5F] bg-black px-6 sm:px-8 py-1 sm:py-2 shadow-2xl rounded-2xl -rotate-2">
                Katenet
              </span>
            </h1>

            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-6 font-light max-w-2xl mx-auto">
              Welcome to <strong>Testnet Kate</strong> — the foundational V3 test environment for the Quanta network. It is engineered to rigorously stress-test the new Aleph-BFT consensus implementation, optimistic agent settlement layers, and decentralized network architecture prior to Mainnet deployment.
            </p>



            <div className="mt-12">
              <a
                href="#naming-story"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C4ED5F] text-black text-[13px] font-bold uppercase tracking-widest rounded-xl hover:bg-[#d5f57a] transition-all"
              >
                Read the Naming Story
                <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>

          </div>
        </section>


        {/* --- WHAT IS V3 / FEATURES --- */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto bg-transparent">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="section-label inline-block mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">The Roadmap</span>
            <h2
              className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-black mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              What&apos;s coming in V3?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light max-w-2xl mx-auto">
              Katenet serves as the ultimate proving ground for our most ambitious protocol upgrades yet. Here is what you can expect to test.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">

            <div className="flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-black mb-6">
                <Users size={20} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: "var(--font-syne)" }}>
                Delegated Proof of Stake (DPoS)
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Consensus is no longer just for whales. V3 introduces native delegation, allowing any QUA holder to lock their tokens behind a trusted BFT validator to secure the network and earn a share of block rewards.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-black mb-6">
                <Globe size={20} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: "var(--font-syne)" }}>
                On-Chain DAO Governance
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                We are sunsetting the centralized core-team multi-sig. Katenet will test the new fully decentralized Governance contract. Submit network upgrade proposals and let the community vote on treasury funding dynamically.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-black mb-6">
                <Coins size={20} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: "var(--font-syne)" }}>
                Agent-to-Agent Payment Channels
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                AI Agents need to stream payments for compute instantly without waiting for the 6-second block time. V3 introduces native state channels. Lock QUA, stream micro-payments off-chain, and settle on-chain securely.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-black mb-6">
                <Code size={20} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: "var(--font-syne)" }}>
                Upgraded AI Smart Contracts
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Katenet ships with the newly optimized Escrow and AgentBid contracts. By acting purely as an optimistic settlement layer, Quanta leaves the heavy lifting off-chain, enabling infinite scalability for AI inferences.
              </p>
            </div>

          </div>
        </section>

        {/* --- HOW TO PARTICIPATE --- */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto bg-transparent">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="section-label inline-block mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">Get Involved</span>
            <h2
              className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-black mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              How to Participate
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light max-w-2xl mx-auto">
              Whether you are a Rust developer, an AI agent operator, or just a QUA holder, there is a place for you in the Katenet ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col rounded-3xl p-8 bg-white border border-[rgba(0,0,0,0.08)] shadow-xl shadow-[rgba(0,0,0,0.03)] hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-black mb-6">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: "var(--font-syne)" }}>Run a Node</h3>
              <p className="text-gray-600 leading-relaxed font-light mb-8 flex-grow">
                Spin up a BFT validator node and help us stress-test the new DPoS consensus limits under extreme network load.
              </p>
              <Link href="https://quantachain.gitbook.io/quantachain-docs" className="text-black font-bold uppercase tracking-widest text-[11px] hover:text-[#C4ED5F] transition-colors flex items-center gap-1">
                View Setup Guide <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="flex flex-col rounded-3xl p-8 bg-white border border-[rgba(0,0,0,0.08)] shadow-xl shadow-[rgba(0,0,0,0.03)] hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-black mb-6">
                <Code size={20} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: "var(--font-syne)" }}>Build Agents</h3>
              <p className="text-gray-600 leading-relaxed font-light mb-8 flex-grow">
                Deploy testnet AI agents using the new AgentBid contracts. Stream micro-payments using off-chain state channels.
              </p>
              <Link href="https://discord.gg/7KmMBrrJEz" className="text-black font-bold uppercase tracking-widest text-[11px] hover:text-[#C4ED5F] transition-colors flex items-center gap-1">
                Join Dev Chat <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="flex flex-col rounded-3xl p-8 bg-white border border-[rgba(0,0,0,0.08)] shadow-xl shadow-[rgba(0,0,0,0.03)] hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-black mb-6">
                <Coins size={20} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: "var(--font-syne)" }}>Delegate QUA</h3>
              <p className="text-gray-600 leading-relaxed font-light mb-8 flex-grow">
                Not a developer? No problem. Claim testnet QUA from the faucet and practice delegating to validators to earn mock rewards.
              </p>
              <Link href="/faucet" className="text-black font-bold uppercase tracking-widest text-[11px] hover:text-[#C4ED5F] transition-colors flex items-center gap-1">
                Go to Faucet <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </section>


        {/* --- THE TRADITION --- */}
        <section id="naming-story" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-transparent scroll-mt-24">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-label inline-block mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">The Tradition</span>
            <h2
              className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.0] tracking-tighter text-black mb-12"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Why Katenet?
            </h2>
            <div className="text-left space-y-8">
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed font-light">
                In the broader blockchain ecosystem, naming a testnet is a rite of passage. These names often reflect the culture, history, and philosophies of their builders.
              </p>

              <div className="pl-6 md:pl-8 border-l-4 border-black/10 py-2 my-8 space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed font-light">
                  <strong className="text-black font-semibold">Ethereum</strong> looks to the physical world, naming its testnets after global train stations like Ropsten, Kovan, Rinkeby, Goerli, Sepolia, and Holesky. It symbolizes a massive, bustling transit hub for the world's data.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed font-light">
                  <strong className="text-black font-semibold">Polkadot</strong> once looked to the skies, naming testnets after birds like Rococo and Westend, but has shifted to purely functional, descriptive names like Paseo and AssetHub to clearly define a network's purpose.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed font-light">
                  <strong className="text-black font-semibold">Cosmos</strong> takes a highly scientific approach, adhering to rigid, identifier-based formats. Chains incorporate their project name and an iteration version like cosmoshub-1 or cosmoshub-4 to reflect systematic evolution.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed font-light">
                  <strong className="text-black font-semibold">Solana</strong> bypasses names entirely in favor of brutalist, utilitarian environments. Devnet for builders, Testnet for validators, and Mainnet Beta for production.
                </p>
              </div>

              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed font-light">
                But for Quanta, the choice was never about transit hubs, scientific rigidity, or utilitarian function. The name is profoundly personal. <strong className="text-black font-semibold">Kate</strong> is not an acronym. She is not a famous cryptographer from a textbook. Kate is a real human being who believed in the Quanta vision when it was nothing more than an idea scribbled on paper. Without her unwavering, selfless support during our hardest days, this entire blockchain would simply not exist.
              </p>
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed font-light">
                Katenet honors that foundation. It stands as a permanent reminder that behind every massive cryptographic breakthrough, every zero-knowledge proof, and every complex consensus engine, there are real people who make the journey possible. This network is built in her spirit: it is a resilient, joyful sandbox designed to push limits, survive failure, and rebuild stronger together.
              </p>

              <div className="pt-16 mt-16 border-t border-black/10 flex flex-col gap-16 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl text-[#a8d343] font-serif mb-4 leading-none">&quot;</div>
                  <p className="text-black text-xl sm:text-2xl font-light leading-relaxed mb-6">
                    I love that there&apos;s a background story, it gives it life, and am really looking forward to trying out cool features with the testnet.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                    <div className="hidden sm:block h-[1px] w-8 bg-black/20"></div>
                    <span className="text-sm font-bold text-black uppercase tracking-widest">Flexispy</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">OG Contributor</span>
                    <div className="hidden sm:block h-[1px] w-8 bg-black/20"></div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl text-[#a8d343] font-serif mb-4 leading-none">&quot;</div>
                  <p className="text-black text-xl sm:text-2xl font-light leading-relaxed mb-6">
                    Proud to be part of a team that chose meaning over convention. Katenet isn&apos;t just another testnet name it&apos;s a reminder that every milestone starts with people who believe in the vision before anyone else does. Excited for what&apos;s ahead. Let&apos;s keep building.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                    <div className="hidden sm:block h-[1px] w-8 bg-black/20"></div>
                    <span className="text-sm font-bold text-black uppercase tracking-widest">cri</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">Team Member</span>
                    <div className="hidden sm:block h-[1px] w-8 bg-black/20"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* --- CALL TO ACTION --- */}
        <section className="py-20 px-6 md:px-12 bg-transparent text-center">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-black mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Ready to break the network?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light max-w-2xl mx-auto mb-12">
              Katenet will be deployed in phases. We need developers, node operators, and token holders to help us stress-test the new DPoS and Governance systems.
            </p>
            <Link
              href="https://discord.gg/7KmMBrrJEz"
              className="inline-flex items-center justify-center gap-2 bg-black text-[#C4ED5F] px-10 py-4 font-bold text-[13px] uppercase tracking-widest rounded-xl hover:bg-[#C4ED5F] hover:text-black transition-colors"
            >
              Join Discord Now
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
