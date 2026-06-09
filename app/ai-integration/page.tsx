import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cpu, ShieldCheck, Database, Zap, Code2, Link as LinkIcon, ArrowRight, Network, Briefcase } from "lucide-react";
import Link from "next/link";
import InteractiveUseCases from "@/components/InteractiveUseCases";

export const metadata: Metadata = {
  title: "AI Integration Hub | Quantachain",
  description: "Learn how autonomous AI agents use Quantachain as their execution layer for sovereign identities, memory, and payments.",
};

export default function AiIntegrationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white selection:bg-[#C4ED5F] selection:text-black">
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white" />
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-6 leading-tight" style={{ fontFamily: "var(--font-syne)" }}>
              Sovereignty for <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-black">Autonomous Agents</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-10 leading-relaxed">
              Equip your AI agents with post-quantum wallets, unalterable on-chain memory, and the ability to autonomously execute M2M micro-transactions and native smart contracts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://github.com/quantachain/quanta-sdk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[#C4ED5F] text-black font-bold text-lg hover:bg-[#b0d655] transition-colors shadow-lg shadow-[#C4ED5F]/20">
                <Code2 className="w-5 h-5" /> View JS/TS SDK
              </Link>
              <Link href="https://quantachain.gitbook.io/quantachain-docs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gray-50 text-black border border-gray-200 font-bold text-lg hover:bg-gray-100 transition-colors">
                Read the Docs
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-[#C4ED5F]/20 rounded-2xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-7 h-7 text-[#7bb800]" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3" style={{ fontFamily: "var(--font-syne)" }}>Autonomous Post-Quantum Keys</h3>
                <p className="text-gray-500 leading-relaxed">
                  Agents generate their own <strong>Falcon-512</strong> wallets directly in-memory via the <code className="text-[#7bb800] bg-[#C4ED5F]/10 px-1.5 py-0.5 rounded text-sm">quanta-wasm</code> engine. No centralized KMS or human intervention required.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-[#C4ED5F]/20 rounded-2xl flex items-center justify-center mb-6">
                  <Briefcase className="w-7 h-7 text-[#7bb800]" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3" style={{ fontFamily: "var(--font-syne)" }}>Native Agent Job Contracts</h3>
                <p className="text-gray-500 leading-relaxed">
                  Utilize highly-audited <code className="text-[#7bb800] bg-[#C4ED5F]/10 px-1.5 py-0.5 rounded text-sm">TEMPLATE_AGENT_JOB</code> and <code className="text-[#7bb800] bg-[#C4ED5F]/10 px-1.5 py-0.5 rounded text-sm">TEMPLATE_ESCROW</code> contracts for trustless execution and verifiable payments between employers and AI workers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-[#C4ED5F]/20 rounded-2xl flex items-center justify-center mb-6">
                  <Database className="w-7 h-7 text-[#7bb800]" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3" style={{ fontFamily: "var(--font-syne)" }}>On-Chain Immutable Memory</h3>
                <p className="text-gray-500 leading-relaxed">
                  Commit inference outputs, training checkpoints, and decision logs to the ledger using custom transaction <code className="text-[#7bb800] bg-[#C4ED5F]/10 px-1.5 py-0.5 rounded text-sm">payload</code> byte arrays.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-[#C4ED5F]/20 rounded-2xl flex items-center justify-center mb-6">
                  <Network className="w-7 h-7 text-[#7bb800]" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3" style={{ fontFamily: "var(--font-syne)" }}>M2M Micro-Transactions</h3>
                <p className="text-gray-500 leading-relaxed">
                  Leverage Quanta's AlephBFT consensus to execute high-throughput Machine-to-Machine settlements and DePIN network negotiations with rapid 6-second finality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Code Example Section */}
        <InteractiveUseCases />


        {/* CTA Section */}
        <section className="py-24 px-4 bg-black text-white border-t border-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-syne)" }}>Ready to build autonomous agents?</h2>
            <p className="text-xl text-gray-400 mb-10">Join the active developer community shaping the execution layer of the AI-driven future.</p>
            <div className="flex justify-center gap-4">
              <Link href="https://github.com/quantachain/quanta-sdk" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-gray-100 transition-colors">
                Start Building
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
