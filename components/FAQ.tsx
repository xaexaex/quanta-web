"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Why is QUANTA quantum-resistant?",
      answer: "QUANTA uses NIST-standardized post-quantum cryptography: Falcon-512 for digital signatures (NIST Level 1, lattice-based) and Kyber-1024 for encryption (NIST Level 5). These algorithms are designed to withstand attacks from both classical and quantum computers, with no known polynomial-time quantum attacks."
    },
    {
      question: "What is the quantum threat timeline?",
      answer: "Conservative estimates suggest quantum computers capable of breaking current blockchain cryptography (ECDSA/EdDSA) could exist within 10-15 years. QUANTA protects against harvest now, decrypt later attacks by implementing quantum-resistant encryption today, providing security through 2045 and beyond."
    },
    {
      question: "What are the tokenomics?",
      answer: "Fair launch with zero pre-mine and zero ICO. Initial block reward of 100 QUA declining 15% annually to a 5 QUA floor, ensuring perpetual mining incentives. 70% of transaction fees are burned for deflationary pressure, 20% funds development treasury, and 10% goes to miners. Asymptotic maximum supply of approximately 1.5 billion QUA."
    },
    {
      question: "How does the anti-dump mechanism work?",
      answer: "50% of mining rewards are locked for 6 months (157,680 blocks) to prevent immediate sell pressure and align miner incentives with long-term network health. This creates stability during the critical launch period while maintaining operational liquidity for miners."
    },
    {
      question: "What makes QUANTA different from other quantum-resistant projects?",
      answer: "QUANTA is purpose-built, not retrofitted. It combines production-ready post-quantum cryptography with sustainable tokenomics and modern security practices. Built entirely in Rust with adaptive proof-of-work, 10-second block times, and comprehensive operational tooling including Prometheus metrics and JSON-RPC control."
    },
    {
      question: "What are the technical specifications?",
      answer: "10-second block time with dynamic difficulty adjustment every 10 blocks. SHA3-256 quantum-resistant hashing. Account-based model with nonce-based replay protection. Maximum 2,000 transactions per block with 1MB block size limit. Persistent storage using Sled database with atomic transaction guarantees."
    }
  ];

  return (
    <section className="py-40 relative bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 text-black tracking-tight">
            Frequently Asked <br />
            <span className="text-[#00E599]">Questions</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed px-4">
            Everything you need to know about Quanta
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6 px-2 sm:px-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 ${
                openIndex === index 
                  ? "bg-black shadow-[0_0_40px_rgba(0,229,153,0.3)]" 
                  : "bg-white border-2 border-gray-200 hover:border-[#00E599]/50"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 sm:px-10 py-6 sm:py-8 flex items-center justify-between text-left group"
              >
                <span className={`text-base sm:text-xl md:text-2xl font-bold pr-4 sm:pr-6 transition-colors ${
                  openIndex === index ? "text-white" : "text-black group-hover:text-[#00E599]"
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index ? "bg-[#00E599] rotate-180" : "bg-gray-100 group-hover:bg-[#00E599]/10"
                }`}>
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${
                      openIndex === index ? "text-black" : "text-[#00E599]"
                    }`}
                  />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 sm:px-10 pb-6 sm:pb-8 text-gray-300 text-base sm:text-lg leading-relaxed border-t border-white/10 pt-4 sm:pt-6">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
