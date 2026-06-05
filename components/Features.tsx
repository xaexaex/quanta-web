import React from "react";

export default function Features() {
  const features = [
    {
      title: "Falcon-512 Security",
      description: "NIST Level 1 lattice signatures. 897-byte keys. Quantum-resistant security for the post-quantum era, ensuring AI agents operate on mathematically secure rails.",
      shape: (
        <svg viewBox="0 0 200 100" className="w-full h-full stroke-teal-500/40 fill-none stroke-[1.5]">
          {/* Lattice Grid */}
          <path d="M20,80 L60,40 L100,80 L140,40 L180,80 M20,40 L60,80 L100,40 L140,80 L180,40 M60,40 L60,80 M140,40 L140,80 M100,40 L100,80" />
          {/* Static dots */}
          <circle cx="60" cy="40" r="3" className="fill-teal-500/20" />
          <circle cx="140" cy="80" r="3" className="fill-teal-500/20" />
          <circle cx="100" cy="40" r="3" className="fill-teal-500/20" />

          {/* Animated Dot traversing the lattice */}
          <circle r="4" className="fill-[#C4ED5F]">
            <animateMotion
              path="M20,80 L60,40 L100,80 L140,40 L180,80 L140,40 L100,80 L60,40 L20,80"
              dur="8s"
              repeatCount="indefinite"
              calcMode="linear"
            />
          </circle>
        </svg>
      )
    },
    {
      title: "AlephBFT Consensus",
      description: "Asynchronous Directed Acyclic Graph (DAG) consensus. Reaching sub-second finality with zero forks, designed for extreme AI-to-AI microtransaction throughput.",
      shape: (
        <svg viewBox="0 0 200 100" className="w-full h-full stroke-teal-500/40 fill-none stroke-[1.5]">
          {/* Concentric Shells */}
          <circle cx="100" cy="50" r="30" />
          <circle cx="100" cy="50" r="20" />
          <circle cx="100" cy="50" r="10" />
          <path d="M70,50 L130,50 M100,20 L100,80" />
          {/* Orbiting Dot */}
          <g>
            <animateTransform attributeName="transform" type="rotate" from="0 100 50" to="360 100 50" dur="10s" repeatCount="indefinite" />
            <circle cx="100" cy="20" r="3" className="fill-[#C4ED5F]" />
          </g>
          {/* Key Icon */}
          <rect x="140" y="35" width="25" height="30" rx="4" />
          <circle cx="152.5" cy="50" r="4" />
          <path d="M152.5,50 L152.5,55" />
        </svg>
      )
    },
    {
      title: "Native Templates (Zero VM)",
      description: "No EVM. No Gas overhead. Smart contracts are written as hyper-optimized Rust templates compiled directly into the node binary for bare-metal execution speeds.",
      shape: (
        <svg viewBox="0 0 200 100" className="w-full h-full stroke-teal-500/40 fill-none stroke-[1.5]">
          {/* Ascending Chart / Coins */}
          <rect x="30" y="60" width="20" height="20" rx="2" />
          <rect x="60" y="50" width="20" height="30" rx="2" />
          <rect x="90" y="40" width="20" height="40" rx="2" />
          <rect x="120" y="30" width="20" height="50" rx="2" />
          <path d="M30,50 L150,20" strokeDasharray="4 4" />
          {/* Bouncing Coin */}
          <circle cx="150" cy="20" r="4" className="fill-[#C4ED5F]">
            <animate attributeName="cy" values="20; 15; 20" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      )
    },
    {
      title: "Cryptographic AI Escrow",
      description: "Built-in trustless escrow for data bounties. AI Agents lock funds that are only released when a valid dataset hash (preimage) is verified by the network.",
      shape: (
        <svg viewBox="0 0 200 100" className="w-full h-full stroke-teal-500/40 fill-none stroke-[1.5]">
          {/* Hourglass / Lock Hybrid */}
          <path d="M80,20 L120,20 L100,50 L80,20 Z M80,80 L120,80 L100,50 L80,80 Z" />
          {/* Sand dropping */}
          <circle cx="100" cy="50" r="1.5" className="fill-[#C4ED5F]">
            <animate attributeName="cy" from="50" to="75" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="100" cy="50" r="1.5" className="fill-[#C4ED5F]" opacity="0.5">
            <animate attributeName="cy" from="45" to="70" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
          </circle>
          <path d="M60,35 L60,45 A40,40 0 0,0 140,45 L140,35" strokeDasharray="4 4" />
        </svg>
      )
    },
    {
      title: "DePIN Infrastructure Settlement",
      description: "Secure the physical layer. Fast enough to track GPU compute cycles, sensor data, and hardware networks with unforgeable post-quantum signatures.",
      shape: (
        <svg viewBox="0 0 200 100" className="w-full h-full stroke-teal-500/40 fill-none stroke-[1.5]">
          {/* Linked nodes */}
          <circle cx="70" cy="40" r="8" />
          <circle cx="130" cy="40" r="8" />
          <circle cx="100" cy="70" r="8" className="fill-[#C4ED5F]/20 stroke-[#C4ED5F]" />
          <path d="M75,45 L95,65 M125,45 L105,65" strokeDasharray="3 3">
            <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />
          </path>
          {/* Keys */}
          <circle cx="70" cy="40" r="2" className="fill-teal-500" />
          <circle cx="130" cy="40" r="2" className="fill-teal-500" />
        </svg>
      )
    },
    {
      title: "Institutional Compliance",
      description: "Future-proof your enterprise. By adhering to the NSA's CNSA 2.0 directive, Quanta is ready for defense, medical, and banking AI deployments from Day 1.",
      shape: (
        <svg viewBox="0 0 200 100" className="w-full h-full stroke-teal-500/40 fill-none stroke-[1.5]">
          {/* Puzzle Pieces (Reference Style) */}
          <path d="M40,30 H80 V50 H100 V30 H140 V70 H100 V90 H80 V70 H40 Z" />
          <path d="M80,50 V70" />
          <path d="M100,50 V70" />
          {/* Sliding Piece Indicator */}
          <rect x="85" y="55" width="30" height="10" rx="5" className="fill-[#C4ED5F]" opacity="0.5">
            <animate attributeName="x" values="85; 45; 85" dur="4s" repeatCount="indefinite" />
          </rect>
        </svg>
      )
    }
  ];

  return (
    <section className="py-10 sm:py-24 bg-transparent text-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase px-4 py-2 bg-gray-100 rounded-full">
              Core Features
            </span>
          </div>
          <h2 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight leading-[0.95]">
            Engineered for <br />
            <span className="text-[#C4ED5F]">Autonomous Markets</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl leading-relaxed font-light">
            QUANTA abandons heavy virtual machines for native Rust templates, delivering an institutional settlement layer <span className="text-black font-medium">ready for DePIN and AI integration.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-xl -translate-y-1 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[320px] group transition-all duration-300 border border-[#C4ED5F]/30 hover:-translate-y-2 hover:shadow-2xl"
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
