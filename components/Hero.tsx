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
      title: "Parallel Execution",
      icon: Zap,
      description: "Rust-native implementation featuring parallel transaction verification, bincode serialization, and zstd block compression for massive scale.",
      stat: "120 TPS Throughput"
    },
    {
      id: "03",
      title: "Native Time-Locks & Multisig",
      icon: CheckCircle2,
      description: "Cryptographic escrow and M-of-N threshold signatures built directly into the consensus layer. Built natively as a hyper-secure digital vault for sovereign wealth and institutional capital.",
      stat: "Institutional Vault"
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
              The World's Most Trusted <br />
              <span className="text-[#00E599]">Quantum Blockchain.</span>
            </h1>

            {/* Feature Rows */}
            <div className="w-full max-w-2xl mb-6 md:mb-6 flex flex-col gap-4 md:gap-4 relative">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className="flex flex-col gap-2 group cursor-pointer relative py-2"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex flex-col gap-1 z-10 transition-transform duration-300 group-hover:translate-x-2">
                    <span className={`text-xl sm:text-2xl font-medium tracking-tight transition-colors duration-300 ${hoveredIndex === index ? 'text-[#00E599]' : 'text-black'}`}>
                      {feature.title}
                    </span>
                    {/* Always visible stat/tag */}
                    <span className="text-sm font-mono text-gray-400 group-hover:text-black transition-colors">
                      {feature.stat}
                    </span>
                  </div>

                  <div className="w-full h-[1px] bg-black/10 relative group-hover:bg-[#00E599]/50 transition-colors mt-2"></div>

                  {/* Styled Hover Card - Premium Dark Mode */}
                  <div
                    className={`hidden md:block absolute top-1/2 left-[105%] -translate-y-1/2 w-[340px] bg-black p-8 rounded-[2rem] shadow-2xl transition-all duration-500 pointer-events-none z-50 border border-gray-800
                    ${hoveredIndex === index ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-4 scale-95'}`}
                  >
                    {/* Glow Effect */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E599]/20 rounded-full blur-[50px] -mr-16 -mt-16 pointer-events-none" />

                    {/* Decorative Arrow pointing left to the list item */}
                    <div className="absolute top-1/2 -left-3 w-6 h-6 bg-black rotate-45 border-l border-b border-gray-800 transform -translate-y-1/2"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4 text-[#00E599]">
                        <feature.icon className="w-6 h-6" />
                        <span className="text-xs font-bold uppercase tracking-wider border border-[#00E599]/30 px-2 py-1 rounded-full">{feature.id}</span>
                      </div>

                      <h4 className="text-xl font-bold text-white mb-3 leading-tight">{feature.title}</h4>

                      <p className="text-gray-400 text-sm leading-relaxed font-light">
                        {feature.description}
                      </p>
                    </div>
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
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
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

      {/* Floating Status Pill (Removed) */}

    </section>
  );
}
