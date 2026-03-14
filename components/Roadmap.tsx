import { CheckCircle2, Circle, Clock, GitFork } from "lucide-react";

export default function Roadmap() {
  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "Testnet Preparation (Q1 2026)",
      status: "In Progress",
      progress: 35,
      targetDate: "March 2026",
      items: [
        { task: "Testnet node development and deployment", completed: true },
        { task: "Internal testing and validation", completed: true },
        { task: "Private testnet launch for community", completed: false },
        { task: "Extensive internal security testing", completed: false },
        { task: "Network monitoring and health check systems", completed: false },
        { task: "Community onboarding materials and guides", completed: false }
      ]
    },
    {
      phase: "Phase 2",
      title: "Public Testnet Launch (Q2 2026)",
      status: "upcoming",
      targetDate: "June 2026",
      sections: [
        {
          title: "Launch & Operations",
          items: [
            { task: "Public testnet launch with geographically distributed bootstrap nodes", completed: false },
            { task: "Real-world stress testing and network validation", completed: false },
            { task: "Active community engagement and developer onboarding", completed: false },
            { task: "Performance monitoring and optimization", completed: false }
          ]
        },
        {
          title: "Security Audits",
          items: [
            { task: "External security audits and vulnerability assessments", completed: false },
            { task: "Bug bounty program with progressive rewards", completed: false },
            { task: "Network resilience testing under various conditions", completed: false },
            { task: "Protocol refinement based on real-world data", completed: false }
          ]
        }
      ],
      successCriteria: [
        "30+ active testnet nodes from diverse regions",
        "10,000+ transactions validated successfully",
        "Zero critical vulnerabilities in production code",
        "30+ days of continuous stable operation"
      ]
    },
    {
      phase: "Phase 3",
      title: "Security Hardening (Q3 2026)",
      status: "upcoming",
      targetDate: "September 2026",
      items: [
        { task: "Address all testnet findings and vulnerabilities", completed: false },
        { task: "Comprehensive security audits and penetration testing", completed: false },
        { task: "Code optimization and protocol finalization", completed: false },
        { task: "Final security review and vulnerability patches", completed: false },
        { task: "Documentation updates and security best practices", completed: false },
        { task: "Emergency response procedures and incident management", completed: false }
      ]
    },
    {
      phase: "Phase 4",
      title: "Mainnet Preparation (Q4 2026)",
      status: "upcoming",
      targetDate: "December 2026",
      items: [
        { task: "Code freeze and final audit", completed: false },
        { task: "Genesis block configuration and launch parameters", completed: false },
        { task: "Production bootstrap node deployment across regions", completed: false },
        { task: "Desktop wallet release for all major platforms", completed: false },
        { task: "Block explorer deployment and transaction indexing", completed: false },
        { task: "Exchange partnership discussions and integration support", completed: false }
      ]
    },
    {
      phase: "Phase 5",
      title: "Mainnet Launch (Q1 2027)",
      status: "upcoming",
      targetDate: "March 2027",
      sections: [
        {
          title: "Genesis Event",
          items: [
            { task: "Mainnet genesis with transparent, auditable parameters", completed: false },
            { task: "Multi-region bootstrap node activation", completed: false },
            { task: "Full-featured block explorer and analytics dashboard", completed: false },
            { task: "Production wallet release with comprehensive security", completed: false }
          ]
        },
        {
          title: "Post-Launch (First 30 Days)",
          items: [
            { task: "Continuous network monitoring and health tracking", completed: false },
            { task: "Daily community updates and transparency reports", completed: false },
            { task: "Rapid incident response and network optimization", completed: false },
            { task: "Exchange integration and listing coordination", completed: false }
          ]
        }
      ],
      successCriteria: [
        "25+ independent mainnet nodes within first month",
        "95%+ network uptime and stability",
        "Block time consistency within 25-35 seconds",
        "Zero consensus failures or chain reorganizations"
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
        <div className="space-y-6 sm:space-y-8 mx-2 sm:mx-4 md:mx-8">
          {roadmapPhases.map((phase, index) => (
            <div 
              key={index}
              className={`bg-white border-2 rounded-xl sm:rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-300 ${
                phase.status === 'In Progress' 
                  ? 'border-[#00E599] shadow-[0_0_30px_rgba(0,229,153,0.2)]' 
                  : phase.status === 'Completed'
                  ? 'border-green-500/30 bg-green-50/50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
                <div>
                  <div className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-widest mb-2">
                    {phase.phase}
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                    {phase.title}
                  </h3>
                  {phase.targetDate && (
                    <div className="text-xs sm:text-sm text-gray-600 font-semibold mt-2">
                      Target: {phase.targetDate}
                    </div>
                  )}
                </div>
                {getStatusBadge(phase.status)}
              </div>

              {/* Progress Bar */}
              {phase.progress !== undefined && (
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm font-bold text-gray-700">Phase Progress</span>
                    <span className="text-xs sm:text-sm font-bold text-[#00E599]">{phase.progress}%</span>
                  </div>
                  <div className="w-full h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#00E599] to-[#00cc88] transition-all duration-500 rounded-full"
                      style={{ width: `${phase.progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Render sections if they exist */}
              {phase.sections && (
                <div className="space-y-6 sm:space-y-8">
                  {phase.sections.map((section, sIndex) => (
                    <div key={sIndex}>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{section.title}</h4>
                      <div className="space-y-3 sm:space-y-4">
                        {section.items.map((item, itemIndex) => (
                          <div 
                            key={itemIndex}
                            className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors"
                          >
                            {item.completed ? (
                              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#00E599] flex-shrink-0" />
                            ) : (
                              <Circle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 flex-shrink-0" />
                            )}
                            <span className={`text-sm sm:text-base md:text-lg ${item.completed ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
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
                <div className="space-y-3 sm:space-y-4">
                  {phase.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      {item.completed ? (
                        <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#00E599] flex-shrink-0" />
                      ) : (
                        <Circle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 flex-shrink-0" />
                      )}
                      <span className={`text-sm sm:text-base md:text-lg ${item.completed ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
                        {item.task}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Success Criteria */}
              {phase.successCriteria && (
                <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-[#00E599]/5 border-2 border-[#00E599]/20 rounded-lg sm:rounded-xl">
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00E599]" />
                    Success Criteria
                  </h4>
                  <ul className="space-y-2">
                    {phase.successCriteria.map((criteria, cIndex) => (
                      <li key={cIndex} className="text-sm sm:text-base text-gray-700 flex items-start gap-2">
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
        <div className="mt-12 sm:mt-16 bg-[#00E599] rounded-xl sm:rounded-[2rem] p-8 sm:p-12 md:p-16 mx-2 sm:mx-4 md:mx-8 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            Contribute to the Future
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-black/80 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            QUANTA is open source and community-driven. Join developers worldwide building quantum-resistant infrastructure.
          </p>
          <a 
            href="https://github.com/quantachain/quanta"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-bold text-[#00E599] bg-black rounded-full hover:bg-gray-900 transition-all hover:scale-105"
          >
            Start Contributing
            <GitFork className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
