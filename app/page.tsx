import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import Developer from "@/components/Developer";
import Research from "@/components/Research";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="divider" />
        <Problem />
        <div className="divider" />
        <HowItWorks />
        <div className="divider" />
        <Tokenomics />
        <div className="divider" />
        <Roadmap />
        <div className="divider" />
        <Developer />
        <Research />
      </main>
      <Footer />
    </>
  );
}
