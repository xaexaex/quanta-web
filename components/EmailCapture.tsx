"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function EmailCapture({
  variant = "default",
}: {
  variant?: "default" | "minimal";
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus("success");
        setMessage(data.message || "You're on the list. We'll reach out soon.");
        setEmail("");
        setTimeout(() => { setStatus("idle"); setMessage(""); }, 6000);
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  /* ── MINIMAL VARIANT ── */
  if (variant === "minimal") {
    return (
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            disabled={status === "loading" || status === "success"}
            className="flex-1 px-4 py-3 rounded-lg bg-gray-100 border border-[rgba(0,0,0,0.08)] text-black placeholder:text-gray-400 focus:border-[rgba(196,237,95,0.4)] focus:outline-none disabled:opacity-50 text-sm"
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="px-6 py-3 bg-[#C4ED5F] text-black font-bold rounded-lg hover:bg-[#C4ED5F] transition-all disabled:opacity-50 whitespace-nowrap text-sm"
          >
            {status === "loading" ? "..." : status === "success" ? "✓" : "Notify Me"}
          </button>
        </div>
        {message && (
          <p className={`mt-2 text-xs ${status === "success" ? "text-[#C4ED5F]" : "text-red-400"}`}>
            {message}
          </p>
        )}
      </form>
    );
  }

  /* ── DEFAULT VARIANT ── */
  return (
    <section className="py-24 sm:py-32 bg-transparent relative overflow-hidden">
      {/* Subtle ambient glow behind the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#C4ED5F]/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="relative rounded-[2.5rem] border border-white/10 bg-[#050505] shadow-2xl overflow-hidden p-10 sm:p-20 text-center ring-1 ring-[#C4ED5F]/10">

          {/* Corner accent decorations */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-[#C4ED5F]/20 rounded-tl-[2.5rem] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-[#C4ED5F]/20 rounded-br-[2.5rem] pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C4ED5F]/30 bg-[#C4ED5F]/10 mb-10 shadow-[0_0_20px_rgba(196,237,95,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C4ED5F] animate-pulse" />
            <span
              className="text-[10px] font-black tracking-widest text-[#C4ED5F] uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Validator Program — Limited Seats
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-5xl sm:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.0]"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Signup for{" "}
            <span className="text-[#C4ED5F]">Validators</span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg sm:text-xl mb-12 leading-relaxed font-light max-w-2xl mx-auto">
            Help secure the AlephBFT consensus network.{" "}
            <span className="text-white font-medium">Limited seats available</span> — signup now to
            be notified when validator slots open for the Testnet.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                disabled={status === "loading" || status === "success"}
                className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-[#C4ED5F]/50 focus:bg-white/10 focus:outline-none text-base disabled:opacity-50 transition-all"
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="px-8 py-4 bg-[#C4ED5F] text-black font-bold rounded-xl hover:bg-[#b0d94f] transition-all hover:-translate-y-1 active:scale-95 disabled:opacity-50 whitespace-nowrap text-base shadow-[0_0_30px_rgba(196,237,95,0.3)] flex items-center gap-2 justify-center"
              >
                {status === "loading"
                  ? "Signing up..."
                  : status === "success"
                  ? "✓ You're on the list!"
                  : <><span>Signup for Validators</span><ArrowUpRight className="w-5 h-5" /></>}
              </button>
            </div>

            {message && (
              <p className={`mt-4 text-sm text-center ${status === "success" ? "text-[#C4ED5F]" : "text-red-400"}`}>
                {message}
              </p>
            )}
          </form>

          {/* Privacy note */}
          <p
            className="text-[10px] text-gray-500 mt-8 tracking-widest uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Limited seats only. No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
