"use client";

import Link from "next/link";
import { Star, GitFork, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-40 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00E599]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00E599]/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 text-center z-10">

        <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter mb-8 text-balance leading-[1.1] text-black">
          The <span className="text-[#00E599]">Quantum</span> <br />
          Resistant Chain
        </h1>

        <p className="text-lg sm:text-xl md:text-3xl text-gray-500 max-w-4xl mx-auto mb-8 text-balance leading-relaxed font-light">
          Built in Rust. Secured by Falcon-512 & Kyber-1024. <br className="hidden md:block" />
          Quanta is the fortress for the post-quantum era.
        </p>

        {/* GitHub Stats */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <a 
            href="https://github.com/xaexaex/quanta" 
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-semibold transition-all"
          >
            <Star className="w-4 h-4" />
            <span>Star on GitHub</span>
          </a>
          <a 
            href="https://github.com/xaexaex/quanta/fork" 
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-semibold transition-all"
          >
            <GitFork className="w-4 h-4" />
            <span>Fork</span>
          </a>
          <a 
            href="https://github.com/xaexaex/quanta/graphs/contributors" 
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-semibold transition-all"
          >
            <Users className="w-4 h-4" />
            <span>Contributors</span>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link 
            href="https://github.com/xaexaex/quanta"
            target="_blank"
            className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-bold text-black bg-[#00E599] rounded-full hover:bg-[#00E599]/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,229,153,0.3)] text-center"
          >
            Start Mining
          </Link>
          <Link 
            href="#roadmap"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-bold text-black bg-gray-100 border border-gray-200 rounded-full hover:bg-gray-200 transition-all text-center"
          >
            View Roadmap
          </Link>
        </div>

        {/* Stats Marquee */}
        <div className="mt-20 sm:mt-32 border-t border-gray-100 pt-12 sm:pt-16 w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {/* First Set */}
            <div className="flex gap-12 sm:gap-24 px-6 sm:px-12">
              <div>
                <div className="text-3xl sm:text-5xl font-bold text-black mb-2">100%</div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-semibold">Rust Codebase</div>
              </div>
              <div>
                <div className="text-3xl sm:text-5xl font-bold text-black mb-2">~10s</div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-semibold">Block Time</div>
              </div>
              <div>
                <div className="text-3xl sm:text-5xl font-bold text-black mb-2">PQC</div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-semibold">NIST Standard</div>
              </div>
              <div>
                <div className="text-3xl sm:text-5xl font-bold text-black mb-2">PoW</div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-semibold">Consensus</div>
              </div>
              <div>
                <div className="text-3xl sm:text-5xl font-bold text-black mb-2">Falcon</div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-semibold">Signature</div>
              </div>
            </div>

            {/* Second Set (Duplicate for infinite scroll) */}
            <div className="flex gap-12 sm:gap-24 px-6 sm:px-12">
              <div>
                <div className="text-3xl sm:text-5xl font-bold text-black mb-2">100%</div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-semibold">Rust Codebase</div>
              </div>
              <div>
                <div className="text-3xl sm:text-5xl font-bold text-black mb-2">~10s</div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-semibold">Block Time</div>
              </div>
              <div>
                <div className="text-3xl sm:text-5xl font-bold text-black mb-2">PQC</div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-semibold">NIST Standard</div>
              </div>
              <div>
                <div className="text-3xl sm:text-5xl font-bold text-black mb-2">PoW</div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-semibold">Consensus</div>
              </div>
              <div>
                <div className="text-3xl sm:text-5xl font-bold text-black mb-2">Falcon</div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-semibold">Signature</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
