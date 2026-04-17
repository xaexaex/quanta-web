import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post-Quantum Cryptography Services",
  description: "Enterprise-grade post-quantum cryptography integration, security audits, and wallet architecture migration services by Quanta Chain.",
  alternates: {
    canonical: "https://quantachain.org/services",
  },
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-transparent text-black selection:bg-[#00E599] selection:text-black pt-20">
            <Navbar />
            <Services />
            <Footer />
        </main>
    );
}
