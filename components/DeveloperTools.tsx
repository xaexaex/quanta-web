"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Search,
  Droplet,
  Wallet,
  Smartphone,
  Package,
  Code2,
  BookOpen,
  Pickaxe,
  Briefcase,
  MessageSquare,
} from "lucide-react";

const PRODUCTS = [
  {
    category: "Infrastructure",
    items: [
      {
        name: "Block Explorer",
        description: "Real-time blocks, transactions, addresses, and network analytics — powered by quantascan.",
        href: "https://scan.quantachain.org",
        external: true,
        icon: Search,
        status: "live" as const,
        accent: "#00E599",
      },
      {
        name: "Testnet Faucet",
        description: "Request free testnet QUA to fund your development workflow instantly.",
        href: "/faucet",
        external: false,
        icon: Droplet,
        status: "live" as const,
        accent: "#00E599",
      },
      {
        name: "Quantalabs",
        description: "The core engineering lab behind the Quanta protocol — R&D, audits, and institutional services.",
        href: "https://quantalabs.cc",
        external: true,
        icon: Briefcase,
        status: "live" as const,
        accent: "#00E599",
      },
      {
        name: "Validator Node",
        description: "High-performance AlephBFT consensus node. Institutional grade security for securing the Quanta network.",
        href: "https://github.com/quantachain/quanta",
        external: true,
        icon: Pickaxe,
        status: "live" as const,
        accent: "#00E599",
        meta: "GitHub",
      },
      {
        name: "AI Escrow Demo",
        description: "Bash integration script demonstrating how autonomous agents can securely lock and claim funds.",
        href: "https://github.com/quantachain/quanta",
        external: true,
        icon: Search,
        status: "live" as const,
        accent: "#00E599",
        meta: "GitHub",
      },
      {
        name: "Data Indexer",
        description: "High-throughput Rust daemon for real-time indexing of Quanta blockchain data into MongoDB.",
        href: "https://github.com/quantachain/quanta-indexer",
        external: true,
        icon: Search,
        status: "live" as const,
        accent: "#00E599",
        meta: "GitHub",
      },
    ],
  },
  {
    category: "Wallets",
    items: [
      {
        name: "Chrome Extension",
        description: "Falcon-512 secured browser wallet. Send, receive, and sign transactions right from your browser.",
        href: "https://chrome.google.com/webstore/detail/glofbcgdmodmaohealombcgoapdbdaff",
        external: true,
        icon: Wallet,
        status: "live" as const,
        accent: "#00E599",
      },
      {
        name: "Mobile Wallet",
        description: "Native Android wallet with Rust cryptography compiled directly on-device. No compromise on security.",
        href: "https://github.com/quantachain/quanta-mobile-wallet",
        external: true,
        icon: Smartphone,
        status: "building" as const,
        accent: "#3b82f6",
      },
      {
        name: "Native Templates",
        description: "Write zero-gas smart contracts directly in Rust. Native execution speed without EVM overhead.",
        href: "https://quantachain.gitbook.io/quantachain-docs/templates",
        external: true,
        icon: Code2,
        status: "live" as const,
        accent: "#00E599",
      },
    ],
  },
  {
    category: "Developer",
    items: [
      {
        name: "quanta-sdk",
        description: "Official JavaScript / TypeScript SDK. Wallets, transactions, TimeLock, MultiSig — all post-quantum.",
        href: "https://www.npmjs.com/package/quanta-sdk",
        external: true,
        icon: Package,
        status: "live" as const,
        accent: "#00E599",
        meta: "NPM",
      },
      {
        name: "quanta-wasm",
        description: "Falcon-512 cryptography compiled to WebAssembly. Native-speed PQC directly in the browser or Node.js.",
        href: "https://www.npmjs.com/package/quanta-wasm",
        external: true,
        icon: Code2,
        status: "live" as const,
        accent: "#00E599",
        meta: "NPM · Crates.io",
      },
      {
        name: "Documentation",
        description: "Full validator setup, Rust templates guide, REST API reference, and technical specifications.",
        href: "https://quantachain.gitbook.io/quantachain-docs",
        external: true,
        icon: BookOpen,
        status: "live" as const,
        accent: "#00E599",
        meta: "GitBook",
      },
    ],
  },
];

const STATS = [
  { value: "8", label: "Live Products" },
  { value: "120+", label: "TPS" },
  { value: "9", label: "Repos on GitHub" },
  { value: "5+", label: "Networks & Integrations" },
];

const STATUS_CONFIG = {
  live: {
    dot: "bg-[#00E599]",
    badge: "bg-[#00E599]/10 text-[#00864a] border-[#00E599]/20",
    label: "Live",
  },
  building: {
    dot: "bg-blue-400 animate-pulse",
    badge: "bg-blue-50 text-blue-600 border-blue-100",
    label: "Building",
  },
  soon: {
    dot: "bg-gray-300",
    badge: "bg-gray-50 text-gray-500 border-gray-200",
    label: "Soon",
  },
};

export default function DeveloperTools() {
  return (
    <section id="ecosystem" className="py-16 sm:py-28 bg-transparent relative overflow-hidden">

      {/* Subtle background grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#000 1px,transparent 1px),linear-gradient(to bottom,#000 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ─────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-mono font-bold tracking-widest text-gray-400 uppercase mb-5 px-4 py-2 bg-gray-100 rounded-full">
              Ecosystem
            </span>
            <h2 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[0.93] mb-6">
              Everything<br />
              <span className="text-[#00E599]">Built &amp; Live.</span>
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed max-w-lg">
              From protocol to wallets, explorer to SDK — the entire quantum-resistant stack is production-ready and growing fast.
            </p>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 lg:max-w-sm xl:max-w-none shrink-0">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm text-center min-w-[110px]"
              >
                <div className="text-3xl font-extrabold text-gray-900 tracking-tight">{s.value}</div>
                <div className="text-xs text-gray-500 font-semibold mt-1 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PRODUCT GRID ─────────────────────────────────────────── */}
        <div className="space-y-12">
          {PRODUCTS.map((group) => (
            <div key={group.category}>
              {/* Category label */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-black uppercase tracking-widest text-gray-400">
                  {group.category}
                </span>
                <div className="flex-1 h-px bg-gray-100" />
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const statusConf = STATUS_CONFIG[item.status];

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="group relative flex flex-col bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#00E599]/30 transition-all duration-300 overflow-hidden"
                    >
                      {/* Hover glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00E599]/0 to-[#00E599]/0 group-hover:from-[#00E599]/5 group-hover:to-transparent transition-all duration-500 rounded-2xl pointer-events-none" />

                      {/* Top row */}
                      <div className="flex items-start justify-between mb-5">
                        <div className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-300">
                          <Icon className="w-5 h-5 text-gray-600 group-hover:text-[#00E599] transition-colors duration-300" />
                        </div>
                        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-black uppercase tracking-wider ${statusConf.badge}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${statusConf.dot}`} />
                          {statusConf.label}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                          {"meta" in item && item.meta && (
                            <span className="text-[10px] font-mono font-semibold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                              {item.meta}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed font-medium">
                          {item.description}
                        </p>
                      </div>

                      {/* Bottom link */}
                      <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-gray-400 group-hover:text-[#00E599] transition-colors">
                        {item.external ? "Open" : "Explore"}
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* ── BOTTOM CTA ─────────────────────────────────────────── */}
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-gray-100 pt-10">
          <div>
            <p className="text-sm font-bold text-gray-900">Want to build on Quanta?</p>
            <p className="text-sm text-gray-500 font-medium mt-0.5">
              Docs, SDK, and WASM are ready. Start in minutes.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href="https://quantachain.gitbook.io/quantachain-docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-bold rounded-xl hover:bg-[#00E599] hover:text-black transition-all"
            >
              Read the Docs <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://github.com/quantachain"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-black text-sm font-bold rounded-xl hover:border-black transition-all"
            >
              GitHub
              <MessageSquare className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
