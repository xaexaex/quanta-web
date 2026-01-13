import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Tokenomics from "@/components/Tokenomics";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import TrustIndicators from "@/components/TrustIndicators";
import EmailCapture from "@/components/EmailCapture";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-black selection:bg-[#00E599] selection:text-black">
      <Navbar />
      <Hero />
      <Features />
      <Tokenomics />

      <section className="py-12 sm:py-24 bg-transparent">
        <div className="container mx-auto px-6">
          <EmailCapture />
        </div>
      </section>

      {/* <TrustIndicators /> */}
      {/* <FAQ /> */}

      {/* Call to Action Section (Old one was here, keeping it removed as replaced or moving logic) - Actually, user said change other components to same style. If I remove this huge black block, does it fit? 
      The TrustIndicators has a "Commitment" black block. 
      The EmailCapture is a "Join Waitlist". 
      The old CTA was "Join Revolution". 
      I will replace the OLD CTA with the NEW components. */}

      <Footer />
    </main>
  );
}
