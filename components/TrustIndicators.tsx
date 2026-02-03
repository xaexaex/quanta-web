import { Shield, Code, Users, FileCheck, Github, Lock } from "lucide-react";

export default function TrustIndicators() {
  const indicators = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "100% Open Source",
      description: "All code publicly available under MIT license. Zero secrets, full transparency for community audits.",
      status: "MIT Licensed",
      link: "https://github.com/quantachain/quanta"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "NIST-Standardized Crypto",
      description: "Using officially approved post-quantum algorithms (Falcon-512, Kyber-1024), not experimental cryptography.",
      status: "NIST Approved",
      link: null
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "External Audits Planned",
      description: "Security audits scheduled for Q2 2026 during public testnet phase. Reports will be published publicly.",
      status: "Q2 2026",
      link: null
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Fair Launch Only",
      description: "Zero pre-mine, zero ICO, zero founder allocation. 100% distributed through mining post-mainnet.",
      status: "0% Pre-allocated",
      link: null
    },
    {
      icon: <Github className="w-8 h-8" />,
      title: "Active Development",
      description: "Regular commits, transparent roadmap, community-driven. Building in public since 2024.",
      status: "Daily Updates",
      link: "https://github.com/quantachain/quanta/commits"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Self-Funded Team",
      description: "No VC funding, no external control. Building for long-term security, not quick exits or investor demands.",
      status: "Independent",
      link: null
    }
  ];

  return (
    <section className="py-10 sm:py-24 relative bg-transparent text-black">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6">
            Trust & <span className="text-[#00E599]">Transparency</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building credibility through open development, security best practices, and community accountability.
          </p>
        </div>

        {/* Indicators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {indicators.map((indicator, index) => (
            <div
              key={index}
              className="bg-white border border-[#00E599]/30 rounded-2xl p-8 shadow-lg -translate-y-1 transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="w-16 h-16 bg-[#00E599]/10 rounded-xl flex items-center justify-center mb-6 text-[#00E599]">
                {indicator.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{indicator.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{indicator.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#00E599]">{indicator.status}</span>
                {indicator.link && (
                  <a
                    href={indicator.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-gray-600 hover:text-[#00E599] transition-colors"
                  >
                    View →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Statement */}
        <div className="max-w-4xl mx-auto bg-black text-white rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00E599]/10 rounded-full blur-[120px]" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment</h3>
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">Security First:</strong> We prioritize security over speed. Mainnet launches only after thorough testing and external audits, regardless of timeline pressure.
              </p>
              <p>
                <strong className="text-white">Radical Transparency:</strong> All development happens in public. Code, issues, discussions, and roadmap progress are visible to everyone.
              </p>
              <p>
                <strong className="text-white">Community Driven:</strong> We welcome contributors, security researchers, and community feedback. No centralized control, no hidden agendas.
              </p>
              <p>
                <strong className="text-white">No Token Sales:</strong> We will never conduct an ICO, pre-sale, or private sale. If you see QUA being sold before mainnet launch, it's a scam.
              </p>
            </div>
          </div>
        </div>

        {/* Verification Links */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Verify our commitments yourself. Don't trust, verify.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/quantachain/quanta"
              target="_blank"
              className="px-6 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all"
            >
              View Source Code
            </a>
            <a
              href="https://github.com/quantachain/quanta/issues"
              target="_blank"
              className="px-6 py-3 bg-gray-100 text-black font-bold rounded-full hover:bg-gray-200 transition-all"
            >
              Report Issues
            </a>
            <a
              href="https://github.com/quantachain/quanta/blob/main/LICENSE"
              target="_blank"
              className="px-6 py-3 bg-gray-100 text-black font-bold rounded-full hover:bg-gray-200 transition-all"
            >
              View License
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
