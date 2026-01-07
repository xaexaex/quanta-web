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
          <div className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b-2 border-gray-100">
                    <th className="text-left p-6 font-bold text-lg">Feature</th>
                    <th className="text-center p-6 font-bold text-lg text-[#00E599]">Quanta</th>
                    <th className="text-center p-6 font-bold text-lg text-gray-400">Legacy Chains</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-semibold">Quantum Resistance</td>
                    <td className="p-6 text-center">
                      <span className="inline-block px-4 py-2 bg-[#00E599] text-black font-bold rounded-full">
                        NIST Level 1-5
                      </span>
                    </td>
                    <td className="p-6 text-center text-gray-400">
                      <span className="inline-block px-4 py-2 bg-red-100 text-red-600 font-bold rounded-full">
                        Vulnerable
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-semibold">Pre-mine / ICO</td>
                    <td className="p-6 text-center text-[#00E599] font-bold">0% (Fair Launch)</td>
                    <td className="p-6 text-center text-gray-600">Often 10-40%</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-semibold">Fee Economics</td>
                    <td className="p-6 text-center text-[#00E599] font-bold">70% Burned</td>
                    <td className="p-6 text-center text-gray-600">Varies (often 0%)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-semibold">Block Time</td>
                    <td className="p-6 text-center text-[#00E599] font-bold">10 seconds</td>
                    <td className="p-6 text-center text-gray-600">60-600 seconds</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-semibold">Long-term Security</td>
                    <td className="p-6 text-center text-[#00E599] font-bold">Designed for decades</td>
                    <td className="p-6 text-center text-gray-600">Emergency retrofits needed</td>
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
