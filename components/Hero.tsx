import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-40 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00E599]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00E599]/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 text-center z-10">

        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-8 text-balance leading-[1.1] text-black">
          The <span className="text-[#00E599]">Quantum</span> <br />
          Resistant Chain
        </h1>

        <p className="text-xl md:text-3xl text-gray-500 max-w-4xl mx-auto mb-12 text-balance leading-relaxed font-light">
          Built in Rust. Secured by Falcon-512 & Kyber-1024. <br className="hidden md:block" />
          Quanta is the fortress for the post-quantum era.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Link 
            href="https://github.com/xaexaex/quanta"
            target="_blank"
            className="px-10 py-5 text-xl font-bold text-black bg-[#00E599] rounded-full hover:bg-[#00E599]/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,229,153,0.3)]"
          >
            Start Mining
          </Link>
          <Link 
            href="#tech"
            className="px-10 py-5 text-xl font-bold text-black bg-gray-100 border border-gray-200 rounded-full hover:bg-gray-200 transition-all"
          >
            View Architecture
          </Link>
        </div>

        {/* Stats Marquee */}
        <div className="mt-32 border-t border-gray-100 pt-16 w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {/* First Set */}
            <div className="flex gap-24 px-12">
              <div>
                <div className="text-5xl font-bold text-black mb-2">100%</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Rust Codebase</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-black mb-2">~10s</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Block Time</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-black mb-2">PQC</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">NIST Standard</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-black mb-2">PoW</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Consensus</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-black mb-2">Falcon</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Signature</div>
              </div>
            </div>

            {/* Second Set (Duplicate for infinite scroll) */}
            <div className="flex gap-24 px-12">
              <div>
                <div className="text-5xl font-bold text-black mb-2">100%</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Rust Codebase</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-black mb-2">~10s</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Block Time</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-black mb-2">PQC</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">NIST Standard</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-black mb-2">PoW</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Consensus</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-black mb-2">Falcon</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Signature</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
