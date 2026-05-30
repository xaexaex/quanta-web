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
            className="flex-1 px-4 py-3 rounded-lg bg-[#161616] border border-[rgba(255,255,255,0.08)] text-white placeholder:text-[#4a4a4a] focus:border-[rgba(0,229,153,0.4)] focus:outline-none disabled:opacity-50 text-sm"
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="px-6 py-3 bg-[#00E599] text-black font-bold rounded-lg hover:bg-[#00c282] transition-all disabled:opacity-50 whitespace-nowrap text-sm"
          >
            {status === "loading" ? "..." : status === "success" ? "✓" : "Notify Me"}
          </button>
        </div>
        {message && (
          <p className={`mt-2 text-xs ${status === "success" ? "text-[#00E599]" : "text-red-400"}`}>
            {message}
          </p>
        )}
      </form>
    );
  }

  /* ── DEFAULT VARIANT ── */
  return (
    <section className="py-16 sm:py-28 bg-transparent relative overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[280px] bg-[#00E599]/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-[rgba(0,229,153,0.18)] bg-[#0f0f0f] overflow-hidden p-10 sm:p-16 text-center">

          {/* Corner accent decorations */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[rgba(0,229,153,0.15)] rounded-tl-2xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[rgba(0,229,153,0.15)] rounded-br-2xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(0,229,153,0.2)] bg-[rgba(0,229,153,0.06)] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E599] animate-pulse" />
            <span
              className="text-[10px] font-bold tracking-widest text-[#00E599] uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Validator Program — Limited Seats
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-5xl sm:text-7xl font-bold text-white mb-5 tracking-tight leading-[0.95]"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Signup for{" "}
            <span className="text-[#00E599]">Validators</span>
          </h2>

          {/* Description */}
          <p className="text-[#8a8a8a] text-lg sm:text-xl mb-10 leading-relaxed font-light max-w-2xl mx-auto">
            Help secure the AlephBFT consensus network.{" "}
            <span className="text-white font-medium">Limited seats available</span> — signup now to
            be notified when validator slots open for the Testnet.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                disabled={status === "loading" || status === "success"}
                className="flex-1 px-6 py-4 rounded-xl bg-[#161616] border border-[rgba(255,255,255,0.08)] text-white placeholder:text-[#4a4a4a] focus:border-[rgba(0,229,153,0.4)] focus:outline-none text-base disabled:opacity-50 transition-all"
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="px-8 py-4 bg-[#00E599] text-black font-bold rounded-xl hover:bg-[#00c282] transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 whitespace-nowrap text-base shadow-[0_0_30px_rgba(0,229,153,0.2)] flex items-center gap-2 justify-center"
              >
                {status === "loading"
                  ? "Signing up..."
                  : status === "success"
                  ? "✓ You're on the list!"
                  : <><span>Signup for Validators</span><ArrowUpRight className="w-4 h-4" /></>}
              </button>
            </div>

            {message && (
              <p className={`mt-3 text-sm text-center ${status === "success" ? "text-[#00E599]" : "text-red-400"}`}>
                {message}
              </p>
            )}
          </form>

          {/* Privacy note */}
          <p
            className="text-xs text-[#4a4a4a] mt-6"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Limited seats only. No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
