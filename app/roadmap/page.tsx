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
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      
      <div className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Hero */}
          <div className="text-center mb-16 sm:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 sm:mb-6 px-4">
              Development <span className="text-[#00E599]">Roadmap</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Our journey from testnet to mainnet. Transparent milestones, realistic timelines, and security-first development.
            </p>
          </div>
        </div>
      </div>

      <Roadmap />
      <Footer />
    </main>
  );
}
