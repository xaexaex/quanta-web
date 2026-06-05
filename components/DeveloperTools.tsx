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
  LucideIcon,
} from "lucide-react";

type ProductItem = {
  name: string;
  description: string;
  href: string;
  external: boolean;
  icon: LucideIcon;
  status: "live" | "building";
  meta?: string;
};

type ProductGroup = {
  category: string;
  items: ProductItem[];
};

const PRODUCTS: ProductGroup[] = [
  {
    category: "Infrastructure",
    items: [
      {
        name: "Block Explorer",
        description: "Real-time blocks, transactions, addresses, and network analytics — powered by quantascan.",
        href: "https://quascan.xyz",
        external: true,
        icon: Search,
        status: "live" as const,
        meta: undefined,
      },
      {
        name: "Testnet Faucet",
        description: "Request free testnet QUA to fund your development workflow instantly.",
        href: "/faucet",
        external: false,
        icon: Droplet,
        status: "live" as const,
        meta: undefined,
      },
      {
        name: "Quantalabs",
        description: "The core engineering lab behind the Quanta protocol — R&D, audits, and institutional services.",
        href: "https://quantalabs.cc",
        external: true,
        icon: Briefcase,
        status: "live" as const,
        meta: undefined,
      },
      {
        name: "Validator Node",
        description: "High-performance AlephBFT consensus node. Institutional grade security for securing the Quanta network.",
        href: "https://github.com/quantachain/quanta",
        external: true,
        icon: Pickaxe,
        status: "live" as const,
        meta: "GitHub",
      },
      {
        name: "Data Indexer",
        description: "High-throughput Rust daemon for real-time indexing of Quanta blockchain data into MongoDB.",
        href: "https://github.com/quantachain/quanta-indexer",
        external: true,
        icon: Search,
        status: "live" as const,
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
        meta: undefined,
      },
      {
        name: "Mobile Wallet",
        description: "Native Android wallet with Rust cryptography compiled directly on-device. No compromise on security.",
        href: "https://github.com/quantachain/quanta-mobile-wallet",
        external: true,
        icon: Smartphone,
        status: "building" as const,
        meta: undefined,
      },
      {
        name: "Native Templates",
        description: "Write zero-gas smart contracts directly in Rust. Native execution speed without EVM overhead.",
        href: "https://quantachain.gitbook.io/quantachain-docs/templates",
        external: true,
        icon: Code2,
        status: "live" as const,
        meta: undefined,
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
        meta: "NPM",
      },
      {
        name: "quanta-wasm",
        description: "Falcon-512 cryptography compiled to WebAssembly. Native-speed PQC directly in the browser or Node.js.",
        href: "https://crates.io/crates/quanta-wasm",
        external: true,
        icon: Code2,
        status: "live" as const,
        meta: "NPM · Crates.io",
      },
      {
        name: "Documentation",
        description: "Full validator setup, Rust templates guide, REST API reference, and technical specifications.",
        href: "https://quantachain.gitbook.io/quantachain-docs",
        external: true,
        icon: BookOpen,
        status: "live" as const,
        meta: "GitBook",
      },
    ],
  },
];

const STATS = [
  { value: "9", label: "Live Products" },
  { value: "120+", label: "TPS" },
  { value: "9", label: "Repos on GitHub" },
  { value: "5+", label: "Networks & Integrations" },
];

const STATUS_CONFIG = {
  live: {
    dot: "bg-[#000000] animate-pulse-dot",
    badge: "bg-[#C4ED5F] text-[#000000] border-[#C4ED5F]",
    label: "Live",
  },
  building: {
    dot: "bg-[#4a4a4a] animate-pulse",
    badge: "bg-[rgba(0,0,0,0.04)] text-gray-600 border-[rgba(0,0,0,0.08)]",
    label: "Building",
  },
  soon: {
    dot: "bg-[#4a4a4a]",
    badge: "bg-[rgba(0,0,0,0.04)] text-gray-400 border-[rgba(0,0,0,0.06)]",
    label: "Soon",
  },
};

export default function DeveloperTools() {
  return (
    <section id="ecosystem" className="py-16 sm:py-28 bg-transparent relative overflow-hidden">

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#C4ED5F 1px,transparent 1px),linear-gradient(to bottom,#C4ED5F 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ─────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <span className="section-label">Ecosystem</span>
            <h2
              className="text-5xl sm:text-7xl font-bold tracking-tight leading-[0.93] mb-6 text-black"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Everything
              <br />
              <span className="text-[#C4ED5F]">Built &amp; Live.</span>
            </h2>
            <p className="text-gray-600 text-xl font-light leading-relaxed max-w-lg">
              From protocol to wallets, explorer to SDK — the entire quantum-resistant stack is
              production-ready and growing fast.
            </p>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 lg:max-w-sm xl:max-w-none shrink-0">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="card-dark px-5 py-4 text-center min-w-[110px] rounded-2xl"
              >
                <div
                  className="text-3xl font-extrabold text-black tracking-tight"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {s.value}
                </div>
                <div
                  className="text-[10px] text-gray-400 font-semibold mt-1 leading-tight uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PRODUCT GRID ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[rgba(0,0,0,0.06)] mb-20 bg-white">
          {PRODUCTS.flatMap(group => group.items).map((item) => {
            const Icon = item.icon;
            const statusConf = STATUS_CONFIG[item.status];

            return (
              <Link
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group relative flex flex-col border-r border-b border-[rgba(0,0,0,0.06)] aspect-square overflow-hidden hover:z-10 transition-all duration-500 bg-white"
              >
                {/* Default State (Centered Icon & Title) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-500 group-hover:-translate-y-8 group-hover:opacity-0 group-hover:blur-sm z-10 bg-white">
                  <div className="w-16 h-16 rounded-2xl bg-[rgba(196,237,95,0.1)] border border-[rgba(196,237,95,0.2)] flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3
                    className="text-xl font-bold text-black text-center transition-colors"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {item.name}
                  </h3>
                  <div className="mt-4 text-[9px] font-mono text-gray-400 uppercase tracking-widest">
                    {item.status === 'live' ? 'Hover to Explore' : 'Building'}
                  </div>
                </div>

                {/* Hover Reveal State (Dark futuristic overlay) */}
                <div className="absolute inset-0 bg-[#0a0a0a] text-white p-8 flex flex-col justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                  {/* Top Bar with Badges */}
                  <div className="flex items-start justify-between">
                    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[9px] font-black uppercase tracking-wider ${
                      item.status === 'live' 
                        ? 'bg-[#C4ED5F] text-black border-[#C4ED5F]' 
                        : 'bg-white/10 text-white border-white/20'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${item.status === 'live' ? 'bg-black animate-pulse-dot' : 'bg-gray-400'}`} />
                      {statusConf.label}
                    </div>
                    {item.meta && (
                      <span className="text-[9px] font-mono font-semibold text-gray-400 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded">
                        {item.meta}
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div>
                    <h3
                      className="text-2xl font-bold text-[#C4ED5F] mb-3"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Link */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#C4ED5F] uppercase tracking-wider">
                    {item.external ? "Open" : "Explore"}
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ── BOTTOM CTA ─────────────────────────────────────────── */}
        <div className="mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-[rgba(0,0,0,0.06)] pt-10">
          <div>
            <p
              className="text-base font-bold text-black"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Want to build on Quanta?
            </p>
            <p className="text-sm text-gray-600 font-light mt-1">
              Docs, SDK, and WASM are ready. Start in minutes.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href="https://quantachain.gitbook.io/quantachain-docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4ED5F] text-black text-sm font-bold rounded-xl hover:bg-[#C4ED5F] transition-all"
            >
              Read the Docs <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://github.com/quantachain"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[rgba(0,0,0,0.1)] text-black text-sm font-bold rounded-xl hover:border-[rgba(0,0,0,0.25)] transition-all"
            >
              GitHub <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
