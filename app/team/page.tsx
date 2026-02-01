import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmailCapture from "@/components/EmailCapture";
import TeamMember from "@/components/TeamMember";
import { Shield, Code, Zap, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Core Team",
  description: "Learn about Quanta Chain, our mission to build quantum-resistant blockchain infrastructure, and why post-quantum cryptography matters now.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent text-black">
      <Navbar />

      <div className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        <div className="container mx-auto px-6">
          {/* Hero */}
          <div className="max-w-4xl mb-16 sm:mb-20">
            <div className="inline-block mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase px-4 py-2 bg-gray-100 rounded-full">
                Team
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight leading-[0.95]">
              Meet the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E599] to-emerald-600">Core Team</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-light max-w-2xl">
              Building production-ready quantum-resistant blockchain infrastructure with <span className="text-black font-medium">NIST-standardized post-quantum cryptography for long-term security.</span>
            </p>
          </div>

          {/* The Team */}
          <div className="mb-20 sm:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center px-4">Core Development Team</h2>
            <p className="text-center text-gray-600 text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Building QUANTA to secure blockchain infrastructure against quantum threats for decades to come.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
              <TeamMember
                name="Kishore K"
                role="Founder & Core Protocol Architect"
                description="Architect of Quanta's quantum-resistant protocol design. Leading the vision for post-quantum blockchain infrastructure with extreme focus on long-term security and sustainable economics."
                imageSrc="/team/founder.jpg"
                fallbackText="KK"
                fallbackGradient="bg-gradient-to-br from-[#00E599] to-[#00E599]/50"
                githubUrl="https://github.com/XD637"
                twitterUrl="https://x.com/idcidkidgfa"
                linkedinUrl="https://www.linkedin.com/in/kishore-k-100819212"
              />

              <TeamMember
                name="Flexispy"
                role="Community Manager"
                description="Building and nurturing Quanta's global community. Coordinating developer relations, managing social channels, and ensuring transparent communication with stakeholders."
                imageSrc="/team/flexispy.jpg"
                fallbackText="FP"
                fallbackGradient="bg-gradient-to-br from-blue-500 to-blue-400"
                twitterUrl="https://x.com/flexispy30"
              />
            </div>

            {/* Additional Contributors Note */}
            <div className="text-center mt-8 sm:mt-12 px-4">
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#00E599]/10 to-[#00E599]/5 border border-[#00E599]/20 rounded-full">
                <div className="w-2 h-2 bg-[#00E599] rounded-full" />
                <p className="text-gray-700 font-semibold text-xs sm:text-sm">
                  + Anonymous contributors helping build the future
                </p>
              </div>
            </div>
          </div>

          {/* Why We're Building This */}
          <div className="max-w-4xl mx-auto mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Quantum Resistance Matters</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Quantum computers are advancing rapidly. IBM, Google, and other tech giants are making significant progress. Conservative estimates suggest quantum computers capable of breaking current blockchain cryptography (ECDSA/EdDSA) could exist within 10-15 years.
              </p>
              <p>
                Traditional cryptographic algorithms like ECDSA and RSA, which secure billions of dollars in cryptocurrency today, will become vulnerable to Shor's algorithm running on sufficiently powerful quantum computers. This isn't speculation - it's a matter of when, not if.
              </p>
              <p className="font-semibold text-black">
                QUANTA is built from the ground up with NIST-standardized post-quantum cryptography: Falcon-512 signatures (NIST Level 1) and Kyber-1024 encryption (NIST Level 5, 256-bit quantum security). No known polynomial-time quantum attacks exist against these lattice-based algorithms.
              </p>
              <p>
                We're not waiting for quantum computers to break existing chains. We're building secure infrastructure now, protecting against harvest now, decrypt later attacks through 2045 and beyond.
              </p>
            </div>
          </div>

          {/* Project Transparency */}
          <div className="max-w-4xl mx-auto mb-20 sm:mb-24 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Project Transparency</h2>
            <div className="space-y-4 sm:space-y-6">
              <div className="border-l-4 border-[#00E599] pl-4 sm:pl-6">
                <h3 className="font-bold text-lg sm:text-xl mb-2">Funding Status</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Self-funded by founding team. No venture capital, no pre-mine, no ICO. We're building for the long term, not a quick exit.
                </p>
              </div>
              <div className="border-l-4 border-[#00E599] pl-4 sm:pl-6">
                <h3 className="font-bold text-lg sm:text-xl mb-2">Development Progress</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Active development since 2024. Core protocol implementation complete. Currently in Phase 1 of testnet preparation (35% complete as of January 2026).
                </p>
              </div>
              <div className="border-l-4 border-[#00E599] pl-4 sm:pl-6">
                <h3 className="font-bold text-lg sm:text-xl mb-2">Audits & Security</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  External security audits scheduled for Q2 2026 during public testnet phase. Bug bounty program will launch alongside testnet.
                </p>
              </div>
              <div className="border-l-4 border-[#00E599] pl-4 sm:pl-6">
                <h3 className="font-bold text-lg sm:text-xl mb-2">Open Source Commitment</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  All code is MIT licensed and publicly available on GitHub. We believe in radical transparency and community-driven development.
                </p>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-20 sm:mb-24 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">Technology Stack</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="border-2 border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-[#00E599] transition-all">
                <h3 className="font-bold text-lg sm:text-xl mb-2">Language</h3>
                <p className="text-sm sm:text-base text-gray-600">Rust 2021 for memory safety and performance</p>
              </div>
              <div className="border-2 border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-[#00E599] transition-all">
                <h3 className="font-bold text-lg sm:text-xl mb-2">Signatures</h3>
                <p className="text-sm sm:text-base text-gray-600">Falcon-512 (NIST Level 1, lattice-based)</p>
              </div>
              <div className="border-2 border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-[#00E599] transition-all">
                <h3 className="font-bold text-lg sm:text-xl mb-2">Encryption</h3>
                <p className="text-sm sm:text-base text-gray-600">Kyber-1024 (NIST Level 5, 256-bit quantum security)</p>
              </div>
              <div className="border-2 border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-[#00E599] transition-all">
                <h3 className="font-bold text-lg sm:text-xl mb-2">Consensus</h3>
                <p className="text-sm sm:text-base text-gray-600">Adaptive PoW with 10s block time</p>
              </div>
            </div>
          </div>

          {/* Join Us */}
          {/* <div className="max-w-3xl mx-auto px-4">
            <EmailCapture
              title="Join Our Journey"
              description="Follow our progress as we build the quantum-resistant future. Get development updates, technical insights, and early access opportunities."
              buttonText="Stay Updated"
            />
          </div> */}

          {/* Contact */}
          <div className="mt-12 sm:mt-16 text-center px-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Call for Passionate Builders</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
              We are looking for passionate contributors who believe in the post-quantum future. Whether you are a Rustacean, a cryptographer, or a community builder, join us in building the most secure blockchain infrastructure.
            </p>
            <a
              href="https://github.com/quantachain/quanta/issues"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all text-sm sm:text-base"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              View Open Issues
            </a>

            {/* Contact Information */}
            <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
              <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 text-left">
                <h4 className="font-bold text-base sm:text-lg mb-2">Partnerships & Connect</h4>
                <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">Collaborate or follow our professional updates.</p>
                <div className="flex flex-col gap-2">
                  <a href="mailto:contact@quantachain.org" className="text-[#00E599] hover:underline font-semibold text-sm sm:text-base">
                    contact@quantachain.org
                  </a>
                  <a href="https://www.linkedin.com/company/quantachain" target="_blank" className="text-[#00E599] hover:underline font-semibold text-sm sm:text-base">
                    Follow on LinkedIn &rarr;
                  </a>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 text-left">
                <h4 className="font-bold text-base sm:text-lg mb-2">General Inquiries</h4>
                <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">Questions about Quanta Chain?</p>
                <a href="mailto:info@quantachain.org" className="text-[#00E599] hover:underline font-semibold text-sm sm:text-base">
                  info@quantachain.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
