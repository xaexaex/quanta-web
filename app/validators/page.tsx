import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Server, Activity, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Validators Leaderboard",
  description: "Live overview of the active validators securing the Post Quantum & AI execution layer via AlephBFT.",
};

// Revalidate this page every 60 seconds to keep SEO fresh and data live
export const revalidate = 60;

interface ValidatorInfo {
  address: string;
  falcon_pk_hex: string;
  stake_microunits: number;
  registered_epoch: number;
  active: boolean;
}

interface ValidatorsResponse {
  active_count: number;
  validators: ValidatorInfo[];
}

export default async function ValidatorsPage() {
  const nodeApiUrl = process.env.NODE_API_URL || "https://rpc.quantachain.org";
  let validatorsData: ValidatorsResponse = { active_count: 0, validators: [] };
  let fetchError = false;

  try {
    const res = await fetch(`${nodeApiUrl}/api/validators`, {
      next: { revalidate: 60 },
    });
    if (res.ok) {
      validatorsData = await res.json();
    } else {
      fetchError = true;
    }
  } catch (error) {
    fetchError = true;
  }

  // Format QUA correctly (1 QUA = 1,000,000 microunits)
  const formatQua = (microunits: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(microunits / 1_000_000);
  };

  const totalStake = validatorsData.validators.reduce((sum, v) => sum + v.stake_microunits, 0);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4" style={{ fontFamily: "var(--font-syne)" }}>
                Validators Leaderboard
              </h1>
              <p className="text-lg text-gray-500">
                The decentralized network of nodes securing the post-quantum execution layer.
              </p>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Active Nodes</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C4ED5F] animate-pulse"></div>
                  <span className="text-2xl font-bold text-black">{validatorsData.active_count}</span>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Total Staked (QUA)</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-black">{formatQua(totalStake)}</span>
                </div>
              </div>
            </div>
          </div>

          {fetchError ? (
            <div className="bg-red-50 border border-red-200 text-red-600 rounded-2xl p-8 text-center">
              Unable to connect to the Quanta node to fetch live validator data. Please try again later.
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider">Rank</th>
                      <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider">Validator Identity</th>
                      <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Stake (QUA)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {validatorsData.validators.map((validator, index) => (
                      <tr key={validator.address} className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6">
                          <span className="text-gray-500 font-medium">#{index + 1}</span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                              <Server className="w-4 h-4 text-gray-400" />
                            </div>
                            <div>
                              <div className="font-mono text-sm text-black font-medium group flex items-center gap-2">
                                {validator.address.slice(0, 10)}...{validator.address.slice(-8)}
                                <a href={`https://quascan.xyz/address/${validator.address}`} target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity">
                                  <ArrowUpRight className="w-3 h-3 text-gray-400 hover:text-black" />
                                </a>
                              </div>
                              <div className="text-xs text-gray-400">Joined Epoch {validator.registered_epoch}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          {validator.active ? (
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[rgba(196,237,95,0.4)] bg-[#C4ED5F]/10 text-[#7bb800] text-[10px] font-bold tracking-wider uppercase">
                              <Activity className="w-3 h-3" /> Active
                            </div>
                          ) : (
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-500 text-[10px] font-bold tracking-wider uppercase">
                              Inactive
                            </div>
                          )}
                        </td>
                        <td className="py-4 px-6 text-right">
                          <div className="font-medium text-black">{formatQua(validator.stake_microunits)}</div>
                        </td>
                      </tr>
                    ))}
                    {validatorsData.validators.length === 0 && (
                      <tr>
                        <td colSpan={4} className="py-12 text-center text-gray-500">
                          No validators found on the network.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
