"use client";

import React from "react";

export default function Tokenomics() {
  const metrics = [
    {
      value: "100",
      label: "QUA Initial Reward",
      sub: "Per block at launch",
      id: "01",
      shape: (
        <svg viewBox="0 0 200 100" className="w-full h-full stroke-teal-500/40 fill-none stroke-[1.5]">
          <rect x="30" y="60" width="20" height="20" rx="2" />
          <rect x="60" y="50" width="20" height="30" rx="2" />
          <rect x="90" y="40" width="20" height="40" rx="2" />
          <rect x="120" y="30" width="20" height="50" rx="2" />
          <path d="M30,50 L150,20" strokeDasharray="4 4" />
          <circle cx="150" cy="20" r="3" className="fill-teal-500/20" />
        </svg>
      )
    },
    {
      value: "15%",
      label: "Annual Reduction",
      sub: "Smooth exponential decay",
      id: "02",
      shape: (
        <svg viewBox="0 0 200 100" className="w-full h-full stroke-teal-500/40 fill-none stroke-[1.5]">
          <path d="M20,80 Q60,80 100,40 Q140,20 180,20" />
          <path d="M20,80 H180" className="opacity-30" />
          <circle cx="100" cy="40" r="3" className="fill-teal-500/20" />
          <circle cx="180" cy="20" r="3" className="fill-teal-500/20" />
        </svg>
      )
    },
    {
      value: "1.5B",
      label: "Asymptotic Max",
      sub: "Reached by year 15-20",
      id: "03",
      shape: (
        <svg viewBox="0 0 200 100" className="w-full h-full stroke-teal-500/40 fill-none stroke-[1.5]">
          <path d="M20,80 Q100,80 180,20" />
          <path d="M20,80 H180" className="opacity-30" />
          <rect x="160" y="20" width="20" height="20" />
          <circle cx="20" cy="80" r="3" className="fill-teal-500/20" />
        </svg>
      )
    },
    {
      value: "5",
      label: "QUA Reward Floor",
      sub: "Perpetual mining incentive",
      id: "04",
      shape: (
        <svg viewBox="0 0 200 100" className="w-full h-full stroke-teal-500/40 fill-none stroke-[1.5]">
          <rect x="20" y="50" width="160" height="20" />
          <path d="M20,70 L20,80 L180,80 L180,70" />
          <path d="M100,50 V30" />
          <circle cx="100" cy="25" r="5" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 sm:py-32 relative bg-transparent text-black overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase px-4 py-2 bg-gray-100 rounded-full">
              Tokenomics
            </span>
          </div>
          <h2 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight leading-[0.95]">
            Sustainable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E599] to-emerald-600">Economics</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl leading-relaxed font-light">
            Fair launch with adaptive tokenomics designed for long-term network health. <span className="text-black font-medium">No pre-mine, no ICO.</span>
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group border border-gray-100 hover:border-[#00E599]/30 flex flex-col justify-between min-h-[320px]"
            >
              <div>
                {/* Circled Number - Matching Features Style */}
                <div className="w-8 h-8 rounded-full border border-teal-600/30 flex items-center justify-center mb-6 text-sm font-mono text-teal-700 font-medium">
                  {index + 1}
                </div>

                {/* Value */}
                <div className="text-4xl font-bold tracking-tight text-gray-900 mb-3">
                  {metric.value}
                </div>

                {/* Label */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900 tracking-tight">
                  {metric.label}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  {metric.sub}
                </p>
              </div>

              {/* Bottom Geometric Graphic */}
              <div className="mt-8 h-24 w-full opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                {metric.shape}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 sm:mt-20 text-center">
          <p className="text-sm font-mono text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Emission schedule designed to balance early adoption incentives with long-term sustainability.
            <span className="text-gray-600"> Mining rewards decrease gradually, ensuring network security remains economically viable indefinitely.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
