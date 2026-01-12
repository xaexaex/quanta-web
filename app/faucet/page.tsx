"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";

export default function FaucetPage() {
  const [address, setAddress] = useState("");
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

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/faucet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address: address.trim() }),
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
    <main className="min-h-screen bg-white text-black selection:bg-[#00E599] selection:text-black flex flex-col">
      <Navbar />

      <section className="flex-grow relative flex items-center justify-center pt-32 pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#00E599]/10 to-[#00cc88]/5 rounded-full blur-[150px] animate-pulse -z-10" />

        <div className="container mx-auto px-6 max-w-xl text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6">
            Testnet <span className="text-[#00E599]">Faucet</span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-10">
            Get 100 Testnet QUA every 24 hours for testing your applications on the Quanta Chain.
          </p>

          <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100">
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
                className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#00E599] focus:ring-1 focus:ring-[#00E599] transition-all"
              />
              
              <button 
                onClick={requestCoins}
                disabled={loading}
                className="w-full mt-2 py-4 text-lg font-bold text-black bg-[#00E599] rounded-xl hover:shadow-[0_0_20px_rgba(0,229,153,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Requesting...
                  </>
                ) : (
                  "Request 100 QUA"
                )}
              </button>
            </div>

            {result && (
              <div className={`mt-6 p-4 rounded-xl border flex items-start gap-3 text-left ${
                result.success ? "bg-[#00E599]/10 border-[#00E599]/20 text-green-800" : "bg-red-50 border-red-100 text-red-800"
              }`}>
                {result.success ? (
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-[#00E599]" />
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
