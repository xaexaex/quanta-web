"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import QuantumParticles from "./QuantumParticles";
import { useState } from "react";

export default function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      id: "01",
      title: "NIST-Standardized PQC",
      icon: ShieldCheck,
      description: "Implementing Falcon-512 signatures and Kyber-1024 encapsulation for long-term quantum resistance, securing your assets against future threats.",
      stat: "Level 5 Security"
    },
    {
      id: "02",
      title: "Rust-Based Efficiency",
      icon: Zap,
      description: "Built on a high-performance Rust codebase, ensuring memory safety, parallel execution, and lightning-fast transaction throughput.",
      stat: "100k+ TPS"
    },
    {
      id: "03",
      title: "Real-time Finality (~10s)",
      icon: CheckCircle2,
      description: "Deterministic finality with adaptive block times, eliminating reversion risks for critical financial operations and dApps.",
      stat: "99.9% Uptime"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-transparent text-black overflow-hidden pt-24 pb-12">
      <div className="container mx-auto px-6 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 h-full items-center">

          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center relative z-20 pt-10 lg:pt-0">

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] mb-10 sm:mb-16">
              The Base Layer <br />
              <span className="text-[#00E599]">for Quantum Security</span>
            </h1>

            {/* Feature Rows */}
            <div className="w-full max-w-2xl mb-10 sm:mb-16 flex flex-col gap-6 sm:gap-8 relative">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className="flex flex-col gap-3 group cursor-pointer relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex items-center justify-between z-10 transition-transform duration-300 group-hover:translate-x-2">
                    <span className={`text-xl sm:text-2xl font-medium tracking-tight transition-colors duration-300 ${hoveredIndex === index ? 'text-[#00E599]' : ''}`}>
                      {feature.title}
                    </span>
                    {/* <feature.icon className={`w-5 h-5 transition-all duration-300 ${hoveredIndex === index ? 'text-[#00E599] opacity-100 scale-110' : 'text-gray-400 opacity-0 group-hover:opacity-50'}`} /> */}
                  </div>

                  {/* Mobile: Inline Description */}
                  <div className="lg:hidden text-sm text-gray-500 leading-relaxed pr-4">
                    {feature.description}
                  </div>

                  <div className="w-full h-[1px] bg-black/10 relative group-hover:bg-black/20 transition-colors"></div>
                  <span className="font-mono text-xs text-gray-400 mt-1">{feature.id}</span>

                  {/* Desktop: Interactive Hover Card */}
                  <div className={`hidden lg:block absolute top-full left-1/2 -translate-x-1/2 sm:left-[60%] sm:translate-x-0 sm:-top-4 w-[300px] bg-white/60 backdrop-blur-xl text-black p-6 rounded-2xl shadow-2xl transition-all duration-300 pointer-events-none z-50 border border-white/40 ${hoveredIndex === index ? 'opacity-100 translate-x-4 sm:translate-x-8 scale-100' : 'opacity-0 translate-x-0 scale-95'}`}>
                    {/* Decorative Arrow */}
                    <div className="absolute top-8 -left-2 w-4 h-4 bg-white/60 rotate-45 border-l border-b border-white/40 backdrop-blur-xl"></div>

                    <div className="flex items-start justify-between mb-4">
                      {/* <feature.icon className="w-8 h-8 text-[#00E599]" /> */}
                      <span className="text-[10px] font-mono text-gray-500 border border-black/5 px-2 py-1 rounded-full bg-white/50">{feature.stat}</span>
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-black">{feature.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link
                href="/docs"
                className="flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-[#00E599] hover:text-black transition-all hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
              >
                Start Node
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center gap-2 text-sm font-medium text-gray-500 bg-gray-50 sm:bg-transparent px-4 py-2 sm:p-0 rounded-full sm:rounded-none">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                Testnet coming soon
              </div>
            </div>

          </div>

          {/* Right Column: Visual Component */}
          <div className="hidden lg:flex lg:col-span-5 relative h-full min-h-[400px] items-center justify-end z-10 pointer-events-none">
            <div className="w-full max-w-lg pointer-events-auto">
              <QuantumParticles />
            </div>
          </div>

        </div>
      </div>

      {/* Floating Status Pill (Centered Bottom - like ref) */}
      <Link
        href="https://github.com/quantachain/quanta"
        target="_blank"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-3 px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm z-20 hover:scale-105 hover:shadow-md transition-all duration-300"
      >
        <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
        <span className="text-sm font-mono text-gray-600">Testnet Coming Soon</span>
        <ArrowUpRight className="w-3 h-3 text-gray-400" />
      </Link>

    </section>
  );
}
