const supplyRows = [
  { year: "Year 1", reward: "50 QUA", emission: "263.8M", cumulative: "263.8M", highlight: false },
  { year: "Year 2", reward: "42.5 QUA", emission: "223.4M", cumulative: "487.2M", highlight: false },
  { year: "Year 5", reward: "26.1 QUA", emission: "137.2M", cumulative: "975.8M", highlight: false },
  { year: "Year 10", reward: "9.85 QUA", emission: "51.8M", cumulative: "1.24B", highlight: false },
  { year: "Year 20+", reward: "2 QUA (floor)", emission: "10.5M", cumulative: "~1.75B", highlight: true },
];

const feeRows = [
  { label: "Burned (destroyed)", pct: "50%", color: "#ff6060", bar: 50 },
  { label: "Block Proposer", pct: "35%", color: "#00E599", bar: 35 },
  { label: "Ecosystem Fund (QEF)", pct: "15%", color: "#8a8a8a", bar: 15 },
];

const keyParams = [
  { k: "Initial reward", v: "50 QUA / block" },
  { k: "Annual decay", v: "−15% per year" },
  { k: "Perpetual floor", v: "2 QUA / block" },
  { k: "Fee burn rate", v: "50% destroyed" },
  { k: "BFT slot time", v: "6 seconds" },
  { k: "Min tx fee", v: "0.0001 QUA" },
];

export default function Tokenomics() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16 max-w-2xl">
        <span className="section-label">Tokenomics</span>
        <h2
          className="text-5xl sm:text-6xl font-bold leading-[1.0] tracking-tight text-white mt-2"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          QUA is Gas,
          <br />
          <span className="text-[#00E599]">Not Currency.</span>
        </h2>
        <p className="mt-6 text-[#8a8a8a] text-lg leading-relaxed font-light">
          QUA pays for execution on-chain. Agents settle in USDC/USDT via the
          signed payload field. QUA never competes with stablecoins — it is the
          gas that powers the AI agent economy.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Left: Key params + fee split */}
        <div className="space-y-6">
          {/* Key params */}
          <div className="card-dark p-6">
            <h3
              className="text-sm font-semibold text-white mb-5 uppercase tracking-wider"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Key Parameters
            </h3>
            <div className="space-y-3">
              {keyParams.map((p) => (
                <div key={p.k} className="flex items-center justify-between py-2 border-b border-[rgba(255,255,255,0.04)] last:border-0">
                  <span className="text-sm text-[#8a8a8a]">{p.k}</span>
                  <span
                    className="text-sm font-semibold text-white"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {p.v}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Fee distribution */}
          <div className="card-dark p-6">
            <h3
              className="text-sm font-semibold text-white mb-5 uppercase tracking-wider"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Fee Distribution
            </h3>
            <div className="space-y-4">
              {feeRows.map((row) => (
                <div key={row.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm text-[#8a8a8a]">{row.label}</span>
                    <span
                      className="text-sm font-bold"
                      style={{ color: row.color, fontFamily: "var(--font-mono)" }}
                    >
                      {row.pct}
                    </span>
                  </div>
                  <div className="h-1.5 bg-[#161616] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${row.bar}%`, backgroundColor: row.color, opacity: 0.7 }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs text-[#4a4a4a] leading-relaxed">
              At 2B+ annual transactions (Year 15), fee burn may exceed new emission
              — making QUA net deflationary.
            </p>
          </div>
        </div>

        {/* Right: Supply schedule table */}
        <div className="card-dark p-6">
          <h3
            className="text-sm font-semibold text-white mb-5 uppercase tracking-wider"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Emission Schedule
          </h3>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  {["Year", "Reward", "Emission", "Cumulative"].map((h) => (
                    <th
                      key={h}
                      className="text-left text-[9px] text-[#4a4a4a] uppercase tracking-widest pb-3 pr-4 font-normal"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {supplyRows.map((row) => (
                  <tr
                    key={row.year}
                    className={`border-t border-[rgba(255,255,255,0.04)] ${
                      row.highlight ? "text-[#00E599]" : ""
                    }`}
                  >
                    <td className="py-3 pr-4 text-white font-medium" style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>{row.year}</td>
                    <td className="py-3 pr-4 text-[#8a8a8a]" style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>{row.reward}</td>
                    <td className="py-3 pr-4 text-[#8a8a8a]" style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>{row.emission}</td>
                    <td className="py-3 text-[#8a8a8a]" style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>{row.cumulative}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-[rgba(0,229,153,0.04)] border border-[rgba(0,229,153,0.1)]">
            <p className="text-xs text-[#8a8a8a] leading-relaxed">
              No ICO. No VC allocation. QUA is distributed exclusively through
              BFT block rewards and a genesis allocation to founding validators.
              No unlock cliff. No dump schedule.
            </p>
          </div>

          {/* Treasury address */}
          <div className="mt-4">
            <span className="text-[9px] text-[#4a4a4a] uppercase tracking-widest block mb-1.5" style={{ fontFamily: "var(--font-mono)" }}>
              3-of-5 Treasury Multisig
            </span>
            <code
              className="text-xs text-[#4a4a4a] break-all"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              ms69216b1d10425689704d5ae3b2a4aa17049f59b1
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
