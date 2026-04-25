"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Loader2, CheckCircle2, XCircle, Github, Star, Droplet } from "lucide-react";
import { Turnstile } from '@marsidev/react-turnstile';

export default function FaucetPage() {
  const [address, setAddress] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string; details?: string } | null>(null);
  
  // Developer Bonus states
  const [githubConnected, setGithubConnected] = useState(false);
  const [githubUsername, setGithubUsername] = useState("");
  const [repoStarred, setRepoStarred] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    // Check github status on load
    const checkStatus = async () => {
      try {
        const res = await fetch("/api/github/status");
        const data = await res.json();
        setGithubConnected(data.connected);
        setRepoStarred(data.starred);
        if (data.username) setGithubUsername(data.username);
      } catch (e) {
        // ignore
      }
    };
    checkStatus();
  }, []);

  // Calculate the reward based on bonuses
  let rewardAmount = 5;
  if (githubConnected) rewardAmount = 10;
  if (githubConnected && repoStarred) rewardAmount = 15;

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
        body: JSON.stringify({ address: address.trim(), token, amount: rewardAmount }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setResult({ success: true, message: data.message || `Successfully sent ${rewardAmount} QUA!`, details: data.details });
      } else {
        setResult({ success: false, message: data.error || "Failed to request coins" });
      }
    } catch (err) {
      setResult({ success: false, message: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const handleGithubConnect = () => {
    setIsConnecting(true);
    window.location.href = "/api/github/login";
  };

  const handleStarRepo = () => {
    window.open("https://github.com/quantachain/quanta", "_blank");
    alert("After starring the repository, please refresh this page to update your reward tier!");
  };

  return (
    <main className="min-h-screen bg-transparent text-black selection:bg-emerald-100 selection:text-emerald-900 flex flex-col">
      <Navbar />

      <section className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#00E599] uppercase px-4 py-2 bg-[#00E599]/10 rounded-full border border-[#00E599]/20">
                Quanta Testnet
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight leading-[0.95]">
              Developer <br />
              <span className="text-[#00E599]">Faucet</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              Get Testnet QUA to build and test your post-quantum applications. Base reward is 5 QUA per day.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            
            {/* Left Column: Faucet Form (takes 3 cols) */}
            <div className="md:col-span-3 bg-white p-8 sm:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/80">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Droplet className="w-6 h-6 text-[#00E599]" />
                Request Funds
              </h2>

              <div className="flex flex-col gap-5">
                <div>
                  <label htmlFor="address" className="text-sm font-semibold text-gray-700 ml-1 mb-2 block">
                    Wallet Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your Quanta wallet address"
                    className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition-all text-gray-900 font-mono text-sm"
                  />
                </div>

                <div className="flex justify-start h-[65px] mt-2">
                  <Turnstile
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
                    onSuccess={(t) => setToken(t)}
                    options={{ theme: "light" }}
                  />
                </div>

                <button
                  onClick={requestCoins}
                  disabled={loading}
                  className="w-full mt-4 py-4 text-lg font-bold text-white bg-black rounded-full hover:bg-gray-900 shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_25px_rgba(0,229,153,0.3)] transition-all hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100 disabled:shadow-none flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    `Request ${rewardAmount} QUA`
                  )}
                </button>
              </div>

              {result && (
                <div className={`mt-6 p-4 rounded-2xl border flex items-start gap-3 text-left ${result.success ? "bg-emerald-50/50 border-emerald-100 text-emerald-800" : "bg-red-50 border-red-100 text-red-800"
                  }`}>
                  {result.success ? (
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-emerald-500 shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 mt-0.5 text-red-500 shrink-0" />
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

            {/* Right Column: Developer Bonuses (takes 2 cols) */}
            <div className="md:col-span-2 flex flex-col gap-4">
              <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-2">Developer Bonuses</h3>
                <p className="text-gray-500 text-sm mb-8">Boost your daily allowance by linking your developer profiles.</p>
                
                <div className="space-y-4">
                  {/* GitHub Bonus */}
                  <div className={`p-4 rounded-2xl border transition-all ${githubConnected ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-gray-200'}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 font-semibold">
                        <Github className="w-5 h-5" />
                        Connect GitHub
                      </div>
                      <div className={`text-xs font-bold px-2 py-1 rounded-md ${githubConnected ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'}`}>
                        +5 QUA
                      </div>
                    </div>
                    {githubConnected ? (
                      <div className="text-sm font-medium text-emerald-600 flex items-center justify-between gap-1">
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Connected</span>
                        <span className="text-xs text-gray-500 font-normal">@{githubUsername}</span>
                      </div>
                    ) : (
                      <button 
                        onClick={handleGithubConnect}
                        disabled={isConnecting}
                        className="w-full py-2 text-sm font-semibold bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                      >
                        {isConnecting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Link Account"}
                      </button>
                    )}
                  </div>

                  {/* Star Repo Bonus */}
                  <div className={`p-4 rounded-2xl border transition-all ${repoStarred ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-gray-200'}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 font-semibold">
                        <Star className="w-5 h-5" />
                        Star our Repository
                      </div>
                      <div className={`text-xs font-bold px-2 py-1 rounded-md ${repoStarred ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'}`}>
                        +5 QUA
                      </div>
                    </div>
                    {repoStarred ? (
                      <div className="text-sm font-medium text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> Star Verified
                      </div>
                    ) : (
                      <button 
                        onClick={handleStarRepo}
                        disabled={!githubConnected}
                        className="w-full py-2 text-sm font-semibold bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {!githubConnected ? "Connect GitHub First" : "Star on GitHub"}
                      </button>
                    )}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex justify-between items-end">
                      <div className="text-sm text-gray-500 font-medium">Your Daily Limit</div>
                      <div className="text-2xl font-black text-[#00E599]">{rewardAmount} QUA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
