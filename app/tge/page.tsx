"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, Terminal, Users, Cpu } from "lucide-react";

export default function TGEPage() {
  const [formData, setFormData] = useState({
    email: "",
    walletAddress: "",
    role: "Validator",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setMessage("");

    try {
      const res = await fetch("/api/tge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to register");
      }

      setStatus("success");
      setMessage("You're on the list! We'll contact you with next steps.");
      setFormData({ email: "", walletAddress: "", role: "Validator" });
    } catch (err: any) {
      setStatus("error");
      setMessage(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-4 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-6" style={{ fontFamily: "var(--font-syne)" }}>
              Join the Quanta <br className="hidden sm:block" />
              <span className="text-black">Execution Layer</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Earn QUA points by contributing to the testnet. Run a node, deploy an AI agent, and secure the first quantum-resistant decentralized infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Value Props */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: "var(--font-syne)" }}>
                  How to earn allocation
                </h3>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 shadow-sm">
                  <Terminal className="w-6 h-6 text-gray-800" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-black mb-1">Run a Validator Node</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Maintain uptime, propose blocks, and secure the BFT consensus network. Highest reward tier.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 shadow-sm">
                  <Cpu className="w-6 h-6 text-gray-800" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-black mb-1">AI Execution Tasks</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Use micro-QUA to execute autonomous AI agents and stress-test the high-throughput network.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 shadow-sm">
                  <Users className="w-6 h-6 text-gray-800" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-black mb-1">Community & Bug Bounties</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Find vulnerabilities, write documentation, and help us decentralize.</p>
                </div>
              </div>
            </div>

            {/* Signup Form */}
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-xl shadow-gray-200/50">
              <h3 className="text-2xl font-bold text-black mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                Early Access Registration
              </h3>
              <p className="text-gray-500 text-sm mb-6">Spots for Testnet V3 validators are limited.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C4ED5F] focus:border-transparent transition-all bg-white text-black"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Quanta Wallet Address <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <input
                    type="text"
                    value={formData.walletAddress}
                    onChange={(e) => setFormData({ ...formData, walletAddress: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C4ED5F] focus:border-transparent transition-all bg-white text-black font-mono text-sm"
                    placeholder="0x..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Primary Interest</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C4ED5F] focus:border-transparent transition-all bg-white text-black appearance-none"
                  >
                    <option>Validator Node Operator</option>
                    <option>AI Agent Developer</option>
                    <option>RPC/Full Node Operator</option>
                    <option>General Community</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-900 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    "Registering..."
                  ) : (
                    <>
                      Register for Testnet <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="mt-4 p-4 bg-green-50 text-green-800 rounded-xl border border-green-200 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium">{message}</p>
                  </div>
                )}

                {status === "error" && (
                  <div className="mt-4 p-4 bg-red-50 text-red-800 rounded-xl border border-red-200">
                    <p className="text-sm font-medium">{message}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
