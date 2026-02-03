"use client";

import { useState } from "react";

export default function EmailCapture({
  title = "Join the Waitlist",
  description = "Be the first to know when we launch. Get exclusive early access to the testnet.",
  buttonText = "Get Early Access",
  variant = "default"
}: {
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: "default" | "minimal"
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message || "Thanks! We'll be in touch soon.");
        setEmail("");

        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 5000);
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

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
            className="flex-1 px-4 py-3 rounded-full border-2 border-gray-200 focus:border-[#00E599] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="px-8 py-3 bg-[#00E599] text-black font-bold rounded-full hover:bg-[#00E599]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {status === "loading" ? "..." : status === "success" ? "✓" : "Notify Me"}
          </button>
        </div>
        {message && (
          <p className={`mt-3 text-sm ${status === "success" ? "text-[#00E599]" : "text-red-500"}`}>
            {message}
          </p>
        )}
      </form>
    );
  }

  return (
    <section className="py-10 sm:py-20 bg-transparent text-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-4">
            <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase px-4 py-2 bg-gray-100 rounded-full">
              Early Access
            </span>
          </div>

          {/* Title */}
          <h2 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight leading-[0.95]">
            Join the <br />
            <span className="text-[#00E599]">Waitlist</span>
          </h2>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
            Be the first to know when we launch. Get exclusive early access to the <span className="text-black font-medium">testnet.</span>
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={status === "loading" || status === "success"}
                className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 bg-white text-black placeholder:text-gray-400 focus:border-[#00E599] focus:outline-none text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="px-8 py-4 bg-[#00E599] text-black font-bold rounded-full hover:bg-[#00E599]/90 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-lg shadow-[0_0_30px_rgba(0,229,153,0.3)]"
              >
                {status === "loading" ? "Signing up..." : status === "success" ? "✓ Subscribed!" : buttonText}
              </button>
            </div>

            {message && (
              <p className={`text-center text-sm ${status === "success" ? "text-[#00E599]" : "text-red-500"}`}>
                {message}
              </p>
            )}
          </form>

          {/* Privacy Note */}
          <p className="text-xs text-gray-400 mt-6 text-center font-mono">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
