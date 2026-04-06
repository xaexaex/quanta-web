"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import { Turnstile } from '@marsidev/react-turnstile';

export default function FaucetPage() {
  const [address, setAddress] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string; details?: string } | null>(null);

  const requestCoins = async () => {
    if (!address) {
      setResult({ success: false, message: "Please enter a wallet address" });
      return;
    }

    if (address.length < 10) {
      setResult({ success: false, message: "Invalid address format" });
      return;
    }

    if (!token) {
      setResult({ success: false, message: "Please complete the CAPTCHA" });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/faucet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address: address.trim(), token }),
      });

      const data = await response.json();

      if (data.success) {
        setResult({ success: true, message: "Coins sent successfully!", details: data.details });
      } else {
        setResult({ success: false, message: data.error || "Failed to request coins" });
      }
    } catch (err) {
      setResult({ success: false, message: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-transparent text-black selection:bg-emerald-100 selection:text-emerald-900 flex flex-col">
      <Navbar />

      <section className="flex-grow flex items-center justify-center pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <div className="inline-block mb-4">
            <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase px-4 py-2 bg-gray-100 rounded-full">
              Testnet
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight leading-[0.95]">
            Testnet <br />
            <span className="text-[#00E599]">Faucet</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed font-light max-w-xl mx-auto">
            Get <span className="text-black font-medium">5 Testnet QUA</span> every 24 hours for testing your applications on the Quanta Chain.
          </p>

          <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/80 max-w-lg mx-auto">
            <div className="flex flex-col gap-4 text-left">
              <label htmlFor="address" className="text-sm font-semibold text-gray-700 ml-1">
                Wallet Address
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your Quanta wallet address"
                className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition-all text-gray-900"
              />

              <div className="flex justify-center mt-2 h-[65px]">
                <Turnstile
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                  onSuccess={(t) => setToken(t)}
                  options={{ theme: "light" }}
                />
              </div>

              <button
                onClick={requestCoins}
                disabled={loading}
                className="w-full mt-4 py-4 text-lg font-bold text-white bg-black rounded-full hover:bg-gray-900 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100 disabled:shadow-none flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Requesting...
                  </>
                ) : (
                  "Request 5 QUA"
                )}
              </button>
            </div>

            {result && (
              <div className={`mt-6 p-4 rounded-2xl border flex items-start gap-3 text-left ${result.success ? "bg-emerald-50/50 border-emerald-100 text-emerald-800" : "bg-red-50 border-red-100 text-red-800"
                }`}>
                {result.success ? (
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-emerald-500" />
                ) : (
                  <XCircle className="w-5 h-5 mt-0.5 text-red-500" />
                )}
                <div>
                  <div className="font-semibold">{result.message}</div>
                  {result.details && (
                    <div className="text-xs mt-1 opacity-80 font-mono break-all">
                      {result.details}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
