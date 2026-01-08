import { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download, Palette, FileText, Image as ImageIcon, Video, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Press Kit",
  description: "Quanta Chain press kit. Download logos, brand assets, project descriptions, and media resources for coverage of the quantum-resistant blockchain.",
};

export default function PressKitPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Hero */}
          <div className="text-center mb-20">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-6">
              Press <span className="text-[#00E599]">Kit</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to cover Quanta. Logos, brand assets, descriptions, and media resources.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="max-w-4xl mx-auto mb-24 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-8">Quick Facts</h2>
            <div className="grid md:grid-cols-2 gap-6 text-lg">
              <div>
                <h3 className="font-bold mb-2 text-gray-900">Name</h3>
                <p className="text-gray-600">Quanta Chain</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-gray-900">Type</h3>
                <p className="text-gray-600">Quantum-Resistant Blockchain</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-gray-900">Technology</h3>
                <p className="text-gray-600">Rust, Falcon-512, Kyber-1024</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-gray-900">Consensus</h3>
                <p className="text-gray-600">Proof-of-Work (SHA-256)</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-gray-900">Block Time</h3>
                <p className="text-gray-600">~10 seconds</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-gray-900">GitHub</h3>
                <a href="https://github.com/quantachain/quanta" target="_blank" className="text-[#00E599] hover:underline">
                  github.com/xaexaex/quanta
                </a>
              </div>
            </div>
          </div>

          {/* Project Descriptions */}
          <div className="max-w-4xl mx-auto mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Project Descriptions</h2>

            <div className="space-y-8">
              <div className="border-l-4 border-[#00E599] pl-6">
                <h3 className="font-bold text-xl mb-3">One-Liner (Twitter/Social)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Quanta: The first quantum-resistant blockchain built with NIST-standardized post-quantum cryptography.
                </p>
              </div>

              <div className="border-l-4 border-[#00E599] pl-6">
                <h3 className="font-bold text-xl mb-3">Short Description (100 words)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Quanta is a next-generation blockchain designed to be secure against quantum computer attacks. Built entirely in Rust and utilizing NIST-standardized post-quantum cryptographic algorithms (Falcon-512 for digital signatures and Kyber-1024 for key encapsulation), Quanta provides enterprise-grade security for the quantum era. With a ~10 second block time, familiar account-based model, and comprehensive security features including HD wallet support and encrypted transaction memos, Quanta is production-ready infrastructure for decentralized applications that need to withstand future quantum threats.
                </p>
              </div>

              <div className="border-l-4 border-[#00E599] pl-6">
                <h3 className="font-bold text-xl mb-3">Long Description (250 words)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Quanta Chain is the world's first production-ready, quantum-resistant blockchain protocol built from the ground up to protect against the imminent threat posed by quantum computers. As major tech companies make rapid advances in quantum computing capabilities, traditional blockchain networks using ECDSA and RSA cryptography face an existential security risk. Quanta addresses this challenge head-on.
                  <br /><br />
                  Developed entirely in Rust for memory safety and performance, Quanta implements NIST-standardized post-quantum cryptographic algorithms: Falcon-512 for digital signatures and Kyber-1024 for key encapsulation mechanisms. This isn't experimental cryptography—these are officially standardized algorithms vetted by the world's leading cryptographers.
                  <br /><br />
                  The protocol features a familiar account-based model similar to Ethereum, making it accessible for developers transitioning from existing blockchain platforms. With approximately 10-second block times, comprehensive security monitoring, HD wallet support, and encrypted transaction memos, Quanta provides all the features enterprises need for real-world deployment.
                  <br /><br />
                  Quanta uses Proof-of-Work consensus with SHA-256 mining, enabling decentralized network security while remaining quantum-resistant. The entire codebase is open source, allowing security researchers and developers worldwide to audit and contribute to the protocol.
                  <br /><br />
                  As quantum computers advance from research labs to practical reality, the blockchain industry faces a race against time. Quanta isn't just preparing for the quantum future—it's building the secure foundation that will protect digital assets when traditional cryptography becomes obsolete.
                </p>
              </div>
            </div>
          </div>

          {/* Brand Assets */}
          <div className="max-w-4xl mx-auto mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Brand Assets</h2>

            {/* Colors */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Brand Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="w-full h-32 bg-[#00E599] rounded-2xl mb-3 shadow-lg"></div>
                  <p className="font-bold">Primary</p>
                  <p className="text-sm text-gray-600 font-mono">#00E599</p>
                </div>
                <div>
                  <div className="w-full h-32 bg-black rounded-2xl mb-3 shadow-lg"></div>
                  <p className="font-bold">Black</p>
                  <p className="text-sm text-gray-600 font-mono">#000000</p>
                </div>
                <div>
                  <div className="w-full h-32 bg-white border-2 border-gray-200 rounded-2xl mb-3 shadow-lg"></div>
                  <p className="font-bold">White</p>
                  <p className="text-sm text-gray-600 font-mono">#FFFFFF</p>
                </div>
                <div>
                  <div className="w-full h-32 bg-gray-500 rounded-2xl mb-3 shadow-lg"></div>
                  <p className="font-bold">Gray</p>
                  <p className="text-sm text-gray-600 font-mono">#6B7280</p>
                </div>
              </div>
            </div>

            {/* Logo Downloads */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Logo Downloads</h3>
              <p className="text-gray-600 mb-6">
                Download our official logo in various formats. Available in SVG and PNG.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {/* SVG Logo - Light Background */}
                <div className="border-2 border-gray-200 rounded-2xl p-8">
                  <div className="bg-white flex items-center justify-center h-40 mb-4 rounded-xl">
                    <Image
                      src="/logo/quanta.svg"
                      alt="Quanta Logo"
                      width={160}
                      height={160}
                      className="w-36 h-36"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mb-4 text-center font-semibold">Logo SVG - Light Background</p>
                  <div className="flex gap-2">
                    <a
                      href="/logo/quanta.svg"
                      download="quanta-logo.svg"
                      className="flex-1 px-4 py-3 bg-[#00E599] text-black rounded-full text-sm font-semibold hover:bg-[#00E599]/90 transition-all text-center flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      SVG
                    </a>
                    <a
                      href="/logo/quanta.png"
                      download="quanta-logo.png"
                      className="flex-1 px-4 py-3 bg-gray-200 text-black rounded-full text-sm font-semibold hover:bg-gray-300 transition-all text-center flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      PNG
                    </a>
                  </div>
                </div>

                {/* SVG Logo - Dark Background */}
                <div className="border-2 border-gray-200 rounded-2xl p-8 bg-black">
                  <div className="bg-black flex items-center justify-center h-40 mb-4 rounded-xl">
                    <Image
                      src="/logo/quanta.svg"
                      alt="Quanta Logo"
                      width={160}
                      height={160}
                      className="w-36 h-36"
                    />
                  </div>
                  <p className="text-sm text-gray-400 mb-4 text-center font-semibold">Logo SVG - Dark Background</p>
                  <div className="flex gap-2">
                    <a
                      href="/logo/quanta.svg"
                      download="quanta-logo.svg"
                      className="flex-1 px-4 py-3 bg-[#00E599] text-black rounded-full text-sm font-semibold hover:bg-[#00E599]/90 transition-all text-center flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      SVG
                    </a>
                    <a
                      href="/logo/quanta.png"
                      download="quanta-logo.png"
                      className="flex-1 px-4 py-3 bg-gray-800 text-white rounded-full text-sm font-semibold hover:bg-gray-700 transition-all text-center flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      PNG
                    </a>
                  </div>
                </div>

                {/* Wordmark with Logo - Light */}
                <div className="border-2 border-gray-200 rounded-2xl p-8">
                  <div className="bg-white flex items-center justify-center h-40 mb-4 rounded-xl">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/logo/quanta.svg"
                        alt="Quanta Logo"
                        width={64}
                        height={64}
                        className="w-16 h-16"
                      />
                      <span className="text-5xl font-bold tracking-tighter">
                        Quanta<span className="text-[#00E599]">.</span>
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 text-center font-semibold">Full Wordmark - Light</p>
                  <p className="text-xs text-gray-500 text-center">Use logo + text for maximum brand recognition</p>
                </div>

                {/* Wordmark with Logo - Dark */}
                <div className="border-2 border-gray-200 rounded-2xl p-8 bg-black">
                  <div className="bg-black flex items-center justify-center h-40 mb-4 rounded-xl">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/logo/quanta.svg"
                        alt="Quanta Logo"
                        width={64}
                        height={64}
                        className="w-16 h-16"
                      />
                      <span className="text-5xl font-bold tracking-tighter text-white">
                        Quanta<span className="text-[#00E599]">.</span>
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mb-4 text-center font-semibold">Full Wordmark - Dark</p>
                  <p className="text-xs text-gray-500 text-center">Use logo + text for maximum brand recognition</p>
                </div>
              </div>
            </div>

            {/* Usage Guidelines */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Brand Guidelines</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">✓</div>
                  <p>Use the official Quanta wordmark with the green dot accent</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">✓</div>
                  <p>Maintain clear space around the logo (minimum 20px)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">✓</div>
                  <p>Use the primary green (#00E599) for accents and highlights</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 text-red-700 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">✗</div>
                  <p>Don't alter the logo colors or proportions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 text-red-700 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">✗</div>
                  <p>Don't use gradients or effects on the wordmark</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Talking Points */}
          <div className="max-w-4xl mx-auto mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Key Talking Points</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-xl mb-3">Quantum Threat Is Real</h3>
                <p className="text-gray-600">IBM, Google, and others are making rapid progress. Current blockchain cryptography will be vulnerable within a decade.</p>
              </div>
              <div className="border-2 border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-xl mb-3">NIST-Standardized</h3>
                <p className="text-gray-600">Using officially standardized post-quantum algorithms, not experimental cryptography.</p>
              </div>
              <div className="border-2 border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-xl mb-3">Production-Ready</h3>
                <p className="text-gray-600">Full-featured blockchain with HD wallets, encrypted memos, and comprehensive monitoring.</p>
              </div>
              <div className="border-2 border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-xl mb-3">Rust Performance</h3>
                <p className="text-gray-600">Memory-safe implementation with the speed and security of Rust.</p>
              </div>
              <div className="border-2 border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-xl mb-3">Developer-Friendly</h3>
                <p className="text-gray-600">Account-based model familiar to Ethereum developers.</p>
              </div>
              <div className="border-2 border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-xl mb-3">Open Source</h3>
                <p className="text-gray-600">Fully transparent codebase for security audits and community contributions.</p>
              </div>
            </div>
          </div>

          {/* Development Status & Timeline */}
          <div className="max-w-4xl mx-auto mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Current Status & Timeline</h2>
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-3xl p-10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[#00E599] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Current Phase: Testnet Preparation (35% Complete)</h3>
                    <p className="text-gray-600">Core protocol development complete. Internal testing underway. Target: Q1 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gray-300 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Next: Public Testnet Launch</h3>
                    <p className="text-gray-600">Public testnet with block explorer, external audits, bug bounty program. Target: Q2 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gray-300 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Future: Mainnet Launch</h3>
                    <p className="text-gray-600">Production mainnet with full ecosystem tools (wallet, explorer, mining pools). Target: Q1 2027</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 italic">
                  Note: All dates are estimates and subject to security audit results. We prioritize security over speed.
                </p>
              </div>
            </div>
          </div>

          {/* Media Coverage */}
          <div className="max-w-4xl mx-auto mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Media Coverage</h2>
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-3xl p-10 text-center">
              <p className="text-gray-600 text-lg mb-6">
                We're an early-stage project building in public. As we reach key milestones (testnet launch, audits, mainnet),
                we'll update this section with media coverage and press releases.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-full">
                <div className="w-2 h-2 bg-[#00E599] rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700">Coverage coming as we launch testnet</span>
              </div>
            </div>
          </div>

          {/* Media Contact */}
          <div className="max-w-3xl mx-auto bg-black text-white rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00E599]/10 rounded-full blur-[100px]" />
            <div className="relative z-10 text-center">
              <Mail className="w-12 h-12 text-[#00E599] mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Media Inquiries</h2>
              <p className="text-xl text-gray-300 mb-8">
                For interviews, comments, or additional information, please reach out via GitHub or check back soon for our press contact details.
              </p>
              <a
                href="https://github.com/quantachain/quanta"
                target="_blank"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#00E599] text-black font-bold rounded-full hover:bg-[#00E599]/90 transition-all"
              >
                Contact on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
