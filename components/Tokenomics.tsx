import { TrendingDown, Lock, Flame, Coins } from "lucide-react";

export default function Tokenomics() {
  return (
    <section className="py-32 relative bg-white">
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

        {/* Economic Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-2 sm:mx-4 md:mx-8 mb-16">
          <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-[2rem] p-6 sm:p-10 hover:border-[#00E599] transition-all">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#00E599]/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
              <Flame className="w-6 h-6 sm:w-8 sm:h-8 text-[#00E599]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">Fee Burning (70%)</h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              70% of all transaction fees are permanently burned, creating deflationary pressure as network usage grows.
            </p>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="text-sm text-gray-500 mb-2">Fee Distribution</div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Burn</span>
                  <span className="font-bold">70%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Treasury</span>
                  <span className="font-bold">20%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Miner</span>
                  <span className="font-bold">10%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-[2rem] p-6 sm:p-10 hover:border-[#00E599] transition-all">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#00E599]/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
              <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-[#00E599]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">Mining Reward Lock (50%)</h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              50% of mining rewards locked for 6 months to prevent dump pressure and align miner incentives with long-term value.
            </p>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="text-sm text-gray-500 mb-2">Lock Details</div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Lock Duration</span>
                  <span className="font-bold">6 months</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Lock Percentage</span>
                  <span className="font-bold">50%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Immediate Liquidity</span>
                  <span className="font-bold">50%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-[2rem] p-6 sm:p-10 hover:border-[#00E599] transition-all">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#00E599]/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
              <TrendingDown className="w-6 h-6 sm:w-8 sm:h-8 text-[#00E599]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">Exponential Decay</h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              Smooth 15% annual reduction prevents halving shocks while ensuring gradual supply expansion and predictable inflation.
            </p>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="text-sm text-gray-500 mb-2">Emission Schedule</div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Year 1</span>
                  <span className="font-bold">315M QUA</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Year 5</span>
                  <span className="font-bold">1.17B QUA</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Year 20</span>
                  <span className="font-bold">~1.5B QUA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-[2rem] p-6 sm:p-10 hover:border-[#00E599] transition-all">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#00E599]/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
              <Coins className="w-6 h-6 sm:w-8 sm:h-8 text-[#00E599]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">Fair Launch</h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              Zero pre-mine and zero ICO. 100% of supply distributed through proof-of-work mining with early adopter incentives.
            </p>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="text-sm text-gray-500 mb-2">Distribution</div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Pre-mine</span>
                  <span className="font-bold">0%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>ICO/Sale</span>
                  <span className="font-bold">0%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Mining</span>
                  <span className="font-bold">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supply Schedule Table */}
        <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-xl sm:rounded-[2rem] p-6 sm:p-8 md:p-12 mx-2 sm:mx-4 md:mx-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">Supply Schedule</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">15% annual reduction from 100 QUA to 5 QUA floor</p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="bg-white border-2 border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center hover:border-[#00E599] transition-all">
              <div className="text-xs sm:text-sm text-gray-500 mb-2">Year 1</div>
              <div className="text-2xl sm:text-3xl font-bold text-black mb-1">100</div>
              <div className="text-xs text-gray-500 mb-2 sm:mb-3">QUA/block</div>
              <div className="text-xs sm:text-sm font-semibold text-[#00E599]">315M Total</div>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center hover:border-[#00E599] transition-all">
              <div className="text-xs sm:text-sm text-gray-500 mb-2">Year 2</div>
              <div className="text-2xl sm:text-3xl font-bold text-black mb-1">85</div>
              <div className="text-xs text-gray-500 mb-2 sm:mb-3">QUA/block</div>
              <div className="text-xs sm:text-sm font-semibold text-[#00E599]">583M Total</div>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center hover:border-[#00E599] transition-all">
              <div className="text-xs sm:text-sm text-gray-500 mb-2">Year 5</div>
              <div className="text-2xl sm:text-3xl font-bold text-black mb-1">52</div>
              <div className="text-xs text-gray-500 mb-2 sm:mb-3">QUA/block</div>
              <div className="text-xs sm:text-sm font-semibold text-[#00E599]">1.17B Total</div>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center hover:border-[#00E599] transition-all">
              <div className="text-xs sm:text-sm text-gray-500 mb-2">Year 10</div>
              <div className="text-2xl sm:text-3xl font-bold text-black mb-1">20</div>
              <div className="text-xs text-gray-500 mb-2 sm:mb-3">QUA/block</div>
              <div className="text-xs sm:text-sm font-semibold text-[#00E599]">1.42B Total</div>
            </div>
            
            <div className="bg-white border-2 border-[#00E599] rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
              <div className="text-xs sm:text-sm text-gray-500 mb-2">Year 20+</div>
              <div className="text-2xl sm:text-3xl font-bold text-black mb-1">5</div>
              <div className="text-xs text-gray-500 mb-2 sm:mb-3">QUA/block</div>
              <div className="text-xs sm:text-sm font-semibold text-[#00E599]">~1.5B Total</div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-2 text-xs sm:text-sm">
              <span className="text-gray-600">Block time: 10 seconds</span>
              <span className="text-gray-600">~3.15M blocks/year</span>
              <span className="font-semibold text-black">Perpetual 5 QUA floor ensures long-term security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
