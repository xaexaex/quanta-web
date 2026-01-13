import React from "react";

export default function Features() {
  const features = [
    {
      title: "Falcon-512",
      description: "NIST Level 1 lattice signatures. 897-byte keys. Quantum-resistant security for the post-quantum era.",
      shape: (
        <svg viewBox="0 0 200 100" className="w-full h-full stroke-teal-500/40 fill-none stroke-[1.5]">
          {/* Lattice Grid */}
          <path d="M20,80 L60,40 L100,80 L140,40 L180,80 M20,40 L60,80 L100,40 L140,80 L180,40 M60,40 L60,80 M140,40 L140,80 M100,40 L100,80" />
          <circle cx="60" cy="40" r="3" className="fill-teal-500/20" />
          <circle cx="140" cy="80" r="3" className="fill-teal-500/20" />
          <circle cx="100" cy="40" r="3" className="fill-teal-500/20" />
        </svg>
      )
    },
    {
      title: "Kyber-1024",
      description: "NIST Level 5 encryption. 256-bit quantum security protecting against harvest-now-decrypt-later attacks.",
      shape: (
        <svg viewBox="0 0 200 100" className="w-full h-full stroke-teal-500/40 fill-none stroke-[1.5]">
          {/* Concentric Shells / Encryption */}
          <circle cx="100" cy="50" r="30" />
          <circle cx="100" cy="50" r="20" />
          <circle cx="100" cy="50" r="10" />
          <path d="M70,50 L130,50 M100,20 L100,80" />
          <rect x="140" y="35" width="25" height="30" rx="4" />
          <circle cx="152.5" cy="50" r="4" />
          <path d="M152.5,50 L152.5,55" />
        </svg>
      )
    },
    {
      title: "Adaptive Rewards",
      description: "100 QUA initial reward declining 15% annually to a sustainable floor, ensuring perpetual incentives.",
      shape: (
        <svg viewBox="0 0 200 100" className="w-full h-full stroke-teal-500/40 fill-none stroke-[1.5]">
          {/* Ascending Chart / Coins */}
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
      title: "10s Block Time",
      description: "Fast finality with dynamic difficulty. SHA3-256 hashing provides robust quantum-resistant proof-of-work.",
      shape: (
        <svg viewBox="0 0 200 100" className="w-full h-full stroke-teal-500/40 fill-none stroke-[1.5]">
          {/* Speed Lines */}
          <path d="M20,30 L100,30" />
          <path d="M20,50 L140,50" />
          <path d="M20,70 L80,70" />
          <path d="M160,30 L180,30 M150,70 L180,70" />
          {/* Block */}
          <rect x="140" y="20" width="40" height="60" rx="4" className="fill-teal-500/5" />
        </svg>
      )
    },
    {
      title: "70% Fee Burn",
      description: "Deflationary pressure mechanism. Transaction fees are burned to reduce supply and increase value.",
      shape: (
        <svg viewBox="0 0 200 100" className="w-full h-full stroke-teal-500/40 fill-none stroke-[1.5]">
          {/* Flame / Entropy */}
          <path d="M100,80 Q80,60 100,40 Q120,60 100,80" />
          <path d="M100,40 Q90,30 100,20 Q110,30 100,40" />
          <circle cx="60" cy="60" r="2" />
          <circle cx="140" cy="60" r="2" />
          <circle cx="80" cy="40" r="2" />
          <circle cx="120" cy="40" r="2" />
        </svg>
      )
    },
    {
      title: "Fair Launch",
      description: "Zero pre-mine, zero ICO. 100% distributed through mining to ensuring a fair start for everyone.",
      shape: (
        <svg viewBox="0 0 200 100" className="w-full h-full stroke-teal-500/40 fill-none stroke-[1.5]">
          {/* Puzzle Pieces (Reference Style) */}
          <path d="M40,30 H80 V50 H100 V30 H140 V70 H100 V90 H80 V70 H40 Z" />
          <path d="M80,50 V70" />
          <path d="M100,50 V70" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto px-6">
        {/* Header Block */}
        <div className="mb-16 sm:mb-24 bg-black rounded-[2.5rem] p-10 sm:p-16 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00E599]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />

          <h2 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight relative z-10">
            Core <br />
            <span className="text-gray-500">Features.</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed relative z-10">
            QUANTA combines NIST-standardized post-quantum cryptography with sustainable economic design to deliver a blockchain secure for decades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#F2FBF9] hover:bg-teal-50 rounded-2xl p-8 flex flex-col justify-between min-h-[320px] group transition-colors duration-300"
            >
              <div>
                {/* Circled Number */}
                <div className="w-8 h-8 rounded-full border border-teal-600/30 flex items-center justify-center mb-6 text-sm font-mono text-teal-700 font-medium">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-gray-900 tracking-tight">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Geometric Graphic */}
              <div className="mt-8 h-24 w-full opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                {feature.shape}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
