import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Roadmap from "@/components/Roadmap";

export const metadata: Metadata = {
  title: "Roadmap",
  description: "Quanta Chain development roadmap. Track our progress from testnet preparation through mainnet launch and beyond.",
};

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-transparent text-black">
      <Navbar />

      <div className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        <div className="container mx-auto px-6">
          {/* Hero */}
          <div className="max-w-4xl mb-16 sm:mb-20">
            <div className="inline-block mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase px-4 py-2 bg-gray-100 rounded-full">
                Roadmap
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight leading-[0.95]">
              Development <br />
              <span className="text-[#00E599]">Roadmap</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-light max-w-2xl">
              Our journey from testnet to mainnet. <span className="text-black font-medium">Transparent milestones, realistic timelines, and security-first development.</span>
            </p>
          </div>
        </div>
      </div>

      <Roadmap />
      <Footer />
    </main>
  );
}
