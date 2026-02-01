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
      title: "NIST-Grade PQC",
      icon: ShieldCheck,
      description: "Native implementation of Falcon-512 & Kyber-1024. The only blockchain securing digital assets against the immediate threat of quantum computing.",
      stat: "Falcon + Kyber"
    },
    {
      id: "02",
      title: "Rust-Native PoW",
      icon: Zap,
      description: "Built entirely in Rust for maximum memory safety and parallelism. A modernized Proof-of-Work consensus that delivers uncompromised security.",
      stat: "Memory Safe"
    },
    {
      id: "03",
      title: "10s Block Time",
      icon: CheckCircle2,
      description: "Rapid block generation with deterministic finality. Optimized for high-frequency trading and real-time decentralized applications.",
      stat: "10s Finality"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-transparent text-black overflow-hidden pt-24 md:pt-20 pb-6 md:pb-12">
      <div className="container mx-auto px-6 h-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 h-full items-center">

          {/* Left Column: Content */}
          <div className="md:col-span-7 flex flex-col justify-center relative z-20 pt-8 md:pt-0">

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tighter leading-[0.9] mb-6 md:mb-6">
              The Quantum Proof <br />
              <span className="text-[#00E599]">Blockchain.</span>
            </h1>

            {/* Feature Rows */}
            <div className="w-full max-w-2xl mb-6 md:mb-6 flex flex-col gap-4 md:gap-4 relative">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className="flex flex-col gap-2 group cursor-pointer relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex items-center justify-between z-10 transition-transform duration-300 group-hover:translate-x-2">
                    <span className={`text-lg sm:text-xl md:text-lg font-medium tracking-tight transition-colors duration-300 ${hoveredIndex === index ? 'text-[#00E599]' : ''}`}>
                      {feature.title}
                    </span>
                    {/* <feature.icon className={`w-5 h-5 transition-all duration-300 ${hoveredIndex === index ? 'text-[#00E599] opacity-100 scale-110' : 'text-gray-400 opacity-0 group-hover:opacity-50'}`} /> */}
                  </div>

                  <div className="w-full h-[1px] bg-black/10 relative group-hover:bg-black/20 transition-colors"></div>
                  <span className="font-mono text-xs text-gray-400 mt-0.5">{feature.id}</span>

                  {/* Desktop: Interactive Hover Card */}
                  <div className={`hidden md:block absolute top-full left-1/2 -translate-x-1/2 sm:left-[60%] sm:translate-x-0 sm:-top-4 w-[300px] bg-white/60 backdrop-blur-xl text-black p-6 rounded-2xl shadow-2xl transition-all duration-300 pointer-events-none z-50 border border-white/40 ${hoveredIndex === index ? 'opacity-100 translate-x-4 sm:translate-x-8 scale-100' : 'opacity-0 translate-x-0 scale-95'}`}>
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
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5 mb-6 md:mb-0">
              <Link
                href="https://quantachain.gitbook.io/quantachain-docs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-[#00E599] hover:text-black transition-all hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
              >
                Start Node
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center gap-2 text-sm font-medium text-gray-500 bg-gray-50 sm:bg-transparent px-4 py-2 sm:p-0 rounded-full sm:rounded-none">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
                Alpha v0.1
              </div>
            </div>

          </div>

          {/* Right Column: Visual Component - Now visible on mobile too */}
          <div className="md:col-span-5 relative h-[350px] sm:h-[400px] md:h-full md:min-h-[450px] lg:min-h-[500px] flex items-center justify-center md:justify-end z-10">
            <div className="w-full h-full pointer-events-auto">
              <QuantumParticles />
            </div>
          </div>

        </div>
      </div>

      {/* Floating Status Pill (Centered Bottom - like ref) */}
      <Link
        href="https://github.com/quantachain/quanta"
        target="_blank"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-3 px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm z-20 hover:scale-105 hover:shadow-md transition-all duration-300"
      >
        <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
        <span className="text-sm font-mono text-gray-600">Testnet Coming Soon</span>
        <ArrowUpRight className="w-3 h-3 text-gray-400" />
      </Link>

    </section>
  );
}
