import { ShieldCheck, Lock, Code2, Pickaxe, User, Database, Cog } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Falcon-512 Signatures",
      description: "NIST Level 1 lattice-based signatures. 897-byte public keys, 666-byte signatures. Quantum-resistant with no known polynomial-time attacks.",
      icon: <ShieldCheck className="w-12 h-12 text-[#00E599]" />,
      status: "live"
    },
    {
      title: "Kyber-1024 Encryption",
      description: "NIST Level 5 security providing 256-bit quantum resistance. Protects against harvest now, decrypt later attacks through 2045+.",
      icon: <Lock className="w-12 h-12 text-[#00E599]" />,
      status: "live"
    },
    {
      title: "Adaptive Block Rewards",
      description: "100 QUA initial reward declining 15% annually to 5 QUA floor. Ensures perpetual mining incentive unlike Bitcoin's finite emission.",
      icon: <Code2 className="w-12 h-12 text-[#00E599]" />,
      status: "live"
    },
    {
      title: "10-Second Block Time",
      description: "Fast finality with dynamic difficulty adjustment every 10 blocks. SHA3-256 hashing provides quantum-resistant proof-of-work.",
      icon: <Pickaxe className="w-12 h-12 text-[#00E599]" />,
      status: "live"
    },
    {
      title: "70% Fee Burning",
      description: "Transaction fees are burned creating deflationary pressure. 20% funds treasury, 10% rewards miners for sustainable economics.",
      icon: <User className="w-12 h-12 text-[#00E599]" />,
      status: "live"
    },
    {
      title: "Fair Launch Distribution",
      description: "Zero pre-mine, zero ICO. 100% distributed through mining with 50% reward lock for 6 months to prevent dump pressure.",
      icon: <Database className="w-12 h-12 text-[#00E599]" />,
      status: "live"
    }
  ];

  return (
    <section id="features" className="py-24 relative bg-white">
      <div className="px-6">
        {/* Heading Section with Black BG */}
        <div className="mb-16 sm:mb-24 bg-black rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-16 md:p-20 mx-2 sm:mx-4 md:mx-8 relative overflow-hidden">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#00E599]/10 rounded-full blur-[120px]" />

          <div className="relative z-10">
            <div className="max-w-4xl">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 text-white tracking-tight">
                Built for <br />
                <span className="text-gray-400">Quantum Security.</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed">
                QUANTA combines NIST-standardized post-quantum cryptography with sustainable economic design to deliver a blockchain secure for decades.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-8 py-3 sm:py-5 flex items-center gap-2 sm:gap-4">
                <div className="text-[#00E599] text-2xl sm:text-4xl font-bold">1.5B</div>
                <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest">Max Supply</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-8 py-3 sm:py-5 flex items-center gap-2 sm:gap-4">
                <div className="text-[#00E599] text-2xl sm:text-4xl font-bold">10s</div>
                <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest">Block Time</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-8 py-3 sm:py-5 flex items-center gap-2 sm:gap-4">
                <div className="text-[#00E599] text-2xl sm:text-4xl font-bold">70%</div>
                <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest">Fee Burn</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 bg-[#00E599] rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 md:p-16 mx-2 sm:mx-4 md:mx-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2rem] bg-white hover:bg-gray-50 transition-all duration-300 group shadow-lg hover:shadow-2xl hover:-translate-y-1 relative"
            >
              {feature.status === "coming-soon" && (
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-black text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full uppercase tracking-wider">
                  Coming Soon
                </div>
              )}
              {feature.status === "live" && (
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#00E599] text-black text-[10px] sm:text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
                  Live
                </div>
              )}
              <div className="mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 w-fit p-3 sm:p-4 bg-[#00E599]/10 rounded-xl sm:rounded-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-black">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
