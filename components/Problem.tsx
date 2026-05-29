export default function Problem() {
  const comparison = [
    {
      label: "Bitcoin / Ethereum",
      sig: "ECDSA",
      hash: "SHA2",
      status: "vulnerable",
      note: "Broken by Shor's algorithm on a fault-tolerant quantum computer",
    },
    {
      label: "Most L1 chains",
      sig: "Ed25519",
      hash: "Keccak",
      status: "vulnerable",
      note: "Different curve, same quantum vulnerability",
    },
    {
      label: "Quanta",
      sig: "Falcon-512",
      hash: "SHA3-256",
      status: "safe",
      note: "NIST-standardized lattice signature — quantum-resistant by design",
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left: Text */}
        <div className="lg:col-span-5">
          <span className="section-label">The Threat</span>
          <h2
            className="text-4xl sm:text-5xl font-bold leading-[1.05] tracking-tight text-white mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            The Quantum Threat
            is Not Future.
            <span className="text-[#00E599]"> It&apos;s Now.</span>
          </h2>
          <p className="text-[#8a8a8a] text-lg leading-relaxed mb-6 font-light">
            &ldquo;Store now, decrypt later&rdquo; attacks are already happening.
            Nation-state adversaries harvest encrypted blockchain transactions today,
            planning to decrypt them when quantum computers become capable enough.
          </p>
          <p className="text-[#8a8a8a] leading-relaxed font-light">
            Every major blockchain — Bitcoin, Ethereum, Solana — uses ECDSA or
            Ed25519 signatures that Shor&apos;s algorithm will break on a sufficiently
            powerful quantum machine. Quanta was built from day one to be immune.
          </p>
        </div>

        {/* Right: Comparison table */}
        <div className="lg:col-span-7">
          <div className="space-y-3">
            {comparison.map((row) => (
              <div
                key={row.label}
                className={`rounded-xl border p-5 transition-all duration-150 ${
                  row.status === "safe"
                    ? "border-[rgba(0,229,153,0.2)] bg-[rgba(0,229,153,0.03)]"
                    : "border-[rgba(255,255,255,0.06)] bg-[#0f0f0f]"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span
                    className="text-sm font-semibold text-white"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {row.label}
                  </span>
                  <span
                    className={`text-xs font-mono px-2.5 py-1 rounded-full uppercase tracking-wider flex-shrink-0 ${
                      row.status === "safe"
                        ? "bg-[rgba(0,229,153,0.1)] text-[#00E599]"
                        : "bg-[rgba(255,60,60,0.1)] text-[#ff6060]"
                    }`}
                  >
                    {row.status === "safe" ? "Quantum-Safe" : "Vulnerable"}
                  </span>
                </div>
                <div className="flex gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[9px] text-[#4a4a4a] uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Sig
                    </span>
                    <span
                      className={`text-xs font-mono ${
                        row.status === "safe" ? "text-[#00E599]" : "text-[#ff6060]"
                      }`}
                    >
                      {row.sig}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[9px] text-[#4a4a4a] uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Hash
                    </span>
                    <span
                      className={`text-xs font-mono ${
                        row.status === "safe" ? "text-[#00E599]" : "text-[#ff6060]"
                      }`}
                    >
                      {row.hash}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#4a4a4a] leading-relaxed">{row.note}</p>
              </div>
            ))}
          </div>

          <p
            className="mt-5 text-xs text-[#4a4a4a] leading-relaxed"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Source: NIST Post-Quantum Cryptography Standardization — FIPS 206 (ML-DSA / Falcon)
          </p>
        </div>
      </div>
    </section>
  );
}
