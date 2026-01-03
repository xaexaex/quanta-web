import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmailCapture from "@/components/EmailCapture";
import TeamMember from "@/components/TeamMember";
import { Shield, Code, Zap, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Quanta Chain, our mission to build quantum-resistant blockchain infrastructure, and why post-quantum cryptography matters now.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Hero */}
          <div className="text-center mb-20">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-6">
              Building the <span className="text-[#00E599]">Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're a team of cryptographers, blockchain engineers, and security researchers dedicated to protecting digital assets in the quantum era.
            </p>
          </div>

          {/* Mission */}
          <div className="max-w-5xl mx-auto mb-24">
            <div className="bg-gradient-to-br from-black to-gray-900 text-white rounded-3xl p-12 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#00E599]/10 rounded-full blur-[120px]" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Mission</h2>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                  To build the world's first production-ready, quantum-resistant blockchain that provides enterprise-grade security for the post-quantum world.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00E599]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-[#00E599]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Security First</h3>
                      <p className="text-gray-400 text-sm">Built with NIST-standardized post-quantum cryptography</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00E599]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Code className="w-6 h-6 text-[#00E599]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Open Source</h3>
                      <p className="text-gray-400 text-sm">Fully transparent and community-auditable code</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00E599]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-[#00E599]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Performance</h3>
                      <p className="text-gray-400 text-sm">Rust-based implementation for speed and safety</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Team */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Core Developing Team</h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
              Meet the team building Quanta - securing the blockchain future against quantum threats.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <TeamMember
                name="XD"
                role="Founder"
                description="Leading the vision for quantum-resistant blockchain infrastructure"
                imageSrc="/team/founder.jpg"
                fallbackText="XD"
                fallbackGradient="bg-gradient-to-br from-[#00E599] to-[#00E599]/50"
                githubUrl="https://github.com/XD637"
              />

              <TeamMember
                name="Main Developer"
                role="Core Protocol Engineer"
                description="Building the quantum-resistant blockchain protocol in Rust"
                imageSrc="/team/xae.jpg"
                fallbackIcon="code"
                fallbackGradient="bg-gradient-to-br from-gray-800 to-gray-600"
                githubUrl="https://github.com/xaexaex"
                twitterUrl="https://x.com/Idcidkidgfa"
              />

              <TeamMember
                name="flexipsy"
                role="Community Manager"
                description="Growing and supporting the Quanta community"
                imageSrc="/team/flexispy.jpg"
                fallbackGradient="bg-gradient-to-br from-blue-500 to-blue-400"
                twitterUrl="https://x.com/flexispy30"
              />
            </div>

            {/* Additional Contributors Note */}
            <div className="text-center mt-12">
              <p className="text-gray-600 text-sm">
                + Anonymous contributors helping build the future
              </p>
            </div>
          </div>

          {/* Why We're Building This */}
          <div className="max-w-4xl mx-auto mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Quantum Resistance Matters</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Quantum computers are no longer science fiction. IBM, Google, and other tech giants are making rapid progress in quantum computing capabilities. While this is exciting for scientific advancement, it poses an existential threat to current blockchain technology.
              </p>
              <p>
                Traditional cryptographic algorithms like ECDSA and RSA, which secure billions of dollars in cryptocurrency today, will become vulnerable to quantum attacks within the next decade. This isn't a matter of "if" but "when."
              </p>
              <p className="font-semibold text-black">
                Quanta is built from the ground up to be quantum-resistant, using NIST-standardized post-quantum cryptographic algorithms including Falcon-512 for signatures and Kyber-1024 for key encapsulation.
              </p>
              <p>
                We're not waiting for quantum computers to break existing chains. We're building the secure foundation now, so when the quantum era arrives, your assets remain protected.
              </p>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technology Stack</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border-2 border-gray-100 rounded-2xl p-6 hover:border-[#00E599] transition-all">
                <h3 className="font-bold text-xl mb-2">Language</h3>
                <p className="text-gray-600">Rust for memory safety and performance</p>
              </div>
              <div className="border-2 border-gray-100 rounded-2xl p-6 hover:border-[#00E599] transition-all">
                <h3 className="font-bold text-xl mb-2">Signatures</h3>
                <p className="text-gray-600">Falcon-512 (NIST standard)</p>
              </div>
              <div className="border-2 border-gray-100 rounded-2xl p-6 hover:border-[#00E599] transition-all">
                <h3 className="font-bold text-xl mb-2">Key Exchange</h3>
                <p className="text-gray-600">Kyber-1024 encryption</p>
              </div>
              <div className="border-2 border-gray-100 rounded-2xl p-6 hover:border-[#00E599] transition-all">
                <h3 className="font-bold text-xl mb-2">Consensus</h3>
                <p className="text-gray-600">Proof-of-Work (SHA-256)</p>
              </div>
            </div>
          </div>

          {/* Join Us */}
          <div className="max-w-3xl mx-auto">
            <EmailCapture 
              title="Join Our Journey"
              description="Follow our progress as we build the quantum-resistant future. Get development updates, technical insights, and early access opportunities."
              buttonText="Stay Updated"
            />
          </div>

          {/* Contact */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Want to Contribute?</h3>
            <p className="text-gray-600 mb-6">
              We welcome contributors, researchers, and security auditors. Check out our GitHub or reach out via email.
            </p>
            <a 
              href="https://github.com/xaexaex/quanta/issues" 
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all"
            >
              <Github className="w-5 h-5" />
              View Open Issues
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
