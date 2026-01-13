import { TrendingDown, Lock, Flame, Coins } from "lucide-react";

export default function Tokenomics() {
  return (
    <section className="py-24 relative bg-white">
      <div className="px-6">
        {/* Heading Section with Black BG */}
        <div className="mb-16 sm:mb-24 bg-black rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-16 md:p-20 mx-2 sm:mx-4 md:mx-8 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#00E599]/10 rounded-full blur-[120px]" />

          <div className="relative z-10">
            <div className="max-w-4xl">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 text-white tracking-tight">
                Sustainable <br />
                <span className="text-gray-400">Economics.</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed">
                Fair launch with adaptive tokenomics designed for long-term network health. No pre-mine, no ICO.
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mx-2 sm:mx-4 md:mx-8 mb-16">
          <div className="bg-gradient-to-br from-[#00E599] to-[#00cc88] p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] text-black">
            <div className="text-4xl sm:text-5xl font-bold mb-2">100</div>
            <div className="text-base sm:text-lg font-semibold mb-1">QUA Initial Reward</div>
            <div className="text-xs sm:text-sm opacity-80">Per block at launch</div>
          </div>

          <div className="bg-gradient-to-br from-[#00E599] to-[#00cc88] p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] text-black">
            <div className="text-4xl sm:text-5xl font-bold mb-2">15%</div>
            <div className="text-base sm:text-lg font-semibold mb-1">Annual Reduction</div>
            <div className="text-xs sm:text-sm opacity-80">Smooth exponential decay</div>
          </div>

          <div className="bg-gradient-to-br from-[#00E599] to-[#00cc88] p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] text-black">
            <div className="text-4xl sm:text-5xl font-bold mb-2">1.5B</div>
            <div className="text-base sm:text-lg font-semibold mb-1">Asymptotic Maximum</div>
            <div className="text-xs sm:text-sm opacity-80">Reached by year 15-20</div>
          </div>

          <div className="bg-gradient-to-br from-[#00E599] to-[#00cc88] p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] text-black">
            <div className="text-4xl sm:text-5xl font-bold mb-2">5</div>
            <div className="text-base sm:text-lg font-semibold mb-1">QUA Reward Floor</div>
            <div className="text-xs sm:text-sm opacity-80">Perpetual mining incentive</div>
          </div>
        </div>
      </div>
    </section>
  );
}
