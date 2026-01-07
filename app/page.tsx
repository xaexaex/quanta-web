import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyQuanta from "@/components/WhyQuanta";
import Features from "@/components/Features";
import Tokenomics from "@/components/Tokenomics";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-[#00E599] selection:text-black">
      <Navbar />
      <Hero />
      <WhyQuanta />
      <Features />
      <Tokenomics />
      <FAQ />
      
      {/* Call to Action Section */}
      <section className="py-16 sm:py-24 md:py-40 relative overflow-hidden bg-black mx-4 md:mx-8 rounded-[2rem] md:rounded-[3rem] text-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] md:w-[1000px] h-[600px] sm:h-[800px] md:h-[1000px] bg-[#00E599]/10 rounded-full blur-[150px] -z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 md:mb-10 tracking-tighter">
            Join the Quantum-Resistant <br />
            <span className="text-[#00E599]">Revolution</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 leading-relaxed">
            We're building in public. Testnet launches Q2 2026, mainnet Q1 2027. Start exploring the codebase, run a node, 
            or join the community today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a 
              href="https://github.com/quantachain/quanta"
              target="_blank"
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-black bg-[#00E599] rounded-full hover:bg-[#00E599]/90 transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,229,153,0.4)] w-full sm:w-auto"
            >
              View on GitHub
            </a>
            <a 
              href="/docs"
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all w-full sm:w-auto"
            >
              Read Documentation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
