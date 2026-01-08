import { Shield, Clock, Lock, Zap, TrendingUp, Users } from "lucide-react";

export default function WhyQuanta() {
  return (
    <section id="why-quanta" className="py-32 relative bg-white">
      <div className="container mx-auto px-6">
        
        {/* Main Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-6">
            Why <span className="text-[#00E599]">Quanta</span>?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Traditional blockchains will be vulnerable to quantum computers within 10-15 years. 
            <span className="font-semibold text-black"> Quanta is built to protect your assets for decades.</span>
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl border-2 border-gray-100 overflow-hidden">
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="bg-gray-50 border-b-2 border-gray-100">
                    <th className="text-left p-3 sm:p-6 font-bold text-sm sm:text-lg">Feature</th>
                    <th className="text-center p-3 sm:p-6 font-bold text-sm sm:text-lg text-[#00E599]">Quanta</th>
                    <th className="text-center p-3 sm:p-6 font-bold text-sm sm:text-lg text-gray-400">Legacy Chains</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-3 sm:p-6 font-semibold text-sm sm:text-base">Quantum Resistance</td>
                    <td className="p-3 sm:p-6 text-center">
                      <span className="inline-block px-2 py-1 sm:px-4 sm:py-2 bg-[#00E599] text-black font-bold rounded-full text-xs sm:text-sm">
                        NIST L1-5
                      </span>
                    </td>
                    <td className="p-3 sm:p-6 text-center text-gray-400">
                      <span className="inline-block px-2 py-1 sm:px-4 sm:py-2 bg-red-100 text-red-600 font-bold rounded-full text-xs sm:text-sm">
                        Vulnerable
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-3 sm:p-6 font-semibold text-sm sm:text-base">Pre-mine / ICO</td>
                    <td className="p-3 sm:p-6 text-center text-[#00E599] font-bold text-xs sm:text-base">0% (Fair Launch)</td>
                    <td className="p-3 sm:p-6 text-center text-gray-600 text-xs sm:text-base">Often 10-40%</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-3 sm:p-6 font-semibold text-sm sm:text-base">Fee Economics</td>
                    <td className="p-3 sm:p-6 text-center text-[#00E599] font-bold text-xs sm:text-base">70% Burned</td>
                    <td className="p-3 sm:p-6 text-center text-gray-600 text-xs sm:text-base">Varies (often 0%)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-3 sm:p-6 font-semibold text-sm sm:text-base">Block Time</td>
                    <td className="p-3 sm:p-6 text-center text-[#00E599] font-bold text-xs sm:text-base">10 seconds</td>
                    <td className="p-3 sm:p-6 text-center text-gray-600 text-xs sm:text-base">60-600 seconds</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-3 sm:p-6 font-semibold text-sm sm:text-base">Long-term Security</td>
                    <td className="p-3 sm:p-6 text-center text-[#00E599] font-bold text-xs sm:text-base">Designed for decades</td>
                    <td className="p-3 sm:p-6 text-center text-gray-600 text-xs sm:text-base">Emergency retrofits needed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
