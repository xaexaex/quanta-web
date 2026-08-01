"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

/* ─────────────────────────────────────────────
   Live Chain Terminal — animated block feed
   Shows block production, tx hashes, BFT sigs
───────────────────────────────────────────── */

function randHex(len: number) {
  const chars = "0123456789abcdef";
  return Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

function randAddr() { return `0x${randHex(8)}…${randHex(4)}`; }
function randSig() { return `falcon_${randHex(12)}…`; }
function randTx() { return `0x${randHex(64)}`; }

type LogLine = {
  id: number;
  kind: "block" | "tx" | "sig" | "finalized" | "peer";
  text: string;
  accent?: boolean;
};

const INITIAL_HEIGHT = 91_247;

function buildBlockLines(height: number): LogLine[] {
  const h = height.toLocaleString();
  const hash = randHex(64);
  const proposer = randAddr();
  const txCount = 48 + Math.floor(Math.random() * 80);

  return [
    { id: Math.random(), kind: "block", text: `>  block #${h}  proposer=${proposer}  txs=${txCount}`, accent: true },
    { id: Math.random(), kind: "sig", text: `   sig[0] ${randSig()}` },
    { id: Math.random(), kind: "sig", text: `   sig[1] ${randSig()}` },
    { id: Math.random(), kind: "sig", text: `   sig[2] ${randSig()}` },
    { id: Math.random(), kind: "tx", text: `   tx  ${randTx().slice(0, 40)}…  +${(Math.random() * 0.009 + 0.001).toFixed(4)} QUA` },
    { id: Math.random(), kind: "tx", text: `   tx  ${randTx().slice(0, 40)}…  +${(Math.random() * 0.009 + 0.001).toFixed(4)} QUA` },
    { id: Math.random(), kind: "finalized", text: `*  finalized  hash=0x${hash.slice(0, 12)}…  quorum=5/7`, accent: true },
  ];
}

function LiveChainTerminal() {
  const [lines, setLines] = useState<LogLine[]>([]);
  const [blockHeight, setBlockHeight] = useState(INITIAL_HEIGHT);
  const [currentBlock, setCurrentBlock] = useState(INITIAL_HEIGHT);
  const containerRef = useRef<HTMLDivElement>(null);
  const heightRef = useRef(INITIAL_HEIGHT);
  const lineIdRef = useRef(0);

  // Boot sequence on mount
  useEffect(() => {
    const bootLines: LogLine[] = [
      { id: lineIdRef.current++, kind: "peer", text: "quanta-node v0.7.5 starting…" },
      { id: lineIdRef.current++, kind: "peer", text: "loading sled db at ./quanta_data" },
      { id: lineIdRef.current++, kind: "peer", text: `synced to height #${INITIAL_HEIGHT.toLocaleString()}` },
      { id: lineIdRef.current++, kind: "peer", text: "peers connected: 6  validators: 5/7" },
      { id: lineIdRef.current++, kind: "peer", text: "BFT proposer rotation active — slot=6s" },
      { id: lineIdRef.current++, kind: "peer", text: "falcon-512 sig cache warmed: 100k entries" },
      { id: lineIdRef.current++, kind: "peer", text: "" },
    ];
    setLines(bootLines);

    // Produce a new block every 6 seconds
    const interval = setInterval(() => {
      heightRef.current += 1;
      const newLines = buildBlockLines(heightRef.current).map(l => ({
        ...l,
        id: lineIdRef.current++,
      }));
      setBlockHeight(heightRef.current);
      setCurrentBlock(heightRef.current);
      setLines(prev => {
        const next = [...prev, ...newLines];
        // Keep last 40 lines to avoid memory blowup
        return next.slice(-40);
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines]);

  const colorFor = (kind: LogLine["kind"], accent?: boolean) => {
    if (accent && kind === "block") return "#C4ED5F";
    if (accent && kind === "finalized") return "#C4ED5F";
    if (kind === "sig") return "#6a8a7a";
    if (kind === "tx") return "#8a8a8a";
    if (kind === "peer") return "#5a5a5a";
    return "#8a8a8a";
  };

  return (
    <div
      className="relative w-full rounded-2xl border border-white/10 overflow-hidden"
      style={{
        background: "#050505",
        boxShadow: "0 0 80px rgba(196,237,95,0.06), 0 40px 80px rgba(0,0,0,0.6)",
      }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b border-white/10"
        style={{ background: "#0a0a0a" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f56" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#27c93f" }} />
        </div>
        <div
          className="flex items-center gap-2 text-[10px] tracking-widest"
          style={{ fontFamily: "var(--font-mono)", color: "#4a4a4a" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#C4ED5F", boxShadow: "0 0 6px #C4ED5F", animation: "pulse-glow 2s ease-in-out infinite" }}
          />
          quantachain-node — block #{blockHeight.toLocaleString()}
        </div>
        <div style={{ width: 44 }} />
      </div>

      {/* Live stats row */}
      <div
        className="grid grid-cols-4 border-b border-white/10"
        style={{ background: "transparent" }}
      >
        {[
          { label: "HEIGHT", value: currentBlock.toLocaleString() },
          { label: "SLOT", value: "6s BFT" },
          { label: "PEERS", value: "6 / 7" },
          { label: "GAS", value: "<$0.001" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center py-2.5 border-r border-[rgba(0,0,0,0.04)] last:border-0"
          >
            <span
              className="text-[8px] tracking-widest mb-0.5"
              style={{ fontFamily: "var(--font-mono)", color: "#4a4a4a" }}
            >
              {stat.label}
            </span>
            <span
              className="text-[11px] font-bold"
              style={{ fontFamily: "var(--font-mono)", color: "#C4ED5F" }}
            >
              {stat.value}
            </span>
          </div>
        ))}
      </div>

      {/* Log stream */}
      <div
        ref={containerRef}
        className="overflow-y-auto px-4 py-3 space-y-0.5"
        style={{ height: 360, scrollbarWidth: "none" }}
      >
        {lines.map((line) => (
          <div
            key={line.id}
            className="leading-relaxed"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: colorFor(line.kind, line.accent),
              whiteSpace: "pre",
              opacity: line.kind === "peer" ? 0.6 : 1,
            }}
          >
            {line.text || "\u00A0"}
          </div>
        ))}
        {/* Blinking cursor */}
        <div
          className="inline-block w-2 h-3.5 ml-0.5"
          style={{
            background: "#C4ED5F",
            animation: "pulse-glow 1s step-end infinite",
            verticalAlign: "middle",
            opacity: 0.8,
          }}
        />
      </div>

      {/* Bottom gradient overlay so lines fade out */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #050505, transparent)",
        }}
      />

      {/* Subtle green corner glow */}
      <div
        className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(196,237,95,0.08) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Hero Section
───────────────────────────────────────────── */



export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute inset-0 hero-grid-fade" />

      {/* Radial green glow at top-left */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 0% 0%, rgba(196,237,95,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, #ffffff, transparent)" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-16 items-center">

          {/* ── Left: Content ── */}
          <div className="lg:col-span-6 flex flex-col">

            {/* Announcement Pill */}
            <a 
              href="https://quascan.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(196,237,95,0.4)] bg-[rgba(196,237,95,0.1)] text-[#659110] text-xs sm:text-sm font-medium mb-6 hover:bg-[rgba(196,237,95,0.2)] transition-colors w-fit shadow-[0_0_15px_rgba(196,237,95,0.15)]"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#C4ED5F]" style={{ animation: "pulse-glow 2s ease-in-out infinite" }}></span>
              Checkout the new block explorer, QuaScan (quascan.xyz)
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-black mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Post-Quantum <br className="hidden sm:block" />
              AI Blockchain <br />
              <span className="text-[#C4ED5F]">for Autonomous Agents.</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-md mb-8 font-light">
              Quantachain is a post-quantum Layer 1 AI blockchain built for AI agents, 
              DePIN infrastructure, and compliant machine-to-machine execution. 
              Powered by Falcon-512 cryptography and fast BFT consensus for secure decentralized intelligence.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3 mb-10">
              <a
                href="https://github.com/quantachain/quanta/releases/tag/v3.0.0-alpha"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Run a Node
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a 
                href="https://quantachain.gitbook.io/quantachain-docs"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Explore Docs
                <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
              </a>
            </div>


          </div>

          {/* ── Right: Live chain terminal ── */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="w-full max-w-2xl lg:max-w-none">
              <LiveChainTerminal />
            </div>
          </div>

        </div>

        {/* Scrolling Use Cases ticker */}
        <div className="mt-20 overflow-hidden border-t border-[rgba(0,0,0,0.05)] pt-6">
          <div className="flex gap-12 animate-marquee whitespace-nowrap" style={{ animationDuration: "40s" }}>
            {[
              "AI Agents",
              "DePIN",
              "Autonomous Finance",
              "Machine Economy",
              "AI-to-AI Payments",
              "Edge Devices",
              "Robotics",
              "AI Agents",
              "DePIN",
              "Autonomous Finance",
              "Machine Economy",
              "AI-to-AI Payments",
              "Edge Devices",
              "Robotics",
              "AI Agents",
              "DePIN",
              "Autonomous Finance",
              "Machine Economy",
              "AI-to-AI Payments",
              "Edge Devices",
              "Robotics",
              "AI Agents",
              "DePIN",
              "Autonomous Finance",
              "Machine Economy",
              "AI-to-AI Payments",
              "Edge Devices",
              "Robotics",
            ].map((item, i) => (
              <span
                key={i}
                className="text-xs font-semibold text-[#5a5a5a] uppercase tracking-[0.1em]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
