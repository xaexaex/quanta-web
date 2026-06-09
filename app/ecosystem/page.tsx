import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ecosystemData } from "@/lib/ecosystem-data";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Ecosystem",
  description: "Explore the wallets, AI agents, and infrastructure building on the Quantachain network, the premier Post Quantum & AI blockchain.",
};

export default function EcosystemPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black mb-4" style={{ fontFamily: "var(--font-syne)" }}>
              Quantachain Ecosystem
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Discover the applications, wallets, and infrastructure powering the post-quantum AI execution layer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystemData.map((project) => (
              <Link
                href={`/ecosystem/${project.slug}`}
                key={project.slug}
                className="group flex flex-col bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center p-2">
                    <Image src={project.logo} alt={project.name} width={32} height={32} />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="px-2.5 py-1 rounded-full border border-gray-200 bg-white text-[10px] font-bold tracking-wider uppercase text-gray-500">
                      {project.category}
                    </span>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                      project.status === "Live" 
                        ? "border border-[#C4ED5F] bg-[#C4ED5F]/10 text-[#7bb800]" 
                        : "border border-blue-200 bg-blue-50 text-blue-600"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center text-[#7bb800] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details <ArrowUpRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
