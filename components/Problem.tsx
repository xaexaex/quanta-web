export default function Problem() {
  const comparison = [
    {
      label: "HNDL Campaigns",
      sig: "Legacy (ECDSA/RSA)",
      hash: "Vulnerable",
      status: "vulnerable",
      note: "Harvest Now, Decrypt Later. Adversaries are actively recording encrypted traffic.",
    },
    {
      label: "Shor's Algorithm",
      sig: "Elliptic Curves",
      hash: "Grover's Vector",
      status: "vulnerable",
      note: "Will break all non-quantum cryptography on a sufficiently powerful machine.",
    },
    {
      label: "Quanta Network",
      sig: "Falcon-512",
      hash: "SHA3-256",
      status: "safe",
      note: "NIST-standardized lattice cryptography — immune to HNDL and Shor's algorithm.",
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-transparent">
      
      {/* Top Centered Text */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <span className="section-label inline-block mb-4">The Threat</span>
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-black mb-8"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          The Quantum Threat is Not Future.
          <br className="hidden sm:block" />
          <span className="inline-block mt-3 text-[#C4ED5F] bg-black px-6 py-2 shadow-2xl rounded-xl -rotate-2">
            It&apos;s Now.
          </span>
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-6 font-light max-w-2xl mx-auto">
          <strong>Harvest Now, Decrypt Later (HNDL)</strong> campaigns are already active.
          Nation-state adversaries harvest encrypted data today,
          planning to decrypt them when quantum computers become capable enough.
        </p>
        <p className="text-gray-500 leading-relaxed font-light max-w-2xl mx-auto">
          Every legacy signature scheme will eventually fall to Shor&apos;s algorithm.
          Quanta was built from day one with NIST-standardized cryptography to be completely immune.
        </p>
      </div>

      {/* 3-Column Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {comparison.map((row) => (
          <div
            key={row.label}
            className={`group relative flex flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
              row.status === "safe"
                ? "bg-black text-white shadow-[0_20px_40px_rgba(196,237,95,0.15)] ring-2 ring-[#C4ED5F]"
                : "bg-white border border-[rgba(0,0,0,0.08)] shadow-xl shadow-[rgba(0,0,0,0.03)] hover:shadow-2xl hover:border-[rgba(0,0,0,0.15)]"
            }`}
          >
            {/* Top Badge */}
            <div className="mb-8">
              <span
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                  row.status === "safe"
                    ? "bg-[#C4ED5F] text-black"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {row.status === "safe" && <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse-dot" />}
                {row.status === "safe" ? "Quantum-Safe" : "Active Threat"}
              </span>
            </div>

            {/* Title & Desc */}
            <div className="mb-10 flex-1">
              <h3
                className={`text-2xl font-bold mb-4 ${row.status === "safe" ? "text-white" : "text-black"}`}
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {row.label}
              </h3>
              <p className={`text-sm leading-relaxed font-light ${row.status === "safe" ? "text-gray-300" : "text-gray-600"}`}>
                {row.note}
              </p>
            </div>

            {/* Bottom Specs */}
            <div className={`pt-6 border-t ${row.status === "safe" ? "border-white/10" : "border-[rgba(0,0,0,0.06)]"}`}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className={`block text-[10px] uppercase tracking-widest font-mono mb-2 ${row.status === "safe" ? "text-gray-500" : "text-gray-400"}`}>
                    Signature
                  </span>
                  <span className={`text-sm font-bold font-mono ${row.status === "safe" ? "text-[#C4ED5F]" : "text-black"}`}>
                    {row.sig}
                  </span>
                </div>
                <div>
                  <span className={`block text-[10px] uppercase tracking-widest font-mono mb-2 ${row.status === "safe" ? "text-gray-500" : "text-gray-400"}`}>
                    Hash
                  </span>
                  <span className={`text-sm font-bold font-mono ${row.status === "safe" ? "text-[#C4ED5F]" : "text-black"}`}>
                    {row.hash}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p
        className="mt-12 text-center text-[10px] text-gray-400 leading-relaxed uppercase tracking-widest"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        Source: NIST Post-Quantum Cryptography Standardization — FIPS 206 (ML-DSA / Falcon)
      </p>
    </section>
  );
}
