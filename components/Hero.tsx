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

        <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter mb-8 text-balance leading-[1.1] text-black">
          <span className="relative inline-block">
            <span className="relative z-10">The</span>
            <span className="absolute inset-0 bg-[#00E599]/20 blur-xl" />
          </span> <span className="bg-gradient-to-r from-[#00E599] to-[#00cc88] bg-clip-text text-transparent">#1 Quantum</span> <br />
          Proof <span className="relative inline-block">
            <span className="relative z-10">Blockchain</span>
            <span className="absolute inset-0 bg-[#00E599]/20 blur-xl" />
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 text-balance leading-relaxed">
          Built in <span className="font-semibold text-gray-900">Rust</span>. Secured by <span className="font-semibold text-gray-900">Falcon-512</span> & <span className="font-semibold text-gray-900">Kyber-1024</span>. <br className="hidden md:block" />
          Quanta is the <span className="font-semibold text-[#00E599]">fortress</span> for the post-quantum era.
        </p>

        {/* GitHub Stats & Social Links */}
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
          <span className="text-gray-300">|</span>
          <a 
            href="https://discord.gg/7KmMBrrJEz" 
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-semibold transition-all"
          >
            <span>Discord</span>
          </a>
          <a 
            href="https://x.com/quantachain" 
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-semibold transition-all"
          >
            <span>X</span>
          </a>
          <a 
            href="https://t.me/quantanetwork" 
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-semibold transition-all"
          >
            <span>Telegram</span>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link 
            href="/docs"
            className="group relative w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold text-black bg-gradient-to-r from-[#00E599] to-[#00cc88] rounded-full hover:shadow-[0_0_40px_rgba(0,229,153,0.4)] transition-all hover:scale-105 active:scale-95 text-center overflow-hidden"
          >
            <span className="relative z-10">Start Node</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00cc88] to-[#00E599] opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link 
            href="#roadmap"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold text-gray-700 bg-white border-2 border-gray-200 rounded-full hover:border-[#00E599] hover:text-black transition-all hover:shadow-lg text-center"
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
