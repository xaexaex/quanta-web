"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Book, Code2, Rocket, Shield, Terminal, Zap, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Documentation() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CodeBlock = ({ code, id }: { code: string; id: string }) => (
    <div className="relative group">
      <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
      <button
        onClick={() => copyToClipboard(code, id)}
        className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all opacity-0 group-hover:opacity-100"
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
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      
      <div className="pt-24 md:pt-40 pb-16 md:pb-32">
        {/* Header Section */}
        <div className="mb-8 md:mb-16 bg-black rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-20 mx-4 md:mx-8 relative overflow-hidden">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#00E599]/10 rounded-full blur-[120px]" />
          
          <div className="relative z-10">
            <Link href="/" className="inline-flex items-center text-sm md:text-base text-gray-400 hover:text-white mb-4 md:mb-8 transition-colors">
              Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-4 md:mb-6">
              Documentation<span className="text-gray-400">.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-3xl">
              Complete guide to Quanta - the quantum-resistant blockchain built with Rust, Falcon-512, and Kyber-1024.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl space-y-8 md:space-y-16">
          
          {/* Installation */}
          <section id="installation" className="scroll-mt-20 md:scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 flex items-center gap-2 md:gap-4">
              <Rocket className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#00E599]" />
              Installation
            </h2>
            <div className="space-y-4 md:space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-black">
                Quanta requires Rust 1.70+ to build from source.
              </p>
              <div className="bg-black p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl">
                <h3 className="font-bold text-lg sm:text-xl mb-3 md:mb-4 text-[#00E599]">System Requirements</h3>
                <ul className="space-y-2 text-white">
                  <li>Rust 1.70 or higher</li>
                  <li>4GB RAM minimum</li>
                  <li>10GB disk space</li>
                  <li>Linux, macOS, or Windows</li>
                </ul>
              </div>
              <CodeBlock id="install" code={`# Clone the repository
git clone https://github.com/xaexaex/quanta.git
cd quanta

# Build with release optimizations
cargo build --release

# Run tests
cargo test`} />
            </div>
          </section>

          {/* Quick Start */}
          <section id="quickstart" className="scroll-mt-20 md:scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 flex items-center gap-2 md:gap-4">
              <Terminal className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#00E599]" />
              Quick Start
            </h2>
            <div className="space-y-4 md:space-y-6">
              <div className="bg-[#00E599]/10 border-2 border-[#00E599] p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl">
                <h3 className="font-bold text-base sm:text-lg md:text-xl mb-3 md:mb-4">1. Create a Wallet</h3>
                <CodeBlock id="wallet" code={`./target/release/quanta new-wallet --file miner.qua
# Enter a strong password when prompted`} />
              </div>

              <div className="bg-white border-2 border-gray-200 p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl">
                <h3 className="font-bold text-base sm:text-lg md:text-xl mb-3 md:mb-4">2. Start a Node</h3>
                <CodeBlock id="start" code={`./target/release/quanta start --port 3000 --db ./node_data`} />
              </div>

              <div className="bg-white border-2 border-gray-200 p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl">
                <h3 className="font-bold text-base sm:text-lg md:text-xl mb-3 md:mb-4">3. Mine Blocks</h3>
                <CodeBlock id="mine" code={`# Mine a single block
./target/release/quanta mine --wallet miner.qua

# Or use the API for continuous mining
curl -X POST http://localhost:3000/api/mine/start \\
  -H "Content-Type: application/json" \\
  -d '{"miner_address": "YOUR_ADDRESS"}'`} />
              </div>
            </div>
          </section>

          {/* Wallet Operations */}
          <section id="wallet-ops" className="scroll-mt-20 md:scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 flex items-center gap-2 md:gap-4">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#00E599]" />
              Wallet Operations
            </h2>
            <div className="space-y-4 md:space-y-6">
              <div className="bg-white border-2 border-gray-200 p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl">
                <h3 className="font-bold text-base sm:text-lg md:text-xl mb-3 md:mb-4">HD Wallets (BIP39)</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 md:mb-4">Create HD wallets with 24-word mnemonic phrases:</p>
                <CodeBlock id="hdwallet" code={`# Create HD wallet with 3 accounts
./target/release/quanta new-hd-wallet --file hd.json --accounts 3

# View HD wallet info
./target/release/quanta hd-wallet --file hd.json`} />
              </div>

              <div className="bg-white border-2 border-gray-200 p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl">
                <h3 className="font-bold text-base sm:text-lg md:text-xl mb-3 md:mb-4">Check Balance</h3>
                <CodeBlock id="balance" code={`# CLI
./target/release/quanta wallet --file miner.qua

# API
curl -X POST http://localhost:3000/api/balance \\
  -H "Content-Type: application/json" \\
  -d '{"address": "YOUR_ADDRESS"}'`} />
              </div>

              <div className="bg-white border-4 border-black p-10 rounded-[2rem]">
                <h3 className="font-bold text-3xl mb-8 text-black">Send Transactions</h3>
                <CodeBlock id="send" code={`./target/release/quanta send \\
  --wallet miner.qua \\
  --to RECIPIENT_ADDRESS \\
  --amount 10.5`} />
              </div>
            </div>
          </section>

          {/* API Reference */}
          <section id="api" className="scroll-mt-20 md:scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 flex items-center gap-2 md:gap-4">
              <Code2 className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#00E599]" />
              API Reference
            </h2>
            <div className="space-y-3 md:space-y-4">
              <p className="text-base sm:text-lg md:text-xl text-black mb-4 md:mb-6">
                Quanta provides a REST API on port 3000 (configurable).
              </p>

              <div className="bg-white border-2 border-gray-200 rounded-xl md:rounded-2xl overflow-hidden">
                <div className="bg-black text-white p-3 sm:p-4 font-mono text-xs sm:text-sm">
                  GET /health
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <p className="text-sm sm:text-base text-gray-600 mb-3 md:mb-4">Health check and node status</p>
                  <CodeBlock id="health" code={`curl http://localhost:3000/health`} />
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden">
                <div className="bg-black text-white p-4 font-mono">
                  GET /api/stats
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Get blockchain statistics</p>
                  <CodeBlock id="stats" code={`curl http://localhost:3000/api/stats

# Response:
{
  "chain_length": 142,
  "total_transactions": 89,
  "current_difficulty": 4,
  "mining_reward": 50000000,
  "total_supply": 7100000000,
  "pending_transactions": 3
}`} />
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden">
                <div className="bg-black text-white p-4 font-mono">
                  POST /api/transaction
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Create and submit a transaction</p>
                  <CodeBlock id="tx" code={`curl -X POST http://localhost:3000/api/transaction \\
  -H "Content-Type: application/json" \\
  -d '{
    "wallet_file": "miner.qua",
    "wallet_password": "YOUR_PASSWORD",
    "recipient": "RECIPIENT_ADDRESS",
    "amount_microunits": 10000000
  }'`} />
                </div>
              </div>

              <div className="bg-white border-4 border-black rounded-[2rem] overflow-hidden">
                <div className="bg-black text-white p-8 font-mono text-2xl">
                  POST /api/mine/start
                </div>
                <div className="p-10">
                  <p className="text-black text-2xl mb-8">Start continuous mining</p>
                  <CodeBlock id="mine-start" code={`curl -X POST http://localhost:3000/api/mine/start \\
  -H "Content-Type: application/json" \\
  -d '{"miner_address": "YOUR_ADDRESS"}'`} />
                </div>
              </div>

              <div className="bg-white border-4 border-black rounded-[2rem] overflow-hidden">
                <div className="bg-black text-white p-8 font-mono text-2xl">
                  POST /api/mine/stop
                </div>
                <div className="p-10">
                  <p className="text-black text-2xl">Stop continuous mining</p>
                </div>
              </div>
            </div>
          </section>

          {/* Configuration */}
          <section id="config" className="scroll-mt-20 md:scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 flex items-center gap-2 md:gap-4">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#00E599]" />
              Configuration
            </h2>
            <div className="space-y-4 md:space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-black">
                Create a <code className="bg-gray-100 px-2 py-1 rounded text-sm">quanta.toml</code> file for node configuration:
              </p>
              <CodeBlock id="config-toml" code={`[node]
api_port = 3000
network_port = 8333
db_path = "./quanta_data"
no_network = false

[network]
max_peers = 125
bootstrap_nodes = ["127.0.0.1:8333"]

[consensus]
max_block_transactions = 2000
max_block_size_bytes = 1048576
min_transaction_fee_microunits = 100
transaction_expiry_blocks = 8640
coinbase_maturity = 100

[security]
max_mempool_size = 5000

[mining]
initial_reward_microunits = 50000000
halving_interval = 210
target_block_time = 10
difficulty_adjustment_interval = 10

[metrics]
enabled = true
port = 9090`} />
            </div>
          </section>

          {/* P2P Networking */}
          <section id="p2p" className="scroll-mt-20 md:scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 flex items-center gap-2 md:gap-4">
              <Terminal className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#00E599]" />
              P2P Networking
            </h2>
            <div className="space-y-4 md:space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-black mb-3 md:mb-4">
                Connect multiple nodes to form a network:
              </p>
              
              <div className="bg-white border-2 border-gray-200 p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl">
                <h3 className="font-bold text-base sm:text-lg md:text-xl mb-3 md:mb-4">Node 1 (Bootstrap)</h3>
                <CodeBlock id="node1" code={`./target/release/quanta start \\
  --network-port 8333 \\
  --port 3000 \\
  --db ./node1`} />
              </div>

              <div className="bg-white border-4 border-black p-10 rounded-[2rem]">
                <h3 className="font-bold text-3xl mb-8 text-black">Node 2 (Connect to Bootstrap)</h3>
                <CodeBlock id="node2" code={`./target/release/quanta start \\
  --network-port 8334 \\
  --port 3001 \\
  --db ./node2 \\
  --bootstrap 127.0.0.1:8333`} />
              </div>

              <div className="bg-[#00E599] p-10 rounded-[2rem]">
                <h3 className="font-bold text-3xl mb-6 text-black">Single Node Mode</h3>
                <p className="text-black text-2xl mb-8">Disable P2P for testing:</p>
                <CodeBlock id="single" code={`./target/release/quanta start --no-network`} />
              </div>
            </div>
          </section>

          {/* Technical Specs */}
          <section id="specs" className="scroll-mt-20 md:scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 flex items-center gap-2 md:gap-4">
              <Book className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#00E599]" />
              Technical Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-black p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl">
                <h3 className="font-bold text-base sm:text-lg md:text-xl mb-3 md:mb-4 text-[#00E599]">Cryptography</h3>
                <ul className="space-y-2 text-white text-sm sm:text-base">
                  <li><strong>Signatures:</strong> Falcon-512 (NIST PQC)</li>
                  <li><strong>Encryption:</strong> Kyber-1024 + ChaCha20-Poly1305</li>
                  <li><strong>Hashing:</strong> SHA3-256 (Double)</li>
                  <li><strong>Key Derivation:</strong> Argon2</li>
                </ul>
              </div>

              <div className="bg-black p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-4 text-[#00E599]">Consensus</h3>
                <ul className="space-y-2 text-white">
                  <li><strong>Algorithm:</strong> Proof of Work</li>
                  <li><strong>Block Time:</strong> ~10 seconds</li>
                  <li><strong>Initial Reward:</strong> 50 QUA</li>
                  <li><strong>Halving:</strong> Every 210 blocks</li>
                  <li><strong>Difficulty Adjustment:</strong> Every 10 blocks</li>
                </ul>
              </div>

              <div className="bg-black p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-4 text-[#00E599]">Block Limits</h3>
                <ul className="space-y-2 text-white">
                  <li><strong>Max Size:</strong> 1 MB</li>
                  <li><strong>Max Transactions:</strong> 2,000 per block</li>
                  <li><strong>Min Fee:</strong> 0.0001 QUA</li>
                  <li><strong>Coinbase Maturity:</strong> 100 blocks</li>
                </ul>
              </div>

              <div className="bg-black p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-4 text-[#00E599]">Database</h3>
                <ul className="space-y-2 text-white">
                  <li><strong>Storage:</strong> Sled (embedded)</li>
                  <li><strong>Model:</strong> Account-based (not UTXO)</li>
                  <li><strong>Precision:</strong> 6 decimals (microunits)</li>
                  <li><strong>Unit:</strong> 1 QUA = 1,000,000 microunits</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Quantum Resistance */}
          <section id="quantum" className="scroll-mt-20 md:scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 flex items-center gap-2 md:gap-4">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#00E599]" />
              Quantum Resistance
            </h2>
            <div className="bg-black text-white rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12">
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">Why Quantum-Resistant?</h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
                Traditional blockchains like Bitcoin use ECDSA signatures, which are vulnerable to quantum computers using Shor's algorithm. Quanta uses NIST-standardized post-quantum cryptography.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="bg-white/10 p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl">
                  <h4 className="font-bold text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-[#00E599]">Traditional (ECDSA)</h4>
                  <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                    <li>Public Key: 33 bytes</li>
                    <li>Signature: 65 bytes</li>
                    <li>Quantum Safe: NO</li>
                    <li>Shor's Algorithm: Vulnerable</li>
                  </ul>
                </div>

                <div className="bg-[#00E599]/20 p-6 rounded-xl border-2 border-[#00E599]">
                  <h4 className="font-bold text-2xl mb-4 text-[#00E599]">Quanta (Falcon-512)</h4>
                  <ul className="space-y-2">
                    <li>Public Key: 897 bytes</li>
                    <li>Signature: 666 bytes</li>
                    <li>Quantum Safe: YES</li>
                    <li>NIST Standard: PQC Round 3</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-xl">
                <h4 className="font-bold text-xl mb-4">Protected Against:</h4>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
                  <li>Shor's Algorithm</li>
                  <li>Grover's Algorithm</li>
                  <li>Harvest Now, Decrypt Later</li>
                  <li>Future Quantum Attacks</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Security Best Practices */}
          <section id="security" className="scroll-mt-20 md:scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 flex items-center gap-2 md:gap-4">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#00E599]" />
              Security Best Practices
            </h2>
            <div className="space-y-4 md:space-y-6">
              <div className="bg-black border-2 border-[#00E599] p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl">
                <h3 className="font-bold text-base sm:text-lg md:text-xl mb-3 md:mb-4 text-[#00E599]">Important Warnings</h3>
                <ul className="space-y-2 text-white text-sm sm:text-base">
                  <li>Quanta is for research/educational purposes</li>
                  <li>NOT audited for production use</li>
                  <li>Do not use for real financial transactions</li>
                  <li>Demo passwords are PUBLIC and INSECURE</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white border-2 border-gray-200 p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl">
                  <h3 className="font-bold text-base sm:text-lg md:text-xl mb-3 md:mb-4">Wallet Security</h3>
                  <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                    <li>Use strong passwords (20+ characters)</li>
                    <li>Store backups offline</li>
                    <li>Never commit wallet files to version control</li>
                    <li>Write down mnemonic phrases (HD wallets)</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-gray-200 p-6 rounded-2xl">
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
          <section id="contributing" className="scroll-mt-20 md:scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Contributing</h2>
            <div className="bg-[#00E599] rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 text-center">
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-black mb-4 md:mb-6">
                Help Build the Future
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-black/80 mb-6 md:mb-8 max-w-2xl mx-auto">
                Quanta is open source and actively seeking contributors. Whether you're interested in cryptography, blockchain, or Rust development, we'd love your help!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a 
                  href="https://github.com/xaexaex/quanta"
                  target="_blank"
                  className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-bold text-[#00E599] bg-black rounded-full hover:bg-gray-900 transition-all hover:scale-105"
                >
                  View on GitHub
                </a>
                <a 
                  href="https://github.com/xaexaex/quanta/issues"
                  target="_blank"
                  className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-bold text-black bg-white rounded-full hover:bg-gray-100 transition-all hover:scale-105"
                >
                  Report Issues
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
