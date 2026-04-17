"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Book, Code2, Rocket, Shield, Terminal, Zap, Copy, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Documentation() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("installation");

  const sections = [
    { id: "installation", label: "Installation", icon: Rocket },
    { id: "quickstart", label: "Quick Start", icon: Terminal },
    { id: "wallet-ops", label: "Wallet Operations", icon: Shield },
    { id: "api", label: "API Reference", icon: Code2 },
    { id: "rpc", label: "JSON-RPC", icon: Terminal },
    { id: "config", label: "Configuration", icon: Zap },
    { id: "p2p", label: "P2P Networking", icon: Terminal },
    { id: "specs", label: "Technical Specs", icon: Book },
    { id: "quantum", label: "Quantum Resistance", icon: Shield },
    { id: "security", label: "Security", icon: Shield },
    { id: "contributing", label: "Contributing", icon: Book },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CodeBlock = ({ code, id, language = "bash" }: { code: string; id: string; language?: string }) => (
    <div className="relative group">
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          borderRadius: '0.75rem',
          padding: '1rem',
          fontSize: '0.75rem',
        }}
        wrapLongLines={true}
        showLineNumbers={false}
      >
        {code}
      </SyntaxHighlighter>
      <button
        onClick={() => copyToClipboard(code, id)}
        className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all opacity-0 group-hover:opacity-100"
      >
        {copiedCode === id ? (
          <Check className="w-4 h-4 text-[#00E599]" />
        ) : (
          <Copy className="w-4 h-4 text-gray-400" />
        )}
      </button>
    </div>
  );

  return (
    <main className="min-h-screen bg-transparent text-black">
      <Navbar />

      <div className="pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block sticky top-24 h-[calc(100vh-6rem)] w-64 shrink-0 overflow-y-auto border-r border-gray-100">
              <div className="py-6 pr-6">
                <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Documentation</h2>
                <nav className="space-y-1">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all ${activeSection === section.id
                            ? 'bg-[#00E599] text-black font-semibold'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                          }`}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        <span className="text-sm">{section.label}</span>
                      </a>
                    );
                  })}
                </nav>

                {/* Quick Links */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Quick Links</h3>
                  <div className="space-y-2">
                    <a href="https://github.com/quantachain/quanta" target="_blank" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#00E599] transition-colors">
                      <span>GitHub Repository</span>
                      <span className="text-xs">↗</span>
                    </a>
                    <a href="https://discord.gg/7KmMBrrJEz" target="_blank" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#00E599] transition-colors">
                      <span>Discord Community</span>
                      <span className="text-xs">↗</span>
                    </a>
                    <Link href="/roadmap" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#00E599] transition-colors">
                      <span>Roadmap</span>
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 lg:ml-0 min-w-0">
              {/* Header Section */}
              <div className="mb-12 sm:mb-16">
                <div className="inline-block mb-4">
                  <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase px-4 py-2 bg-gray-100 rounded-full">
                    Documentation
                  </span>
                </div>
                <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight leading-[0.95]">
                  Docs<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E599] to-emerald-600">.</span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-light max-w-2xl">
                  Complete guide to QUANTA - quantum-resistant blockchain with <span className="text-black font-medium">NIST-standardized post-quantum cryptography and adaptive tokenomics.</span>
                </p>
              </div>

              {/* Content */}
              <div className="max-w-4xl space-y-16 sm:space-y-20 pb-16">


                {/* Installation */}
                <section id="installation" className="pt-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#00E599]/10 rounded-lg flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-[#00E599]" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Installation</h2>
                  </div>
                  <div className="space-y-4 sm:space-y-6 pl-0 sm:pl-13">
                    <p className="text-lg sm:text-xl text-gray-600">
                      Quanta requires Rust 1.70+ to build from source.
                    </p>
                    <div className="border-2 border-gray-100 p-6 sm:p-8 rounded-xl sm:rounded-2xl">
                      <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">System Requirements</h3>
                      <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                        <li>• Rust 2021 edition or higher</li>
                        <li>• 4GB RAM minimum (8GB recommended)</li>
                        <li>• 20GB disk space for blockchain data</li>
                        <li>• Linux, macOS, or Windows</li>
                      </ul>
                    </div>
                    <CodeBlock id="install" code={`# Clone the repository
git clone https://github.com/quantachain/quanta.git
cd quanta

# Build with release optimizations
cargo build --release

# Run tests
cargo test`} />
                  </div>
                </section>

                {/* Quick Start */}
                <section id="quickstart" className="pt-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#00E599]/10 rounded-lg flex items-center justify-center">
                      <Terminal className="w-6 h-6 text-[#00E599]" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Quick Start</h2>
                  </div>
                  <div className="space-y-4 sm:space-y-6 pl-0 sm:pl-13">
                    <div className="border-2 border-gray-100 p-6 sm:p-8 rounded-xl sm:rounded-2xl">
                      <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">1. Create a Wallet</h3>
                      <CodeBlock id="wallet" code={`./target/release/quanta new_wallet --file miner.qua
# Enter a strong password when prompted
# Wallet uses Falcon-512 quantum-resistant signatures`} />
                    </div>

                    <div className="border-2 border-gray-100 p-6 sm:p-8 rounded-xl sm:rounded-2xl">
                      <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">2. Start a Node</h3>
                      <CodeBlock id="start" code={`# Start node as daemon
./target/release/quanta start --detach --port 3000 --network-port 8333 --rpc-port 7782 --db ./node_data

# Check node status
./target/release/quanta status --rpc-port 7782`} />
                    </div>

                    <div className="border-2 border-gray-100 p-6 sm:p-8 rounded-xl sm:rounded-2xl">
                      <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">3. Start Mining</h3>
                      <CodeBlock id="mine" code={`# Start mining via RPC
./target/release/quanta start_mining YOUR_ADDRESS --rpc-port 7782

# Check mining status
./target/release/quanta mining_status --rpc-port 7782

# Stop mining
./target/release/quanta stop_mining --rpc-port 7782`} />
                    </div>
                  </div>
                </section>

                {/* Wallet Operations */}
                <section id="wallet-ops" className="pt-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#00E599]/10 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-[#00E599]" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Wallet Operations</h2>
                  </div>
                  <div className="space-y-4 sm:space-y-6 pl-0 sm:pl-13">
                    <div className="border-2 border-gray-100 p-6 sm:p-8 rounded-xl sm:rounded-2xl">
                      <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">HD Wallets (BIP39)</h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Create HD wallets with 24-word mnemonic phrases:</p>
                      <CodeBlock id="hdwallet" code={`# Create HD wallet
./target/release/quanta new_hd_wallet --file hd.json

# View HD wallet info
./target/release/quanta hd_wallet --file hd.json

# Multiple accounts from one seed with deterministic derivation`} />
                    </div>

                    <div className="border-2 border-gray-100 p-6 sm:p-8 rounded-xl sm:rounded-2xl">
                      <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">Check Balance</h3>
                      <CodeBlock id="balance" code={`# CLI
./target/release/quanta wallet --file miner.qua

# API
curl -X POST http://localhost:3000/api/balance \\
  -H "Content-Type: application/json" \\
  -d '{"address": "YOUR_ADDRESS"}'`} />
                    </div>

                    <div className="border-2 border-gray-100 p-6 sm:p-8 rounded-xl sm:rounded-2xl">
                      <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">Send Transactions</h3>
                      <CodeBlock id="send" code={`./target/release/quanta send \\
  --wallet miner.qua \\
  --to RECIPIENT_ADDRESS \\
  --amount 10.5`} />
                    </div>
                  </div>
                </section>

                {/* API Reference */}
                <section id="api" className="pt-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#00E599]/10 rounded-lg flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-[#00E599]" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">API Reference</h2>
                  </div>
                  <div className="space-y-4 pl-0 sm:pl-13">
                    <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6">
                      Quanta provides a REST API on port 3000 (configurable).
                    </p>

                    <div className="border-2 border-gray-100 rounded-xl sm:rounded-2xl overflow-hidden">
                      <div className="bg-gray-50 text-black p-3 sm:p-4 font-mono text-xs sm:text-sm font-semibold overflow-x-auto">
                        GET /health
                      </div>
                      <div className="p-4 sm:p-6">
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Health check and node status</p>
                        <CodeBlock id="health" code={`curl http://localhost:3000/health`} />
                      </div>
                    </div>

                    <div className="border-2 border-gray-100 rounded-xl sm:rounded-2xl overflow-hidden">
                      <div className="bg-gray-50 text-black p-3 sm:p-4 font-mono text-xs sm:text-sm font-semibold overflow-x-auto">
                        GET /api/stats
                      </div>
                      <div className="p-4 sm:p-6">
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Get blockchain statistics</p>
                        <CodeBlock language="bash" id="stats" code={`curl http://localhost:3000/api/stats`} />
                        <p className="text-sm text-gray-500 mt-2 mb-2">Response:</p>
                        <CodeBlock language="json" id="stats-response" code={`{
  "chain_length": 142,
  "total_transactions": 89,
  "current_difficulty": 4,
  "mining_reward": 100000000,
  "total_supply": 14200000000,
  "pending_transactions": 3
}`} />
                      </div>
                    </div>

                    <div className="border-2 border-gray-100 rounded-2xl overflow-hidden">
                      <div className="bg-gray-50 text-black p-4 font-mono text-sm font-semibold">
                        POST /api/transaction
                      </div>
                      <div className="p-6">
                        <p className="text-gray-600 mb-4">Create and submit a transaction</p>
                        <CodeBlock language="bash" id="tx" code={`curl -X POST http://localhost:3000/api/transaction \\
  -H "Content-Type: application/json" \\
  -d '{
    "wallet_file": "miner.qua",
    "wallet_password": "YOUR_PASSWORD",
    "recipient": "RECIPIENT_ADDRESS",
    "amount_microunits": 10000000
  }'`} />
                      </div>
                    </div>

                    <div className="border-2 border-gray-100 rounded-2xl overflow-hidden">
                      <div className="bg-gray-50 text-black p-4 font-mono text-sm font-semibold">
                        POST /api/mine/start
                      </div>
                      <div className="p-6">
                        <p className="text-gray-600 mb-4">Start continuous mining</p>
                        <CodeBlock language="bash" id="mine-start" code={`curl -X POST http://localhost:3000/api/mine/start \\
  -H "Content-Type: application/json" \\
  -d '{"miner_address": "YOUR_ADDRESS"}'`} />
                      </div>
                    </div>

                    <div className="border-2 border-gray-100 rounded-2xl overflow-hidden">
                      <div className="bg-gray-50 text-black p-4 font-mono text-sm font-semibold">
                        POST /api/mine/stop
                      </div>
                      <div className="p-6">
                        <p className="text-gray-600">Stop continuous mining</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* JSON-RPC Daemon Control */}
                <section id="rpc" className="pt-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#00E599]/10 rounded-lg flex items-center justify-center">
                      <Terminal className="w-6 h-6 text-[#00E599]" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">JSON-RPC Daemon Control</h2>
                  </div>
                  <div className="space-y-6 pl-0 sm:pl-13">
                    <p className="text-xl text-gray-600 mb-6">
                      The RPC server (default port 7782) provides daemon control via JSON-RPC 2.0. All CLI commands communicate with the daemon through this interface.
                    </p>

                    <div className="bg-[#00E599]/10 border-2 border-[#00E599] p-8 rounded-2xl">
                      <h3 className="font-bold text-xl mb-4">Available RPC Methods</h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <code className="bg-black text-[#00E599] px-2 py-1 rounded">node_status</code>
                          <p className="text-gray-700 mt-1">Get node status and uptime</p>
                        </div>
                        <div>
                          <code className="bg-black text-[#00E599] px-2 py-1 rounded">mining_status</code>
                          <p className="text-gray-700 mt-1">Get mining state and statistics</p>
                        </div>
                        <div>
                          <code className="bg-black text-[#00E599] px-2 py-1 rounded">start_mining</code>
                          <p className="text-gray-700 mt-1">Start mining to address</p>
                        </div>
                        <div>
                          <code className="bg-black text-[#00E599] px-2 py-1 rounded">stop_mining</code>
                          <p className="text-gray-700 mt-1">Stop mining</p>
                        </div>
                        <div>
                          <code className="bg-black text-[#00E599] px-2 py-1 rounded">get_block</code>
                          <p className="text-gray-700 mt-1">Get block by height</p>
                        </div>
                        <div>
                          <code className="bg-black text-[#00E599] px-2 py-1 rounded">get_balance</code>
                          <p className="text-gray-700 mt-1">Get address balance</p>
                        </div>
                        <div>
                          <code className="bg-black text-[#00E599] px-2 py-1 rounded">get_peers</code>
                          <p className="text-gray-700 mt-1">List connected peers</p>
                        </div>
                        <div>
                          <code className="bg-black text-[#00E599] px-2 py-1 rounded">shutdown</code>
                          <p className="text-gray-700 mt-1">Gracefully stop daemon</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-2 border-gray-100 p-8 rounded-2xl">
                      <h3 className="font-bold text-xl mb-4">CLI Commands (via RPC)</h3>
                      <CodeBlock id="rpc-commands" code={`# Node management
./quanta status --rpc-port 7782
./quanta stop --rpc-port 7782
./quanta print_height --rpc-port 7782
./quanta peers --rpc-port 7782
./quanta get_block 100 --rpc-port 7782

# Mining control
./quanta mining_status --rpc-port 7782
./quanta start_mining YOUR_ADDRESS --rpc-port 7782
./quanta stop_mining --rpc-port 7782`} />
                    </div>
                  </div>
                </section>

                {/* Configuration */}
                <section id="config" className="pt-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#00E599]/10 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-[#00E599]" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Configuration</h2>
                  </div>
                  <div className="space-y-6 pl-0 sm:pl-13">
                    <p className="text-xl text-gray-600">
                      Create a <code className="bg-gray-100 px-2 py-1 rounded text-sm">quanta.toml</code> file for node configuration:
                    </p>
                    <CodeBlock language="toml" id="config-toml" code={`[node]
api_port = 3000
network_port = 8333
rpc_port = 7782
db_path = "./quanta_data"
no_network = false

[network]
max_peers = 125
bootstrap_nodes = []

[consensus]
max_block_transactions = 2000
max_block_size_bytes = 1_048_576
min_transaction_fee_microunits = 100
transaction_expiry_blocks = 8640
coinbase_maturity = 100

[security]
max_mempool_size = 5000
transaction_expiry_seconds = 86400
enable_rate_limiting = true
rate_limit_per_minute = 60
enable_peer_banning = true
require_tls = false

[mining]
year_1_reward_microunits = 100_000_000
annual_reduction_percent = 15
min_reward_microunits = 5_000_000
blocks_per_year = 3_153_600
early_adopter_bonus_blocks = 100_000
early_adopter_multiplier = 1.5
bootstrap_phase_blocks = 315_360
mining_reward_lock_percent = 50
mining_reward_lock_blocks = 157_680
fee_burn_percent = 70
fee_treasury_percent = 20
fee_validator_percent = 10
target_block_time = 10
difficulty_adjustment_interval = 10

[metrics]
enabled = true
port = 9090`} />
                  </div>
                </section>

                {/* P2P Networking */}
                <section id="p2p" className="pt-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#00E599]/10 rounded-lg flex items-center justify-center">
                      <Terminal className="w-6 h-6 text-[#00E599]" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">P2P Networking</h2>
                  </div>
                  <div className="space-y-6 pl-0 sm:pl-13">
                    <p className="text-xl text-gray-600 mb-4">
                      Connect multiple nodes to form a network:
                    </p>

                    <div className="border-2 border-gray-100 p-8 rounded-2xl">
                      <h3 className="font-bold text-xl mb-4">Node 1 (Bootstrap)</h3>
                      <CodeBlock id="node1" code={`./target/release/quanta start --detach \\
  --network-port 8333 \\
  --port 3000 \\
  --rpc-port 7782 \\
  --db ./node1_data`} />
                    </div>

                    <div className="border-2 border-gray-100 p-8 rounded-2xl">
                      <h3 className="font-bold text-xl mb-4">Node 2 (Connect to Bootstrap)</h3>
                      <CodeBlock id="node2" code={`./target/release/quanta start --detach \\
  --network-port 8334 \\
  --port 3001 \\
  --rpc-port 7783 \\
  --db ./node2_data \\
  --bootstrap 127.0.0.1:8333`} />
                    </div>

                    <div className="border-2 border-gray-100 p-8 rounded-2xl">
                      <h3 className="font-bold text-xl mb-4">Single Node Mode</h3>
                      <p className="text-gray-600 mb-4">Disable P2P for testing:</p>
                      <CodeBlock id="single" code={`./target/release/quanta start --no-network`} />
                    </div>
                  </div>
                </section>

                {/* Technical Specs */}
                <section id="specs" className="pt-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#00E599]/10 rounded-lg flex items-center justify-center">
                      <Book className="w-6 h-6 text-[#00E599]" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Technical Specifications</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-0 sm:pl-13">
                    <div className="border-2 border-gray-100 p-8 rounded-2xl">
                      <h3 className="font-bold text-xl mb-4 text-[#00E599]">Cryptography</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li><strong>Signatures:</strong> Falcon-512 (NIST Level 1, 897-byte pubkey)</li>
                        <li><strong>Encryption:</strong> Kyber-1024 (NIST Level 5, 256-bit quantum security)</li>
                        <li><strong>Hashing:</strong> SHA3-256 (Keccak, quantum-resistant)</li>
                        <li><strong>Key Derivation:</strong> Argon2id (memory-hard)</li>
                      </ul>
                    </div>

                    <div className="border-2 border-gray-100 p-8 rounded-2xl">
                      <h3 className="font-bold text-xl mb-4 text-[#00E599]">Consensus</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li><strong>Algorithm:</strong> Adaptive Proof of Work</li>
                        <li><strong>Block Time:</strong> 10 seconds</li>
                        <li><strong>Initial Reward:</strong> 100 QUA (15% annual reduction)</li>
                        <li><strong>Reward Floor:</strong> 5 QUA (perpetual incentive)</li>
                        <li><strong>Difficulty Adjustment:</strong> Every 10 blocks</li>
                      </ul>
                    </div>

                    <div className="border-2 border-gray-100 p-8 rounded-2xl">
                      <h3 className="font-bold text-xl mb-4 text-[#00E599]">Block Limits</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li><strong>Max Size:</strong> 1 MB (1,048,576 bytes)</li>
                        <li><strong>Max Transactions:</strong> 2,000 per block</li>
                        <li><strong>Min Fee:</strong> 100 microunits (0.0001 QUA)</li>
                        <li><strong>Transaction Expiry:</strong> 24 hours</li>
                      </ul>
                    </div>

                    <div className="border-2 border-gray-100 p-8 rounded-2xl">
                      <h3 className="font-bold text-xl mb-4 text-[#00E599]">Database</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li><strong>Storage:</strong> Sled (embedded)</li>
                        <li><strong>Model:</strong> Account-based (not UTXO)</li>
                        <li><strong>Precision:</strong> 6 decimals (microunits)</li>
                        <li><strong>Unit:</strong> 1 QUA = 1,000,000 microunits</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Quantum Resistance */}
                <section id="quantum" className="pt-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#00E599]/10 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-[#00E599]" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Quantum Resistance</h2>
                  </div>
                  <div className="space-y-6 pl-0 sm:pl-13">
                    <div className="border-2 border-gray-100 rounded-2xl p-6 sm:p-8 md:p-12">
                      <h3 className="text-3xl font-bold mb-6">Why Quantum-Resistant?</h3>
                      <p className="text-xl text-gray-600 mb-8">
                        Current blockchain systems rely on elliptic curve cryptography (ECDSA/EdDSA) vulnerable to Shor's algorithm. Conservative estimates suggest quantum computers capable of breaking these could exist within 10-15 years. QUANTA uses NIST-standardized post-quantum cryptography to provide security for decades.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gray-50 p-6 rounded-xl">
                          <h4 className="font-bold text-xl mb-4">Traditional (ECDSA)</h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>Public Key: 33 bytes</li>
                            <li>Signature: 65 bytes</li>
                            <li>Quantum Safe: NO</li>
                            <li>Shor's Algorithm: Vulnerable</li>
                          </ul>
                        </div>

                        <div className="bg-[#00E599]/10 p-6 rounded-xl border-2 border-[#00E599]">
                          <h4 className="font-bold text-xl mb-4 text-[#00E599]">QUANTA (Falcon-512)</h4>
                          <ul className="space-y-2 text-gray-900">
                            <li>Public Key: 897 bytes</li>
                            <li>Signature: ~666 bytes (variable)</li>
                            <li>Quantum Safe: YES (lattice-based)</li>
                            <li>NIST Standard: Level 1 (2024)</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h4 className="font-bold text-xl mb-4">Protected Against:</h4>
                        <ul className="grid md:grid-cols-2 gap-4 text-gray-600">
                          <li>Shor's Algorithm</li>
                          <li>Grover's Algorithm</li>
                          <li>Harvest Now, Decrypt Later</li>
                          <li>Future Quantum Attacks</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Security Best Practices */}
                <section id="security" className="pt-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#00E599]/10 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-[#00E599]" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Security Best Practices</h2>
                  </div>
                  <div className="space-y-6 pl-0 sm:pl-13">
                    <div className="bg-[#00E599]/10 border-2 border-[#00E599] p-8 rounded-2xl">
                      <h3 className="font-bold text-xl mb-4 text-[#00E599]">Important Notice</h3>
                      <ul className="space-y-2 text-gray-900">
                        <li>QUANTA is currently in testnet phase (Q1 2026)</li>
                        <li>Security audits scheduled before mainnet launch</li>
                        <li>Use strong passwords for wallet encryption</li>
                        <li>Store wallet backups and HD mnemonics securely offline</li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border-2 border-gray-100 p-8 rounded-2xl">
                        <h3 className="font-bold text-xl mb-4">Wallet Security</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>Use strong passwords (20+ characters)</li>
                          <li>Store backups offline</li>
                          <li>Never commit wallet files to version control</li>
                          <li>Write down mnemonic phrases (HD wallets)</li>
                        </ul>
                      </div>

                      <div className="border-2 border-gray-100 p-8 rounded-2xl">
                        <h3 className="font-bold text-xl mb-4">Node Security</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>API has no authentication - use firewall</li>
                          <li>Regular database backups</li>
                          <li>Keep software updated</li>
                          <li>Monitor system resources</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Contributing */}
                <section id="contributing" className="pt-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#00E599]/10 rounded-lg flex items-center justify-center">
                      <Book className="w-6 h-6 text-[#00E599]" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Contributing</h2>
                  </div>
                  <div className="pl-0 sm:pl-13">
                    <div className="bg-[#00E599]/10 border-2 border-[#00E599] rounded-2xl p-6 sm:p-8 md:p-12 text-center">
                      <h3 className="text-3xl font-bold text-black mb-6">
                        Help Build the Future
                      </h3>
                      <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                        Quanta is open source and actively seeking contributors. Whether you're interested in cryptography, blockchain, or Rust development, we'd love your help!
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                          href="https://github.com/quantachain/quanta"
                          target="_blank"
                          className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-black rounded-full hover:bg-gray-900 transition-all hover:scale-105"
                        >
                          View on GitHub
                        </a>
                        <a
                          href="https://github.com/quantachain/quanta/issues"
                          target="_blank"
                          className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black bg-white border-2 border-gray-200 rounded-full hover:bg-gray-50 transition-all hover:scale-105"
                        >
                          Report Issues
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
