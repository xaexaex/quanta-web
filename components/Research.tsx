import { ArrowUpRight, BookOpen, Newspaper } from "lucide-react";

const papers = [
  {
    tag: "Zenodo Publication",
    title: "QUANTA: Engineering a Production-Ready Post-Quantum Blockchain with Falcon-512 Lattice Signatures",
    abstract: "Design and implementation of Quantachain using NIST-standardized Falcon-512 lattice-based signatures for all transaction authentication and block proposals at the consensus layer.",
    date: "February 24, 2026",
    doi: "10.5281/zenodo.18753528",
    href: "https://doi.org/10.5281/zenodo.18753528",
  },
  {
    tag: "Zenodo Publication",
    title: "Quantum Temporal Order: Structural Inevitability of Modular Flow and the Problem of Time",
    abstract: "Framework for temporal ordering in quantum systems under causal ambiguity, connecting modular Hamiltonian flow with emergent time directionality in distributed protocols.",
    date: "March 3, 2026",
    doi: "10.5281/zenodo.18753529",
    href: "https://doi.org/10.5281/zenodo.18753528",
  },
  {
    tag: "Zenodo Publication",
    title: "Learning with Correlated Errors: A New Lattice Hard Problem with Worst-Case Reductions and Public-Key Encryption",
    abstract: "Introduction of LCE — a new lattice-based hard problem with worst-case to average-case reductions and an efficient public-key encryption scheme built from LCE hardness assumptions.",
    date: "March 11, 2026",
    doi: "10.5281/zenodo.18753530",
    href: "https://doi.org/10.5281/zenodo.18753528",
  },
];

export default function Research() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="divider mb-16" />

      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        <div className="lg:col-span-7">
          <span className="section-label">Research &amp; Publications</span>
          <h2
            className="text-4xl font-bold text-white mb-6 mt-2 leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Peer-Reviewed Architecture
          </h2>
          <p className="text-[#8a8a8a] text-lg leading-relaxed font-light mb-8">
            Operating at the forefront of post-quantum cryptography, distributed consensus, and theoretical physics.
            Three publications on Zenodo, peer-reviewed and open-access.
          </p>
        </div>
      </div>

      {/* All Publications Grid */}
      <div>
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-[rgba(255,255,255,0.04)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {papers.map((paper) => (
            <a
              key={paper.doi}
              href={paper.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-dark p-6 flex flex-col gap-3 hover:border-[rgba(0,229,153,0.2)] transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-[#4a4a4a] uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
                  {paper.tag}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#4a4a4a] group-hover:text-[#00E599] transition-colors" />
              </div>
              <h3 className="text-sm font-bold text-white leading-snug group-hover:text-[#00E599] transition-colors">
                {paper.title}
              </h3>
              <p className="text-xs text-[#4a4a4a] leading-relaxed flex-1">{paper.abstract}</p>
              <div className="pt-3 border-t border-[rgba(255,255,255,0.04)]">
                <span className="text-[9px] text-[#3a3a3a]" style={{ fontFamily: "var(--font-mono)" }}>
                  {paper.date} &mdash; DOI: {paper.doi}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Blog highlight */}
        <a
          href="https://www.quantalabs.cc/blog/ecdsa-liability-2026"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 card-dark p-7 hover:border-[rgba(0,229,153,0.2)] transition-all duration-300"
        >
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <Newspaper className="w-3.5 h-3.5 text-[#00E599]" />
              <span className="text-[9px] text-[#00E599] uppercase tracking-widest font-bold px-2 py-0.5 bg-[rgba(0,229,153,0.08)] rounded border border-[rgba(0,229,153,0.15)]" style={{ fontFamily: "var(--font-mono)" }}>
                Blog · Apr 2026
              </span>
              <span className="text-[9px] text-[#4a4a4a] uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>12 min read</span>
            </div>
            <h3 className="text-base font-bold text-white leading-snug mb-2 group-hover:text-[#00E599] transition-colors">
              Why Your Crypto Startup&apos;s ECDSA Keys Are a Liability in 2026
            </h3>
            <p className="text-xs text-[#4a4a4a] leading-relaxed max-w-2xl">
              Three papers dropped in one week of March 2026 that rewrote the quantum threat timeline. Google reduced the qubit requirement from 9M to 500K. A second paper put it at 10,000. What that means for every ECDSA-secured blockchain.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0 text-[#4a4a4a] group-hover:text-[#00E599] transition-colors">
            <span className="text-xs font-medium">Read on quantalabs.cc</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </a>
      </div>
    </section>
  );
}
