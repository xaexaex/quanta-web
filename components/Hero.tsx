"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import QuantumParticles from "./QuantumParticles";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#FAFAF9] text-black overflow-hidden pt-24 pb-12">
      <div className="container mx-auto px-6 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 h-full items-center">

          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter leading-[0.9] mb-16">
              The Base Layer <br />
              <span className="text-[#00E599]">for Quantum Security</span>
            </h1>

            {/* Feature Rows */}
            <div className="w-full max-w-2xl mb-16 flex flex-col gap-8">
              {/* Row 1 */}
              <div className="flex flex-col gap-3 group">
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-2xl font-medium tracking-tight">NIST-Standardized PQC</span>
                  <ShieldCheck className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="w-full h-[1px] bg-black/10 relative"></div>
                <span className="font-mono text-xs text-gray-400 mt-1">01</span>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col gap-3 group">
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-2xl font-medium tracking-tight">Rust-Based Efficiency</span>
                  <Zap className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="w-full h-[1px] bg-black/10 relative"></div>
                <span className="font-mono text-xs text-gray-400 mt-1">02</span>
              </div>

              {/* Row 3 */}
              <div className="flex flex-col gap-3 group">
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-2xl font-medium tracking-tight">Real-time Finality (~10s)</span>
                  <CheckCircle2 className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="w-full h-[1px] bg-black/10 relative"></div>
                <span className="font-mono text-xs text-gray-400 mt-1">03</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-6">
              <Link
                href="/docs"
                className="flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-[#00E599] hover:text-black transition-all hover:scale-105 active:scale-95"
              >
                Start Node
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-500">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                Testnet coming soon
              </div>
            </div>

          </div>

          {/* Right Column: Visual Component */}
          <div className="lg:col-span-5 relative h-full min-h-[400px] flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <QuantumParticles />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
