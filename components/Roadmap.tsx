const milestones = [
  {
    quarter: "Q1 2026",
    title: "Testnet Launch",
    items: [
      "Core blockchain, P2P, REST API, RPC",
      "HD Wallet (BIP39/BIP32)",
      "Multisig (M-of-N Falcon-512)",
      "Treasury Multisig live on-chain",
      "Docker image + monitoring",
    ],
    status: "done",
  },
  {
    quarter: "Q2 2026",
    title: "Public Testnet",
    items: [
      "91,000+ blocks, 2 active validators",
      "Block explorer at scan.quantachain.org",
      "Chrome wallet extension",
      "External security audits",
      "Developer SDK and tooling",
    ],
    status: "active",
  },
  {
    quarter: "Q3 2026",
    title: "Security Hardening",
    items: [
      "Comprehensive protocol audit",
      "Penetration testing",
      "Bug bounty program",
      "Protocol finalization",
    ],
    status: "upcoming",
  },
  {
    quarter: "Q4 2026",
    title: "Mainnet Preparation",
    items: [
      "Code freeze",
      "Genesis configuration",
      "21-validator bootstrap",
      "Desktop wallets",
      "Block explorer v2",
    ],
    status: "upcoming",
  },
  {
    quarter: "Q1 2027",
    title: "Mainnet Genesis",
    items: [
      "Genesis event",
      "Production wallets",
      "Exchange integrations",
      "AI agent SDK v1",
    ],
    status: "upcoming",
  },
];

export default function Roadmap() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16 max-w-2xl">
        <span className="section-label">Roadmap</span>
        <h2
          className="text-5xl sm:text-6xl font-bold leading-[1.0] tracking-tight text-white mt-2"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Building Toward
          <br />
          <span className="text-[#00E599]">Mainnet 2027.</span>
        </h2>
      </div>

      {/* Desktop: horizontal timeline */}
      <div className="hidden lg:block overflow-x-auto pb-4">
        <div className="flex gap-0 min-w-max">
          {milestones.map((m, i) => (
            <div key={m.quarter} className="flex flex-col items-start" style={{ width: 240 }}>
              {/* Connector line + dot */}
              <div className="flex items-center w-full mb-6">
                <div
                  className={`w-3 h-3 rounded-full flex-shrink-0 z-10 ${
                    m.status === "done"
                      ? "bg-[#00E599]"
                      : m.status === "active"
                      ? "bg-[#00E599] animate-pulse-dot ring-4 ring-[rgba(0,229,153,0.15)]"
                      : "bg-[#2a2a2a] border border-[rgba(255,255,255,0.15)]"
                  }`}
                />
                {i < milestones.length - 1 && (
                  <div
                    className="flex-1 h-px"
                    style={{
                      background:
                        m.status === "done"
                          ? "rgba(0,229,153,0.4)"
                          : "rgba(255,255,255,0.08)",
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="pr-8">
                <span
                  className="text-[9px] text-[#4a4a4a] uppercase tracking-widest block mb-1"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {m.quarter}
                </span>
                <h3
                  className={`text-base font-bold mb-3 ${
                    m.status === "done" || m.status === "active"
                      ? "text-white"
                      : "text-[#4a4a4a]"
                  }`}
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {m.title}
                  {m.status === "active" && (
                    <span
                      className="ml-2 text-[9px] font-mono text-[#00E599] uppercase tracking-wider"
                    >
                      Active
                    </span>
                  )}
                </h3>
                <ul className="space-y-1.5">
                  {m.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        className={`mt-1 w-1 h-1 rounded-full flex-shrink-0 ${
                          m.status === "done"
                            ? "bg-[#00E599]"
                            : m.status === "active"
                            ? "bg-[rgba(0,229,153,0.5)]"
                            : "bg-[#2a2a2a]"
                        }`}
                      />
                      <span
                        className={`text-xs leading-relaxed ${
                          m.status === "done" || m.status === "active"
                            ? "text-[#8a8a8a]"
                            : "text-[#3a3a3a]"
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="lg:hidden space-y-6">
        {milestones.map((m) => (
          <div key={m.quarter} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div
                className={`w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1 ${
                  m.status === "done"
                    ? "bg-[#00E599]"
                    : m.status === "active"
                    ? "bg-[#00E599] animate-pulse-dot"
                    : "bg-[#2a2a2a] border border-[rgba(255,255,255,0.1)]"
                }`}
              />
              <div className="flex-1 w-px bg-[rgba(255,255,255,0.06)] mt-2" />
            </div>
            <div className="pb-6">
              <span
                className="text-[9px] text-[#4a4a4a] uppercase tracking-widest block mb-0.5"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {m.quarter}
              </span>
              <h3
                className={`text-base font-bold mb-2 ${
                  m.status !== "upcoming" ? "text-white" : "text-[#4a4a4a]"
                }`}
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {m.title}
              </h3>
              <ul className="space-y-1">
                {m.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${
                        m.status !== "upcoming" ? "bg-[rgba(0,229,153,0.4)]" : "bg-[#2a2a2a]"
                      }`}
                    />
                    <span
                      className={`text-xs ${
                        m.status !== "upcoming" ? "text-[#8a8a8a]" : "text-[#3a3a3a]"
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
