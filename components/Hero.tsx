"use client";

import Link from "next/link";
import { Star, GitFork, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-40 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-[#00E599]/10 to-[#00cc88]/5 rounded-full blur-[150px] animate-pulse -z-10" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#00E599]/8 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#00E599]/5 to-transparent rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 text-center z-10">

        <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter mb-8 text-black">
          Quantum-Proof <br />
          <span className="text-[#00E599]">Blockchain</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          <span className="font-semibold text-gray-900">Protect your digital assets for decades.</span> Built with NIST-standardized post-quantum cryptography—secure against future quantum computers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link 
            href="/docs"
            className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 text-lg font-bold text-black bg-[#00E599] rounded-full hover:shadow-[0_0_40px_rgba(0,229,153,0.4)] transition-all hover:scale-105 active:scale-95 text-center"
          >
            Get Started
          </Link>
          <Link 
            href="https://github.com/quantachain/quanta"
            target="_blank"
            className="w-full sm:w-auto px-8 sm:px-10 py-4 text-lg font-bold text-gray-700 bg-white border-2 border-gray-200 rounded-full hover:border-[#00E599] hover:text-black transition-all hover:shadow-lg text-center"
          >
            View on GitHub
          </Link>
        </div>

        {/* Stats Marquee */}
        <div className="mt-20 sm:mt-32 border-t border-gray-100 pt-12 sm:pt-16 w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {/* First Set */}
            <div className="flex gap-12 sm:gap-24 px-6 sm:px-12">
              <div>
                <div className="text-3xl sm:text-5xl font-bold text-black mb-2 relative inline-block">
                  <span className="relative z-10">100%</span>
                  <span className="absolute inset-0 bg-[#00E599]/20 blur-xl" />
                </div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-semibold">Rust Codebase</div>
              </div>
              <div>
                <div className="text-3xl sm:text-5xl font-bold text-black mb-2 relative inline-block">
                  <span className="relative z-10">~10s</span>
                  <span className="absolute inset-0 bg-[#00E599]/20 blur-xl" />
                </div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-semibold">Block Time</div>
              </div>
              <div>
                <div className="text-3xl sm:text-5xl font-bold text-black mb-2 relative inline-block">
                  <span className="relative z-10">PQC</span>
                  <span className="absolute inset-0 bg-[#00E599]/20 blur-xl" />
                </div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-semibold">NIST Standard</div>
              </div>
              <div>
                <div className="text-3xl sm:text-5xl font-bold text-black mb-2 relative inline-block">
                  <span className="relative z-10">PoW</span>
                  <span className="absolute inset-0 bg-[#00E599]/20 blur-xl" />
                </div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-semibold">Consensus</div>
              </div>
              <div>
                <div className="text-3xl sm:text-5xl font-bold text-black mb-2 relative inline-block">
                  <span className="relative z-10">Falcon</span>
                  <span className="absolute inset-0 bg-[#00E599]/20 blur-xl" />
                </div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-semibold">Signature</div>
              </div>
            </div>

            {/* Second Set (Duplicate for infinite scroll) */}
            <div className="flex gap-12 sm:gap-24 px-6 sm:px-12">
              <div>
                <div className="text-3xl sm:text-5xl font-bold text-black mb-2 relative inline-block">
                  <span className="relative z-10">100%</span>
                  <span className="absolute inset-0 bg-[#00E599]/20 blur-xl" />
                </div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-semibold">Rust Codebase</div>
              </div>
              <div>
                <div className="text-3xl sm:text-5xl font-bold text-black mb-2 relative inline-block">
                  <span className="relative z-10">~10s</span>
                  <span className="absolute inset-0 bg-[#00E599]/20 blur-xl" />
                </div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-semibold">Block Time</div>
              </div>
              <div>
                <div className="text-3xl sm:text-5xl font-bold text-black mb-2 relative inline-block">
                  <span className="relative z-10">PQC</span>
                  <span className="absolute inset-0 bg-[#00E599]/20 blur-xl" />
                </div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-semibold">NIST Standard</div>
              </div>
              <div>
                <div className="text-3xl sm:text-5xl font-bold text-black mb-2 relative inline-block">
                  <span className="relative z-10">PoW</span>
                  <span className="absolute inset-0 bg-[#00E599]/20 blur-xl" />
                </div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-semibold">Consensus</div>
              </div>
              <div>
                <div className="text-3xl sm:text-5xl font-bold text-black mb-2 relative inline-block">
                  <span className="relative z-10">Falcon</span>
                  <span className="absolute inset-0 bg-[#00E599]/20 blur-xl" />
                </div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-semibold">Signature</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
