import React from "react";

export default function Tokenomics() {
  const metrics = [
    {
      value: "100",
      label: "QUA Initial Reward",
      sub: "Per block at launch",
      shape: (
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current stroke-[1.5]">
          <path d="M50,20 L80,50 L50,80 L20,50 Z" />
          <path d="M50,10 V30 M50,70 V90 M10,50 H30 M70,50 H90" className="opacity-50" />
        </svg>
      )
    },
    {
      value: "15%",
      label: "Annual Reduction",
      sub: "Smooth exponential decay",
      shape: (
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current stroke-[1.5]">
          <circle cx="50" cy="50" r="30" />
          <path d="M50,20 Q80,20 80,50" />
          <path d="M50,50 L80,20" />
        </svg>
      )
    },
    {
      value: "1.5B",
      label: "Asymptotic Max",
      sub: "Reached by year 15-20",
      shape: (
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current stroke-[1.5]">
          <path d="M10,90 Q50,90 90,10" />
          <path d="M10,90 H90" className="opacity-30" />
          <rect x="70" y="10" width="20" height="20" />
        </svg>
      )
    },
    {
      value: "5",
      label: "QUA Reward Floor",
      sub: "Perpetual mining incentive",
      shape: (
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current stroke-[1.5]">
          <rect x="20" y="40" width="60" height="20" />
          <path d="M20,60 L20,80 L80,80 L80,60" />
          <path d="M50,40 V20" />
          <circle cx="50" cy="15" r="5" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-12 sm:py-24 relative bg-transparent text-black">
      <div className="container mx-auto px-6">

        {/* Header Block */}
        <div className="mb-16 sm:mb-24 bg-black rounded-[2.5rem] p-10 sm:p-16 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00E599]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />

          <h2 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight relative z-10">
            Sustainable <br />
            <span className="text-gray-500">Economics.</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed relative z-10">
            Fair launch with adaptive tokenomics designed for long-term network health. No pre-mine, no ICO.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group border border-gray-100 hover:border-[#00E599]/30 relative overflow-hidden"
            >
              {/* Decorative Shape BG */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 text-gray-200 group-hover:text-[#00E599]/20 transition-colors duration-500 rotate-12">
                {metric.shape}
              </div>

              <div className="relative z-10">
                <div className="text-4xl font-bold mb-3 tracking-tight group-hover:text-[#00E599] transition-colors">{metric.value}</div>
                <div className="text-lg font-bold text-gray-900 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-500 font-medium font-mono">{metric.sub}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
