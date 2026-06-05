"use client";

import { useState } from "react";

const milestones = [
  {
    quarter: "Q1 2026",
    title: "Testnet Launch",
    items: [
      "Core blockchain, P2P, REST API, RPC",
      "HD Wallet (BIP39/BIP32), Multisig (M-of-N)",
      "Treasury Multisig live on-chain",
      "Docker image + Prometheus monitoring",
      "Zenodo research paper published",
    ],
    status: "done",
  },
  {
    quarter: "Q2 2026",
    title: "Public Testnet & Ecosystem",
    items: [
      "91,000+ blocks, external validators live",
      "Block explorer — quascan.xyz",
      "Chrome wallet extension (Live)",
      "quanta-sdk (NPM) + quanta-wasm (Crates.io)",
      "Mining Pool Server (Stratum-Q)",
      "Data Indexer (Rust + MongoDB)",
      "External security audits initiated",
    ],
    status: "active",
  },
  {
    quarter: "Q3 2026",
    title: "Security Hardening",
    items: [
      "Comprehensive protocol audit",
      "Penetration testing",
      "Bug bounty program launch",
      "Mobile Wallet (Android — Rust JNI)",
      "QuantaCipher API integration",
      "Protocol finalization",
    ],
    status: "upcoming",
  },
  {
    quarter: "Q4 2026",
    title: "Mainnet Preparation",
    items: [
      "Code freeze + genesis configuration",
      "21-validator bootstrap consortium",
      "Desktop wallets (Windows / macOS / Linux)",
      "Block explorer v2 with full analytics",
      "AI Escrow + DePIN settlement templates",
    ],
    status: "upcoming",
  },
  {
    quarter: "Q1 2027",
    title: "Mainnet Genesis",
    items: [
      "Genesis block event",
      "Production wallet suite",
      "Exchange integrations",
      "AI agent SDK v1",
      "DePIN settlement mainnet",
    ],
    status: "upcoming",
  },
];

export default function Roadmap() {
  // Defaulting to index 1 which is the current "active" phase (Q2 2026)
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="mb-24 text-center max-w-3xl mx-auto">
        <span className="section-label inline-block mb-4">Roadmap</span>
        <h2
          className="text-5xl sm:text-6xl font-bold leading-[1.1] tracking-tight text-black"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Building Toward
          <br className="hidden sm:block" />
          <span className="inline-block mt-3 text-[#C4ED5F] bg-black px-6 py-2 shadow-2xl rounded-xl -rotate-2">
            Mainnet 2027.
          </span>
        </h2>
      </div>

      {/* Interactive Progress Bar */}
      <div className="relative mb-12 overflow-x-auto pt-6 pb-8 custom-scrollbar">
        <div className="flex justify-between items-center min-w-[750px] relative px-4">
          
          {/* Background Track Line */}
          <div className="absolute top-6 left-4 right-4 h-1 -translate-y-1/2 bg-[rgba(0,0,0,0.06)] z-0 rounded-full" />
          
          {/* Active Fill Line (Progress) */}
          <div
            className="absolute top-6 left-4 h-1 -translate-y-1/2 bg-[#C4ED5F] z-0 rounded-full transition-all duration-700 ease-in-out"
            style={{ width: `calc(${(activeIndex / (milestones.length - 1)) * 100}% - 32px)` }}
          />

          {milestones.map((m, i) => (
            <button
              key={m.quarter}
              onClick={() => setActiveIndex(i)}
              className="relative z-10 flex flex-col items-center gap-4 group focus:outline-none"
            >
              {/* Node Dot */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-sm ${
                  i <= activeIndex
                    ? "bg-[#C4ED5F] ring-4 ring-white"
                    : "bg-white border-2 border-[rgba(0,0,0,0.1)] group-hover:border-[rgba(196,237,95,0.8)]"
                } ${i === activeIndex ? "scale-110 shadow-[0_0_20px_rgba(196,237,95,0.4)]" : "hover:scale-105"}`}
              >
                {/* Inner marker */}
                {i < activeIndex && <div className="w-3 h-3 rounded-full bg-black opacity-80" />}
                {i === activeIndex && <div className="w-4 h-4 rounded-full bg-black animate-pulse" />}
              </div>

              {/* Label */}
              <div
                className={`text-center transition-colors duration-300 mt-2 ${
                  i === activeIndex ? "text-black font-bold" : "text-gray-400 font-medium group-hover:text-black"
                }`}
              >
                <div className="text-[12px] font-mono uppercase tracking-widest">{m.quarter}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Display Box */}
      <div className="bg-[#050505] text-white rounded-[2rem] p-8 sm:p-14 shadow-2xl relative overflow-hidden ring-1 ring-white/10 min-h-[380px] flex flex-col justify-center">
        {/* Subtle Cyber Glow inside box */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#C4ED5F]/[0.04] blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C4ED5F]/50 to-transparent opacity-50" />

        <div className="relative z-10 max-w-4xl">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-10">
            <h3
              className="text-4xl sm:text-5xl font-bold transition-all"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {milestones[activeIndex].title}
            </h3>
            <span
              className={`inline-flex items-center gap-2 px-3 py-1.5 text-[10px] uppercase font-mono font-black tracking-widest rounded-full w-max ${
                milestones[activeIndex].status === "done"
                  ? "bg-[#C4ED5F]/20 text-[#C4ED5F] border border-[#C4ED5F]/30"
                  : milestones[activeIndex].status === "active"
                  ? "bg-[#C4ED5F] text-black shadow-[0_0_15px_rgba(196,237,95,0.4)]"
                  : "bg-white/10 text-white/40 border border-white/10"
              }`}
            >
              {milestones[activeIndex].status === "active" && <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse-dot" />}
              {milestones[activeIndex].status}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {milestones[activeIndex].items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="mt-2 w-2 h-2 rounded-full bg-[#C4ED5F] shadow-[0_0_10px_rgba(196,237,95,0.6)] flex-shrink-0" />
                <p className="text-gray-300 leading-relaxed font-light text-lg">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
