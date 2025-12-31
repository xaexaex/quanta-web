import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-[#00E599] selection:text-black">
      <Navbar />
      <Hero />
      <Features />
      <Roadmap />
      <FAQ />
      
      {/* Call to Action Section */}
      <section className="py-40 relative overflow-hidden bg-black mx-4 md:mx-8 rounded-[3rem] text-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#00E599]/10 rounded-full blur-[150px] -z-10" />
        
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-8xl font-bold mb-10 tracking-tighter">
            Ready to go <br />
            <span className="text-[#00E599]">Quantum?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed">
            Join the network of the future. Start mining, building, or transacting on the most secure chain ever built.
          </p>
          <a 
            href="https://github.com/xaexaex/quanta"
            target="_blank"
            className="inline-flex items-center justify-center px-12 py-6 text-2xl font-bold text-black bg-[#00E599] rounded-full hover:bg-[#00E599]/90 transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,229,153,0.4)]"
          >
            Get the Code
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
