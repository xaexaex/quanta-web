import Image from "next/image";

/* ── Animated SVG: lattice signature illustration ── */
function LatticeIcon() {
  return (
    <svg viewBox="0 0 120 80" className="w-full h-full" fill="none" aria-hidden="true">
      <path
        d="M10,70 L30,30 L50,70 L70,30 L90,70 L110,30"
        stroke="rgba(0,229,153,0.25)"
        strokeWidth="1"
      />
      <path
        d="M10,30 L30,70 L50,30 L70,70 L90,30 L110,70"
        stroke="rgba(0,229,153,0.25)"
        strokeWidth="1"
      />
      {[30, 50, 70, 90].map((x, i) => (
        <circle key={i} cx={x} cy={i % 2 === 0 ? 30 : 70} r="3" fill="rgba(0,229,153,0.4)" />
      ))}
      <circle r="4" fill="#00E599">
        <animateMotion
          path="M10,70 L30,30 L50,70 L70,30 L90,70 L110,30 L90,70 L70,30 L50,70 L30,30 L10,70"
          dur="5s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

/* ── Animated SVG: escrow hash-lock ── */
function EscrowIcon() {
  return (
    <svg viewBox="0 0 120 80" className="w-full h-full" fill="none" aria-hidden="true">
      <rect x="45" y="15" width="30" height="35" rx="4" stroke="rgba(0,229,153,0.3)" strokeWidth="1" />
      <path d="M55,25 Q60,20 65,25" stroke="rgba(0,229,153,0.5)" strokeWidth="1" />
      <circle cx="60" cy="35" r="5" stroke="rgba(0,229,153,0.4)" strokeWidth="1" />
      <rect x="30" y="50" width="60" height="18" rx="3" fill="rgba(0,229,153,0.06)" stroke="rgba(0,229,153,0.2)" strokeWidth="1" />
      <circle cx="40" cy="59" r="2" fill="#00E599">
        <animate attributeName="opacity" values="1;0.2;1" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <line x1="47" y1="59" x2="80" y2="59" stroke="rgba(0,229,153,0.3)" strokeWidth="0.5" strokeDasharray="3 2" />
    </svg>
  );
}

/* ── Animated SVG: validator/consensus ── */
function ConsensusIcon() {
  const nodes = [
    { x: 60, y: 15 },
    { x: 100, y: 38 },
    { x: 85, y: 70 },
    { x: 35, y: 70 },
    { x: 20, y: 38 },
  ];
  return (
    <svg viewBox="0 0 120 90" className="w-full h-full" fill="none" aria-hidden="true">
      {nodes.map((a, i) =>
        nodes.slice(i + 1).map((b, j) => (
          <line key={`${i}-${j}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="rgba(0,229,153,0.1)" strokeWidth="0.75" />
        ))
      )}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={i === 0 ? 7 : 5}
          fill={i === 0 ? "rgba(0,229,153,0.15)" : "rgba(255,255,255,0.04)"}
          stroke={i === 0 ? "#00E599" : "rgba(255,255,255,0.15)"}
          strokeWidth="1"
        />
      ))}
      <circle cx={nodes[0].x} cy={nodes[0].y} r="3" fill="#00E599">
        <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/* ── Animated SVG: data/TPS bars ── */
function TPSIcon() {
  const bars = [40, 60, 30, 80, 50, 95, 65];
  return (
    <svg viewBox="0 0 120 70" className="w-full h-full" fill="none" aria-hidden="true">
      {bars.map((h, i) => (
        <rect
          key={i}
          x={10 + i * 15}
          y={70 - h * 0.6}
          width="10"
          height={h * 0.6}
          rx="2"
          fill={i === 5 ? "#00E599" : "rgba(0,229,153,0.2)"}
        >
          <animate
            attributeName="height"
            values={`${h * 0.6};${h * 0.7};${h * 0.6}`}
            dur={`${1.5 + i * 0.2}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            values={`${70 - h * 0.6};${70 - h * 0.7};${70 - h * 0.6}`}
            dur={`${1.5 + i * 0.2}s`}
            repeatCount="indefinite"
          />
        </rect>
      ))}
    </svg>
  );
}

const bentoCards = [
  {
    id: "01",
    title: "Falcon-512 Signatures",
    description:
      "NIST FIPS 206 lattice-based signatures. 897-byte public keys. Stateless, unlimited reuse, and immune to Shor's algorithm. Every transaction on Quanta is signed with Falcon-512.",
    visual: <LatticeIcon />,
    wide: true,
    image: "/falcon-lattice.png",
  },
  {
    id: "02",
    title: "BFT + DPoS Consensus",
    description:
      "Tendermint-style BFT finality with Delegated Proof of Stake. 7 validators on testnet, 21 at mainnet. Greater than 2/3 committee quorum required. 6-second BFT slot times.",
    visual: <ConsensusIcon />,
    wide: false,
    tall: true,
  },
  {
    id: "03",
    title: "AI Agent Native",
    description:
      "Every transaction carries a signed `payload: Vec<u8>` field. AI agents embed instructions, stablecoin intents, and data hashes directly in the transaction — signed by Falcon-512.",
    visual: null,
    wide: false,
    image: "/ai-network.png",
  },
  {
    id: "04",
    title: "Trustless Escrow",
    description:
      "Native Rust escrow templates compiled directly into the node binary. Zero VM overhead. Employer AI locks funds, worker AI claims with a preimage — atomically settled on-chain.",
    visual: <EscrowIcon />,
    wide: false,
  },
  {
    id: "05",
    title: "120+ TPS",
    description:
      "Parallel Rayon signature verification, LRU sig cache with 100k entries, bloom filter mempool. 1,200 transactions per block maximum. 2 MB block limit.",
    visual: <TPSIcon />,
    wide: true,
  },
  {
    id: "06",
    title: "Kyber-1024 Wallets",
    description:
      "Wallet files encrypted with post-quantum Kyber KEM + ChaCha20-Poly1305. HD wallets via BIP39/BIP32 Falcon key derivation. Your keys are safe from quantum attacks today.",
    visual: null,
    wide: false,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16">
        <span className="section-label">Architecture</span>
        <h2
          className="text-5xl sm:text-6xl font-bold leading-[1.0] tracking-tight text-white mt-2"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Engineered for<br />
          <span className="text-[#00E599]">Autonomous Markets.</span>
        </h2>
        <p className="mt-6 text-[#8a8a8a] text-lg max-w-xl leading-relaxed font-light">
          No virtual machine. No legacy cryptography. Native Rust templates and
          NIST-standardized post-quantum primitives — purpose-built for AI agents.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="bento-grid">
        {bentoCards.map((card) => (
          <div
            key={card.id}
            className={`card-dark overflow-hidden flex flex-col ${
              card.wide ? "bento-wide" : ""
            } ${card.tall ? "bento-tall" : ""}`}
          >
            <div className="p-6 flex flex-col flex-1">
              {/* Number */}
              <span
                className="text-xs text-[#4a4a4a] mb-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {card.id}
              </span>

              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {card.title}
              </h3>
              <p className="text-sm text-[#8a8a8a] leading-relaxed font-light flex-1">
                {card.description}
              </p>

              {/* Visual area */}
              {card.image ? (
                <div className="mt-6 relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover opacity-60"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(15,15,15,0.8), transparent 60%)",
                    }}
                  />
                </div>
              ) : card.visual ? (
                <div className="mt-6 h-20 w-full">{card.visual}</div>
              ) : (
                <div className="mt-6 h-20 flex items-center">
                  <div
                    className="text-xs text-[#4a4a4a]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <span className="text-[#00E599]">fn</span>{" "}
                    wallet_encrypt(pubkey) {"{"}
                    <br />
                    &nbsp;&nbsp;Kyber1024::kem_enc(pubkey)
                    <br />
                    {"}"}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
