"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Why is QUANTA quantum-resistant?",
      answer: "QUANTA uses NIST-standardized post-quantum cryptography (Falcon-512). As the NSA CNSA 2.0 directive mandates a transition to PQC by 2030, Quanta ensures enterprise AI deployments are legally and mathematically secure today."
    },
    {
      question: "Why AlephBFT instead of Proof of Work?",
      answer: "Autonomous AI agents and DePIN hardware require sub-second deterministic finality. Proof of Work takes 10+ minutes per block. AlephBFT gives Quanta the high-frequency transaction throughput required for massive machine-to-machine interactions."
    },
    {
      question: "Do AI Agents need smart contracts?",
      answer: "No. 95% of AI interactions require basic Escrow, Payments, and Multisig. Instead of heavy Ethereum-style smart contracts, Quanta uses Native Rust Templates built directly into the node. Zero VM overhead, zero gas bloat, blazing fast execution."
    },
    {
      question: "What is DePIN Settlement?",
      answer: "Decentralized Physical Infrastructure Networks (DePIN) like GPU clouds or IoT sensors generate millions of micro-transactions. Quanta acts as the unhackable settlement layer, allowing an AI agent to rent a GPU and pay per minute using quantum-secure state channels."
    },
    {
      question: "What are the tokenomics?",
      answer: "Fair launch with zero pre-mine and zero ICO. Initial epoch reward of 100 QUA is distributed to BFT Validators, declining 15% annually to a 5 QUA floor. DePIN transaction fees and AI Escrow fees are burned, acting as a perpetual deflationary mechanism."
    },
    {
      question: "When will mainnet launch?",
      answer: "Mainnet is targeted for Q4 2026. We are currently bootstrapping the V2.0 Testnet Enterprise Consortium. We prioritize institutional compliance and security over retail speed."
    }
  ];

  return (
    <section className="py-10 sm:py-20 relative bg-transparent">
      <div className="container mx-auto px-6">
        {/* Header Block */}
        <div className="mb-12 sm:mb-20 bg-black rounded-[2.5rem] p-10 sm:p-16 relative overflow-hidden text-white text-center">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00E599]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
              Frequently Asked <br />
              <span className="text-[#00E599]">Questions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about Quanta
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6 px-2 sm:px-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 border ${openIndex === index
                ? "bg-black border-black shadow-2xl"
                : "bg-white border-gray-100 hover:border-[#00E599]/50 hover:shadow-lg"
                }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 sm:px-10 py-6 sm:py-8 flex items-center justify-between text-left group"
              >
                <span className={`text-base sm:text-xl md:text-2xl font-bold pr-4 sm:pr-6 transition-colors ${openIndex === index ? "text-white" : "text-black group-hover:text-[#00E599]"
                  }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? "bg-[#00E599] rotate-180" : "bg-gray-100 group-hover:bg-[#00E599]/10"
                  }`}>
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${openIndex === index ? "text-black" : "text-[#00E599]"
                      }`}
                  />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
