"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Why is QUANTA quantum-resistant?",
      answer: "QUANTA uses NIST-standardized post-quantum cryptography: Falcon-512 for digital signatures (NIST Level 1) and Kyber-1024 for encryption (NIST Level 5). These algorithms are designed to withstand attacks from both classical and quantum computers."
    },
    {
      question: "When will mainnet launch?",
      answer: "Mainnet is targeted for Q1 2027. We're currently in Phase 1 (Testnet Preparation, Q1 2026), followed by Public Testnet (Q2 2026), Security Hardening (Q3 2026), and Mainnet Preparation (Q4 2026). We prioritize security over speed."
    },
    {
      question: "How can I contribute?",
      answer: "Visit our GitHub at github.com/quantachain/quanta to contribute code, report issues, or review PRs. Join Discord (discord.gg/7KmMBrrJEz) for community discussions. Once testnet launches in Q2 2026, you can run a node and participate in testing."
    },
    {
      question: "How can I support the project?",
      answer: "Star us on GitHub, join our community channels, and spread the word. For partnerships or sponsorships, reach out via email: contact@quantachain.org. We're self-funded and building for the long term."
    },
    {
      question: "What about security audits?",
      answer: "External security audits are scheduled for Q2 2026 during the public testnet phase. We'll publish all audit reports publicly. A bug bounty program will launch alongside the testnet."
    },
    {
      question: "What are the tokenomics?",
      answer: "Fair launch with zero pre-mine and zero ICO. Initial block reward of 100 QUA declining 15% annually to a 5 QUA floor. 70% of transaction fees are burned, 20% funds treasury, and 10% goes to miners. Maximum supply ~1.5 billion QUA."
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
