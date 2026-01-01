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

    // TODO: Replace with actual API endpoint
    try {
      // Simulated API call - replace with your email service (ConvertKit, Mailchimp, etc.)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For now, just log to console
      console.log("Email signup:", email);
      
      setStatus("success");
      setMessage("Thanks! We'll be in touch soon.");
      setEmail("");
      
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
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
    <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-3xl p-8 md:p-12">
      <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-8 text-lg">{description}</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={status === "loading" || status === "success"}
            className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#00E599] focus:outline-none text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="px-8 py-4 bg-[#00E599] text-black font-bold rounded-full hover:bg-[#00E599]/90 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-lg shadow-[0_0_20px_rgba(0,229,153,0.3)]"
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
      
      <p className="text-xs text-gray-500 mt-4 text-center">
        No spam, ever. Unsubscribe anytime.
      </p>
    </div>
  );
}
