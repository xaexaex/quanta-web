import { CheckCircle2, Circle, Clock, GitFork } from "lucide-react";

export default function Roadmap() {
  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "Foundation (Q1 2026)",
      status: "In Progress",
      items: [
        { task: "Testnet launch", completed: false },
        { task: "Core functionality validation", completed: false },
        { task: "Community building", completed: false },
        { task: "Security audits", completed: false },
        { task: "Documentation completion", completed: false }
      ]
    },
    {
      phase: "Phase 2",
      title: "Mainnet (Q2 2026)",
      status: "upcoming",
      items: [
        { task: "Mainnet genesis", completed: false },
        { task: "Exchange integrations", completed: false },
        { task: "Block explorer deployment", completed: false },
        { task: "Light wallet release", completed: false },
        { task: "Mining pool infrastructure", completed: false }
      ]
    },
    {
      phase: "Phase 3",
      title: "Expansion (Q3-Q4 2026)",
      status: "upcoming",
      items: [
        { task: "Smart contract layer (post-quantum VM)", completed: false },
        { task: "Light client protocol (SPV)", completed: false },
        { task: "Hardware wallet support (Ledger/Trezor)", completed: false },
        { task: "Mobile wallets (iOS/Android)", completed: false },
        { task: "Developer SDK and tooling", completed: false }
      ]
    },
    {
      phase: "Phase 4",
      title: "Ecosystem (2027+)",
      status: "upcoming",
      items: [
        { task: "Developer grants program", completed: false },
        { task: "DApp ecosystem growth", completed: false },
        { task: "Cross-chain bridges", completed: false },
        { task: "Layer 2 solutions", completed: false },
        { task: "On-chain governance", completed: false }
      ]
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return (
          <div className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            Completed
          </div>
        );
      case "In Progress":
        return (
          <div className="flex items-center gap-2 bg-[#00E599] text-black px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
            <Clock className="w-4 h-4" />
            In Progress
          </div>
        );
      case "upcoming":
        return (
          <div className="flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
            <Circle className="w-4 h-4" />
            Upcoming
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="roadmap" className="py-32 relative bg-white">
      <div className="px-6">
        {/* Heading Section */}
        <div className="mb-16 sm:mb-24 bg-black rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-16 md:p-20 mx-2 sm:mx-4 md:mx-8 relative overflow-hidden">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#00E599]/10 rounded-full blur-[120px]" />
          
          <div className="relative z-10">
            <div className="max-w-4xl">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 text-white tracking-tight">
                Path to <br />
                <span className="text-gray-400">Quantum Security.</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed">
                Building the most secure blockchain for the post-quantum era. From testnet to ecosystem growth, transparency at every step.
              </p>
            </div>
          </div>
        </div>

        {/* Roadmap Phases */}
        <div className="space-y-8 mx-4 md:mx-8">
          {roadmapPhases.map((phase, index) => (
            <div 
              key={index}
              className={`bg-white border-2 rounded-[2rem] p-10 md:p-12 transition-all duration-300 ${
                phase.status === 'In Progress' 
                  ? 'border-[#00E599] shadow-[0_0_30px_rgba(0,229,153,0.2)]' 
                  : phase.status === 'Completed'
                  ? 'border-green-500/30 bg-green-50/50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                  <div className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-2">
                    {phase.phase}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-black">
                    {phase.title}
                  </h3>
                </div>
                {getStatusBadge(phase.status)}
              </div>

              <div className="space-y-4">
                {phase.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    {item.completed ? (
                      <CheckCircle2 className="w-6 h-6 text-[#00E599] flex-shrink-0" />
                    ) : (
                      <Circle className="w-6 h-6 text-gray-300 flex-shrink-0" />
                    )}
                    <span className={`text-lg ${item.completed ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
                      {item.task}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Contribute */}
        <div className="mt-16 bg-[#00E599] rounded-[2rem] p-12 md:p-16 mx-4 md:mx-8 text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Contribute to the Future
          </h3>
          <p className="text-lg md:text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            QUANTA is open source and community-driven. Join developers worldwide building quantum-resistant infrastructure.
          </p>
          <a 
            href="https://github.com/quantachain/quanta"
            target="_blank"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 text-xl font-bold text-[#00E599] bg-black rounded-full hover:bg-gray-900 transition-all hover:scale-105"
          >
            Start Contributing
            <GitFork className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
