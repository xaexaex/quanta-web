"use client";

import { useState } from "react";

const AI_COMPANIES = [
  { name: "NVIDIA", label: "AI Compute", domain: "nvidia.com" },
  { name: "OpenAI", label: "GPT / Agents", domain: "openai.com" },
  { name: "Anthropic", label: "Claude", domain: "anthropic.com" },
  { name: "xAI", label: "Grok", domain: "x.ai" },
  { name: "Google DeepMind", label: "Gemini", domain: "deepmind.google" },
  { name: "Meta AI", label: "Llama", domain: "meta.com" },
  { name: "Mistral AI", label: "Open Models", domain: "mistral.ai" },
  { name: "Cohere", label: "Enterprise LLMs", domain: "cohere.com" },
  { name: "Hugging Face", label: "Model Hub", domain: "huggingface.co" },
  { name: "Scale AI", label: "Data & RLHF", domain: "scale.com" },
  { name: "Stability AI", label: "Generative", domain: "stability.ai" },
  { name: "Inflection AI", label: "Pi", domain: "inflection.ai" },
  { name: "Character.ai", label: "Agents", domain: "character.ai" },
  { name: "Perplexity AI", label: "AI Search", domain: "perplexity.ai" },
  { name: "Together AI", label: "Inference", domain: "together.ai" },
  { name: "Replicate", label: "Model API", domain: "replicate.com" },
];

function CompanyLogo({ company }: { company: typeof AI_COMPANIES[0] }) {
  const [error, setError] = useState(false);

  return (
    <div className="w-12 h-12 rounded-xl bg-[#161616] border border-[rgba(255,255,255,0.08)] flex items-center justify-center overflow-hidden shrink-0 shadow-inner">
      {!error && company.domain ? (
        <img
          src={`/logos/${company.domain}.png`}
          alt={`${company.name} logo`}
          className="w-full h-full object-contain p-2"
          onError={() => setError(true)}
        />
      ) : (
        <span
          className="text-sm font-black text-[#00E599]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {company.name.slice(0, 2).toUpperCase()}
        </span>
      )}
    </div>
  );
}

export default function WhoWeFor() {
  // Split into two rows for a stacked effect
  const row1 = AI_COMPANIES.slice(0, 8);
  const row2 = AI_COMPANIES.slice(8, 16);

  // Duplicate for seamless loop
  const marqueeItems1 = [...row1, ...row1, ...row1];
  const marqueeItems2 = [...row2, ...row2, ...row2];

  return (
    <section className="py-16 sm:py-28 bg-transparent relative overflow-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="section-label">Built For</span>
        <h2
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[0.95] tracking-tight mt-2 mb-6"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          The AI Execution
          <br />
          <span className="text-[#00E599]">Infrastructure Layer.</span>
        </h2>
      </div>

      {/* Marquee Area */}
      <div className="relative overflow-hidden flex flex-col gap-6 py-6">

        {/* Deep fade edges for that premium feel */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[#080808] via-[#080808]/80 to-transparent z-10 pointer-events-none" />

        {/* Row 1 (Moving Left) */}
        <div className="flex animate-marquee gap-6 w-max">
          {marqueeItems1.map((company, i) => (
            <div
              key={`row1-${i}`}
              className="flex items-center gap-5 px-8 py-5 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[#0f0f0f] shadow-[0_0_20px_rgba(0,0,0,0.5)] whitespace-nowrap flex-shrink-0 group hover:border-[rgba(0,229,153,0.3)] hover:bg-[#121212] transition-all duration-300 cursor-default"
            >
              <CompanyLogo company={company} />
              <div>
                <p className="text-lg font-bold text-white leading-none tracking-wide">{company.name}</p>
                <p
                  className="text-xs text-[#8a8a8a] mt-1.5 font-medium tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {company.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 (Moving Right) */}
        <div className="flex gap-6 w-max ml-[-150px]" style={{ animation: 'marquee 40s linear infinite reverse' }}>
          {marqueeItems2.map((company, i) => (
            <div
              key={`row2-${i}`}
              className="flex items-center gap-5 px-8 py-5 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[#0f0f0f] shadow-[0_0_20px_rgba(0,0,0,0.5)] whitespace-nowrap flex-shrink-0 group hover:border-[rgba(0,229,153,0.3)] hover:bg-[#121212] transition-all duration-300 cursor-default"
            >
              <CompanyLogo company={company} />
              <div>
                <p className="text-lg font-bold text-white leading-none tracking-wide">{company.name}</p>
                <p
                  className="text-xs text-[#8a8a8a] mt-1.5 font-medium tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {company.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
