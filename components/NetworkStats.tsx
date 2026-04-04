"use client";

import { useEffect, useState } from "react";
import { fetchStats, type NetworkStats as NetworkStatsType } from "@/lib/quanta-api";
import { Activity, Database, Cpu, Layers } from "lucide-react";

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
    // Poll every 15 seconds
    const interval = setInterval(loadStats, 15000);
    return () => clearInterval(interval);
  }, []);

  const renderHashrate = (diff: number) => {
    const hashrate = diff / 30;
    if (hashrate > 1000000) return `${(hashrate / 1000000).toLocaleString(undefined, { maximumFractionDigits: 2 })} MH/s`;
    if (hashrate > 1000) return `${(hashrate / 1000).toLocaleString(undefined, { maximumFractionDigits: 2 })} kH/s`;
    return `${hashrate.toLocaleString(undefined, { maximumFractionDigits: 0 })} H/s`;
  };

  const statCards = [
    {
      title: "Chain Height",
      icon: Layers,
      value: stats ? stats.chain_length.toLocaleString() : "---",
      color: "text-blue-600",
      bgSubtle: "bg-blue-50"
    },
    {
      title: "Total Supply",
      icon: Database,
      value: stats ? `${(stats.total_supply / 1_000_000).toLocaleString(undefined, { maximumFractionDigits: 1 })}K` : "---",
      color: "text-emerald-500",
      bgSubtle: "bg-emerald-50"
    },
    {
      title: "Difficulty",
      icon: Cpu,
      value: stats ? `${(stats.current_difficulty / 1_000_000).toFixed(1)}M` : "---",
      color: "text-purple-500",
      bgSubtle: "bg-purple-50"
    },
    {
      title: "Network Hashrate",
      icon: Activity,
      value: stats ? renderHashrate(stats.current_difficulty) : "---",
      color: "text-orange-500",
      bgSubtle: "bg-orange-50"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 z-20 relative">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-4">
        {statCards.map((card, idx) => (
          <div 
            key={idx} 
            className={`bg-white p-6 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group ${loading ? 'animate-pulse' : ''}`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300 ${card.bgSubtle} ${card.color}`}>
              <card.icon className="w-6 h-6" />
            </div>
            
            <p className="text-sm font-semibold text-gray-500 tracking-tight mb-1">{card.title}</p>
            
            <div className="text-2xl sm:text-3xl font-black tracking-tighter text-gray-900">
              {card.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
