import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-transparent text-black selection:bg-[#00E599] selection:text-black pt-20">
            <Navbar />
            <Services />
            <Footer />
        </main>
    );
}
