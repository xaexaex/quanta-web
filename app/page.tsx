import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhoWeFor from "@/components/WhoWeFor";
import Roadmap from "@/components/Roadmap";
import DeveloperTools from "@/components/DeveloperTools";
import Research from "@/components/Research";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="divider" />
        <Problem />
        <WhoWeFor />
        <DeveloperTools />
        <Roadmap />
        <Research />
        <EmailCapture />
      </main>
      <Footer />
    </>
  );
}
