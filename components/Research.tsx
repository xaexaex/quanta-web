"use client";

import { useState } from "react";
import { ArrowUpRight, Newspaper, FileText } from "lucide-react";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const activePaper = papers[activeIndex];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="divider mb-16" />

      {/* Header */}
      <div className="mb-20">
        <span className="section-label">Research &amp; Publications</span>
        <h2
          className="text-4xl sm:text-5xl font-bold text-black mb-6 mt-2 leading-tight"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Peer-Reviewed Architecture
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl leading-relaxed font-light mb-8 max-w-3xl">
          Operating at the forefront of post-quantum cryptography, distributed consensus, and theoretical physics.
          Three publications on Zenodo, peer-reviewed and open-access.
        </p>
      </div>

      {/* Digital Archive Split-Pane */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        
        {/* Left Pane: Index List */}
        <div className="w-full lg:w-5/12 flex flex-col gap-3">
           <div className="text-[10px] uppercase font-mono tracking-widest text-gray-400 mb-2 px-2">Publication Index</div>
           {papers.map((paper, idx) => (
             <button
                key={paper.doi}
                onClick={() => setActiveIndex(idx)}
                className={`text-left w-full p-6 rounded-2xl transition-all duration-300 border ${
                  idx === activeIndex 
                    ? "bg-[#050505] border-black text-white shadow-xl scale-[1.02] ring-1 ring-[#C4ED5F]/20" 
                    : "bg-white border-[rgba(0,0,0,0.06)] hover:border-[rgba(0,0,0,0.15)] text-gray-600 hover:text-black hover:bg-gray-50/50"
                }`}
             >
                <div className="flex items-start gap-4">
                   <div className={`mt-1 flex-shrink-0 transition-colors duration-300 ${idx === activeIndex ? "text-[#C4ED5F]" : "text-gray-300"}`}>
                      <FileText className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className={`text-sm sm:text-base font-bold leading-snug mb-3 transition-colors duration-300 ${idx === activeIndex ? "text-white" : "text-black"}`}>
                       {paper.title}
                     </h3>
                     <span className={`text-[10px] font-mono tracking-widest uppercase transition-colors duration-300 ${idx === activeIndex ? "text-gray-400" : "text-gray-400"}`}>
                       {paper.date}
                     </span>
                   </div>
                </div>
             </button>
           ))}
        </div>

        {/* Right Pane: Document Viewer */}
        <div className="w-full lg:w-7/12 flex flex-col">
           <div className="text-[10px] uppercase font-mono tracking-widest text-gray-400 mb-2 px-2 hidden lg:block">Document Viewer</div>
           <div className="flex-1 bg-white border border-[rgba(0,0,0,0.06)] rounded-3xl p-8 sm:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.03)] flex flex-col relative overflow-hidden group">
              
              {/* Subtle accent line on top */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C4ED5F] to-transparent opacity-40" />

              <div className="flex items-center gap-3 mb-8">
                <span className="text-[10px] bg-[#C4ED5F]/10 text-[#59751e] border border-[#C4ED5F]/40 uppercase tracking-widest font-bold px-3 py-1 rounded-full" style={{ fontFamily: "var(--font-mono)" }}>
                  {activePaper.tag}
                </span>
              </div>

              {/* Added a key to force re-animation when activeIndex changes */}
              <div key={activeIndex} className="animate-in fade-in slide-in-from-bottom-2 duration-500 flex-1 flex flex-col">
                <h3 className="text-2xl sm:text-3xl font-bold text-black leading-snug mb-8" style={{ fontFamily: "var(--font-syne)" }}>
                  {activePaper.title}
                </h3>

                <div className="flex-1 mb-12">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-4">Abstract</h4>
                  <p className="text-gray-600 leading-relaxed font-light sm:text-lg">
                    {activePaper.abstract}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-[rgba(0,0,0,0.06)]">
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase tracking-widest font-mono mb-1">DOI</span>
                    <span className="text-sm font-mono text-black font-semibold">{activePaper.doi}</span>
                  </div>
                  
                  <a
                      href={activePaper.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#050505] text-[#C4ED5F] rounded-xl text-sm font-bold hover:shadow-[0_0_20px_rgba(196,237,95,0.3)] transition-all hover:-translate-y-1"
                  >
                      Open Publication
                      <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

           </div>
        </div>
      </div>

      {/* Featured Editorial (Blog highlight) */}
      <div className="mt-16">
        <a
          href="https://www.quantalabs.cc/blog/ecdsa-liability-2026"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col md:flex-row items-start md:items-center justify-between gap-8 bg-[#050505] p-8 sm:p-10 rounded-3xl hover:border-[rgba(196,237,95,0.4)] border border-[rgba(255,255,255,0.08)] transition-all duration-500 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Glow */}
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#C4ED5F]/[0.05] blur-[100px] rounded-full pointer-events-none transform -translate-y-1/2" />

          <div className="flex-1 relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-[10px] bg-[#C4ED5F] text-[#000000] uppercase tracking-widest font-black px-3 py-1.5 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(196,237,95,0.3)]" style={{ fontFamily: "var(--font-mono)" }}>
                <Newspaper className="w-3.5 h-3.5" />
                Featured Editorial
              </span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>April 2026</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>12 min read</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-4 group-hover:text-[#C4ED5F] transition-colors" style={{ fontFamily: "var(--font-syne)" }}>
              Why Your Crypto Startup&apos;s ECDSA Keys Are a Liability in 2026
            </h3>
            <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed max-w-3xl">
              Three papers dropped in one week of March 2026 that rewrote the quantum threat timeline. Google reduced the qubit requirement from 9M to 500K. A second paper put it at 10,000. What that means for every ECDSA-secured blockchain.
            </p>
          </div>
          <div className="shrink-0 relative z-10 hidden sm:block">
             <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#C4ED5F] group-hover:text-black group-hover:scale-110 transition-all text-white">
               <ArrowUpRight className="w-5 h-5" />
             </div>
          </div>
        </a>
      </div>
    </section>
  );
}
