import { CheckCircle2, Clock, Rocket, Code, Blocks, Wallet, Search, Network } from "lucide-react";

export default function EcosystemStatus() {
  const tools = [
    {
      name: "Core Protocol",
      description: "Rust-based blockchain with Falcon-512 & Kyber-1024",
      status: "live",
      icon: <Code className="w-8 h-8" />,
      link: "https://github.com/quantachain/quanta",
      progress: 100
    },
    {
      name: "JSON-RPC API",
      description: "Full node control and transaction submission",
      status: "live",
      icon: <Network className="w-8 h-8" />,
      link: "https://github.com/quantachain/quanta#json-rpc-api",
      progress: 100
    },
    {
      name: "CLI Wallet",
      description: "Command-line wallet for developers",
      status: "live",
      icon: <Wallet className="w-8 h-8" />,
      link: "https://github.com/quantachain/quanta#wallet-operations",
      progress: 100
    },
    {
      name: "Public Testnet",
      description: "Live network for testing and development",
      status: "in-progress",
      icon: <Rocket className="w-8 h-8" />,
      link: null,
      progress: 35,
      eta: "Q2 2026"
    },
    {
      name: "Block Explorer",
      description: "Visualize transactions, blocks, and network stats",
      status: "coming-soon",
      icon: <Search className="w-8 h-8" />,
      link: null,
      progress: 15,
      eta: "Q2 2026"
    },
    {
      name: "Desktop Wallet",
      description: "GUI wallet for Windows, macOS, and Linux",
      status: "coming-soon",
      icon: <Wallet className="w-8 h-8" />,
      link: null,
      progress: 20,
      eta: "Q4 2026"
    },
    {
      name: "Mining Pool",
      description: "Pooled mining for community miners",
      status: "coming-soon",
      icon: <Blocks className="w-8 h-8" />,
      link: null,
      progress: 10,
      eta: "Q4 2026"
    },
    {
      name: "SDK & Libraries",
      description: "JavaScript/Python libraries for developers",
      status: "coming-soon",
      icon: <Code className="w-8 h-8" />,
      link: null,
      progress: 5,
      eta: "Q1 2027"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "live":
        return (
          <div className="flex items-center gap-2 bg-[#00E599] text-black px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
            Live
          </div>
        );
      case "in-progress":
        return (
          <div className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3 h-3" />
            In Progress
          </div>
        );
      case "coming-soon":
        return (
          <div className="flex items-center gap-2 bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3 h-3" />
            Coming Soon
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-24 relative bg-gray-50">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6">
            Ecosystem <span className="text-[#00E599]">Development</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Track the progress of our tools and infrastructure. We're building the complete ecosystem for quantum-resistant blockchain.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`bg-white border-2 rounded-2xl p-6 transition-all ${tool.status === 'live'
                  ? 'border-[#00E599]/30 hover:border-[#00E599] hover:shadow-xl'
                  : 'border-gray-200 hover:border-gray-300'
                }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${tool.status === 'live' ? 'bg-[#00E599]/10 text-[#00E599]' : 'bg-gray-100 text-gray-400'
                  }`}>
                  {tool.icon}
                </div>
                {getStatusBadge(tool.status)}
              </div>

              <h3 className="text-xl font-bold mb-2 text-black">{tool.name}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{tool.description}</p>

              {/* Progress Bar */}
              {tool.progress !== undefined && tool.progress < 100 && (
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-gray-500">Progress</span>
                    <span className="text-xs font-bold text-[#00E599]">{tool.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#00E599] to-[#00cc88] transition-all duration-500"
                      style={{ width: `${tool.progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* ETA */}
              {tool.eta && (
                <div className="text-xs text-gray-500 font-semibold mb-3">
                  Target: {tool.eta}
                </div>
              )}

              {/* Link */}
              {tool.link ? (
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-[#00E599] hover:text-[#00cc88] transition-colors"
                >
                  View Documentation →
                </a>
              ) : (
                <div className="text-sm text-gray-400 font-semibold">
                  In Development
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold text-[#00E599] mb-2">3</div>
            <div className="text-gray-600 font-semibold">Tools Live</div>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">1</div>
            <div className="text-gray-600 font-semibold">In Active Development</div>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold text-gray-400 mb-2">4</div>
            <div className="text-gray-600 font-semibold">Coming in 2026-2027</div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed">
            We prioritize <span className="font-semibold text-black">security and quality</span> over speed.
            All tools undergo rigorous testing before public release. Follow our{" "}
            <a href="https://github.com/quantachain/quanta" target="_blank" className="text-[#00E599] font-semibold hover:underline">
              GitHub
            </a>
            {" "}for real-time development updates.
          </p>
        </div>

      </div>
    </section>
  );
}
