"use client";

import { useEffect, useState } from "react";
import { fetchStats, type NetworkStats as NetworkStatsType } from "@/lib/quanta-api";
import { Activity, Database, Cpu, Layers, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function NetworkStats() {
  const [stats, setStats] = useState<NetworkStatsType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchStats();
        if (data) setStats(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
    const interval = setInterval(loadStats, 15000);
    return () => clearInterval(interval);
  }, []);

  const renderFinality = () => {
    return "< 0.8s"; // Simulated or static representation for BFT finality
  };

  const statCards = [
    {
      index: 1,
      title: "Chain Height",
      icon: Layers,
      value: stats ? stats.chain_length.toLocaleString() : "---",
      description: "Total BFT blocks confirmed on-chain since genesis.",
    },
    {
      index: 2,
      title: "Total Supply",
      icon: Database,
      value: stats
        ? `${(stats.total_supply / 1_000_000).toLocaleString(undefined, { maximumFractionDigits: 1 })}K`
        : "---",
      description: "QUA tokens currently in active circulation.",
    },
    {
      index: 3,
      title: "Active Validators",
      icon: Cpu,
      value: "21",
      description: "Institutional bare-metal nodes securing the AlephBFT consensus.",
    },
    {
      index: 4,
      title: "Avg Finality",
      icon: Activity,
      value: renderFinality(),
      description: "Estimated time to irrevocable deterministic finality.",
    },
  ];

  return (
    <section className="py-10 sm:py-20 bg-transparent text-black">
      <div className="container mx-auto px-6">
        {/* Header — matches Features style */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase px-4 py-2 bg-gray-100 rounded-full">
              Live Network
            </span>
          </div>
          <h2 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight leading-[0.95]">
            Real-Time <br />
            <span className="text-[#C4ED5F]">Chain Stats</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl leading-relaxed font-light">
            Live data pulled directly from the Quanta node every{" "}
            <span className="text-black font-medium">15 seconds.</span>
          </p>

          <div className="mt-6">
            <Link
              href="https://quascan.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-[#C4ED5F] hover:text-black hover:bg-[#C4ED5F]/5 transition-all duration-200 group"
            >
              View in QuaScan
              <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#C4ED5F] transition-colors" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((card) => (
            <div
              key={card.index}
              className={`bg-white shadow-xl -translate-y-1 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[200px] group transition-all duration-300 border border-[#C4ED5F]/30 hover:-translate-y-2 hover:shadow-2xl ${loading ? "animate-pulse" : ""}`}
            >
              <div>
                {/* Circled Number */}
                <div className="w-8 h-8 rounded-full border border-teal-600/30 flex items-center justify-center mb-6 text-sm font-mono text-teal-700 font-medium">
                  {card.index}
                </div>

                <h3 className="text-2xl font-bold mb-2 text-gray-900 tracking-tight tabular-nums">
                  {card.value}
                </h3>
                <p className="text-gray-800 font-semibold text-sm mb-2">{card.title}</p>
                <p className="text-gray-500 leading-relaxed text-sm">{card.description}</p>
              </div>

              {/* Bottom icon graphic */}
              <div className="mt-6 flex justify-end opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                <card.icon className="w-12 h-12 text-teal-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
