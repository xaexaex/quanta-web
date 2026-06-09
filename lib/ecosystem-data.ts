export type EcosystemCategory = "Wallet" | "AI Agent" | "Infrastructure" | "DeFi" | "Tooling" | "Core Library";

export interface EcosystemProject {
  slug: string;
  name: string;
  category: EcosystemCategory;
  description: string;
  githubUrl?: string;
  websiteUrl?: string;
  logo: string;
  status: "Live" | "Testnet" | "Building";
  features: string[];
}

export const ecosystemData: EcosystemProject[] = [
  {
    slug: "quanta-wallet",
    name: "Quanta Wallet",
    category: "Wallet",
    description: "The official Chrome extension wallet allowing dApps and AI agents to securely request transaction signatures from users directly in the browser.",
    githubUrl: "https://github.com/quantachain/quanta-wallet",
    logo: "/logo/quanta-transparent-bg-logo.svg",
    status: "Live",
    features: ["Browser Injection", "DApp Connection", "Post-Quantum Secure"],
  },
  {
    slug: "quanta-wallet-mobile",
    name: "Quanta Mobile Wallet",
    category: "Wallet",
    description: "The official native mobile wallet for Quantachain. Secured by Falcon-512 Post-Quantum signatures.",
    githubUrl: "https://github.com/quantachain/quanta-wallet-mobile",
    logo: "/logo/quanta-transparent-bg-logo.svg",
    status: "Building",
    features: ["Falcon-512 Signatures", "Biometric Authentication", "Testnet Faucet Integration"],
  },
  {
    slug: "quanta-mobile-core",
    name: "Quanta Mobile Core",
    category: "Core Library",
    description: "The core cryptographic and network libraries powering the Quanta mobile applications.",
    githubUrl: "https://github.com/quantachain/quanta-mobile-core",
    logo: "/logo/quanta-transparent-bg-logo.svg",
    status: "Live",
    features: ["Native Rust Bindings", "JNI Integration", "Mobile Optimized"],
  },
  {
    slug: "quanta-wasm",
    name: "Quanta WASM Engine",
    category: "Core Library",
    description: "WebAssembly compiled bindings for Falcon-512. Enables browser-based applications to securely generate and sign transactions without relying on external native binaries.",
    githubUrl: "https://github.com/quantachain/quanta-wasm",
    logo: "/logo/quanta-transparent-bg-logo.svg",
    status: "Live",
    features: ["WASM Post-Quantum Crypto", "High Performance", "Isomorphic JS Support"],
  },
  {
    slug: "quanta-sdk",
    name: "Quanta JS/TS SDK",
    category: "Tooling",
    description: "The official JavaScript SDK for interacting with Quantachain. Generate Falcon-512 keys, construct transactions, and query the network.",
    githubUrl: "https://github.com/quantachain/quanta-sdk",
    websiteUrl: "https://www.npmjs.com/package/quanta-sdk",
    logo: "/logo/quanta-transparent-bg-logo.svg",
    status: "Live",
    features: ["TypeScript Support", "Network Provider", "Transaction Builder"],
  },
  {
    slug: "quanta-indexer",
    name: "Quanta Indexer",
    category: "Infrastructure",
    description: "A high-performance Rust-based indexer that ingests blocks from the Quanta network and serves them via GraphQL for rapid frontend queries.",
    githubUrl: "https://github.com/quantachain/quanta-indexer",
    logo: "/logo/quanta-transparent-bg-logo.svg",
    status: "Live",
    features: ["PostgreSQL Backend", "GraphQL API", "Sub-second indexing"],
  },
  {
    slug: "quascan",
    name: "QuaScan Explorer",
    category: "Infrastructure",
    description: "The official block explorer for Quantachain. Real-time visualization of blocks, transactions, and validator node health.",
    websiteUrl: "https://quascan.xyz",
    logo: "/logo/quanta-transparent-bg-logo.svg",
    status: "Live",
    features: ["Live Mempool View", "Validator Leaderboard", "Address History"],
  }
];

export function getProjectBySlug(slug: string): EcosystemProject | undefined {
  return ecosystemData.find((p) => p.slug === slug);
}
