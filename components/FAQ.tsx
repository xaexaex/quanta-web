"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes Quanta quantum-resistant?",
      answer: "Quanta uses NIST-standardized post-quantum cryptography algorithms: Falcon-512 for digital signatures and Kyber-1024 for encryption. These algorithms are designed to withstand attacks from both classical and quantum computers."
    },
    {
      question: "How does Quanta compare to other blockchains?",
      answer: "Unlike traditional blockchains that use vulnerable ECDSA signatures, Quanta is built from the ground up with quantum resistance. It's written in Rust for maximum performance and security, with a Proof of Work consensus mechanism."
    },
    {
      question: "What is the block time?",
      answer: "Quanta has an approximate block time of ~10 seconds with dynamic difficulty adjustment to maintain consistent block production."
    },
    {
      question: "Can I mine Quanta?",
      answer: "Yes! Quanta uses a Proof of Work consensus mechanism. You can start mining by downloading the code from our GitHub repository and running a node."
    },
    {
      question: "Is Quanta compatible with Ethereum tools?",
      answer: "Quanta uses an account-based model similar to Ethereum (not UTXO), making it easier for developers familiar with Ethereum to adapt. However, it's a completely independent blockchain with its own unique architecture."
    },
    {
      question: "Why Rust?",
      answer: "Rust provides memory safety without garbage collection, excellent performance, and prevents entire classes of bugs at compile time. This makes it ideal for building secure, high-performance blockchain infrastructure."
    }
  ];

  return (
    <section className="py-40 relative bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 text-black tracking-tight">
            Frequently Asked <br />
            <span className="text-[#00E599]">Questions</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about Quanta
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-3xl overflow-hidden transition-all duration-500 ${
                openIndex === index 
                  ? "bg-black shadow-[0_0_40px_rgba(0,229,153,0.3)]" 
                  : "bg-white border-2 border-gray-200 hover:border-[#00E599]/50"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-10 py-8 flex items-center justify-between text-left group"
              >
                <span className={`text-2xl font-bold pr-6 transition-colors ${
                  openIndex === index ? "text-white" : "text-black group-hover:text-[#00E599]"
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index ? "bg-[#00E599] rotate-180" : "bg-gray-100 group-hover:bg-[#00E599]/10"
                }`}>
                  <ChevronDown
                    className={`w-6 h-6 transition-colors ${
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
                <div className="px-10 pb-8 text-gray-300 text-lg leading-relaxed border-t border-white/10 pt-6">
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
