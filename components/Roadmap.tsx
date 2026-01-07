import { CheckCircle2, Circle, Clock, GitFork } from "lucide-react";

export default function Roadmap() {
  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "Testnet (Q2-Q3 2026)",
      status: "upcoming",
      quarters: [
        {
          title: "Q2 2026",
          items: [
            { task: "Public testnet launch with coordinated bootstrap nodes", completed: false },
            { task: "Core functionality validation", completed: false },
            { task: "Stress testing with simulated high-volume transactions", completed: false },
            { task: "Community onboarding and documentation refinement", completed: false }
          ]
        },
        {
          title: "Q3 2026",
          items: [
            { task: "External security audits (minimum 3 independent firms)", completed: false },
            { task: "Public bug bounty program ($100,000+ rewards pool)", completed: false },
            { task: "Performance optimization based on testnet data", completed: false },
            { task: "Network resilience testing", completed: false }
          ]
        }
      ],
      successCriteria: [
        "1,000+ testnet nodes across 50+ countries",
        "1 million+ test transactions processed",
        "Zero critical vulnerabilities in final audit",
        "99.9%+ uptime for testnet bootstrap nodes"
      ]
    },
    {
      phase: "Phase 2",
      title: "Mainnet Preparation (Q4 2026)",
      status: "upcoming",
      items: [
        { task: "Comprehensive remediation of all testnet findings", completed: false },
        { task: "Final security audit and formal code freeze", completed: false },
        { task: "Genesis block configuration and fair launch planning", completed: false },
        { task: "Bootstrap node deployment (10+ nodes, 5+ regions)", completed: false },
        { task: "Exchange partnership agreements (targeting 3-5 Tier 1)", completed: false },
        { task: "Third-party wallet provider integrations", completed: false },
        { task: "Emergency response procedures and incident playbooks", completed: false },
        { task: "Network monitoring infrastructure (Prometheus/Grafana)", completed: false }
      ]
    },
    {
      phase: "Phase 3",
      title: "Mainnet Launch (Q1 2027)",
      status: "upcoming",
      sections: [
        {
          title: "Genesis Event",
          items: [
            { task: "Coordinated mainnet launch with transparent genesis parameters", completed: false },
            { task: "Initial bootstrap nodes operational across regions", completed: false },
            { task: "Official block explorer deployment (open-source)", completed: false },
            { task: "Desktop wallet releases (Windows, macOS, Linux)", completed: false }
          ]
        },
        {
          title: "First 30 Days",
          items: [
            { task: "24/7 network monitoring and incident response", completed: false },
            { task: "Daily status reports to community", completed: false },
            { task: "Rapid response to any network issues", completed: false },
            { task: "Exchange listing activations (post-stabilization)", completed: false }
          ]
        }
      ],
      successCriteria: [
        "500+ mainnet nodes in first week",
        "99.5%+ network uptime",
        "Average block time within 10-15 seconds",
        "No consensus failures or chain splits"
      ]
    },
    {
      phase: "Phase 4",
      title: "Expansion (Q2-Q4 2027)",
      status: "upcoming",
      quarters: [
        {
          title: "Q2 2027",
          items: [
            { task: "Light client protocol (SPV) specification and implementation", completed: false },
            { task: "Signature aggregation research and prototyping", completed: false },
            { task: "Mobile wallet SDK development", completed: false }
          ]
        },
        {
          title: "Q3 2027",
          items: [
            { task: "Mobile wallet releases (iOS App Store, Google Play)", completed: false },
            { task: "Hardware wallet integrations (Ledger, Trezor)", completed: false },
            { task: "Pruning mode optimization (target: 100 GB storage)", completed: false }
          ]
        },
        {
          title: "Q4 2027",
          items: [
            { task: "Developer documentation and API reference", completed: false },
            { task: "Third-party integration toolkit", completed: false },
            { task: "First developer grants awarded", completed: false },
            { task: "Signature compression (target: 50% reduction)", completed: false }
          ]
        }
      ]
    },
    {
      phase: "Phase 5",
      title: "Ecosystem (2028+)",
      status: "upcoming",
      sections: [
        {
          title: "Smart Contract Layer",
          items: [
            { task: "Post-quantum VM design specification (Q1-Q2 2028)", completed: false },
            { task: "VM prototype and testnet deployment (Q3-Q4 2028)", completed: false },
            { task: "Mainnet smart contract activation (Q1 2029)", completed: false }
          ]
        },
        {
          title: "Advanced Features",
          items: [
            { task: "Privacy enhancements (confidential transactions research)", completed: false },
            { task: "Cross-chain bridges (quantum-resistant relay protocols)", completed: false },
            { task: "Layer 2 solutions (rollups, state channels)", completed: false },
            { task: "Interoperability standards", completed: false }
          ]
        },
        {
          title: "Ecosystem Growth",
          items: [
            { task: "Developer grants program ($1M+ annual budget)", completed: false },
            { task: "DApp incubator program", completed: false },
            { task: "Educational initiatives and workshops", completed: false },
            { task: "Enterprise adoption partnerships", completed: false }
          ]
        }
      ]
    },
    {
      phase: "Phase 6",
      title: "Long-Term Research (2029+)",
      status: "upcoming",
      items: [
        { task: "Post-quantum zero-knowledge proofs", completed: false },
        { task: "Quantum random number generation integration", completed: false },
        { task: "Proof-of-stake research (quantum-resistant consensus)", completed: false },
        { task: "Cryptographic agility framework (algorithm migration paths)", completed: false }
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

              {/* Render quarters if they exist */}
              {phase.quarters && (
                <div className="space-y-8">
                  {phase.quarters.map((quarter, qIndex) => (
                    <div key={qIndex}>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">{quarter.title}</h4>
                      <div className="space-y-4">
                        {quarter.items.map((item, itemIndex) => (
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
              )}

              {/* Render sections if they exist */}
              {phase.sections && (
                <div className="space-y-8">
                  {phase.sections.map((section, sIndex) => (
                    <div key={sIndex}>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h4>
                      <div className="space-y-4">
                        {section.items.map((item, itemIndex) => (
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
              )}

              {/* Render simple items if they exist */}
              {phase.items && (
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
              )}

              {/* Success Criteria */}
              {phase.successCriteria && (
                <div className="mt-8 p-6 bg-[#00E599]/5 border-2 border-[#00E599]/20 rounded-xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#00E599]" />
                    Success Criteria
                  </h4>
                  <ul className="space-y-2">
                    {phase.successCriteria.map((criteria, cIndex) => (
                      <li key={cIndex} className="text-gray-700 flex items-start gap-2">
                        <span className="text-[#00E599] mt-1">•</span>
                        <span>{criteria}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
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
