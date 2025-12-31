import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      
      <div className="pt-40 pb-32">
        {/* Header Section */}
        <div className="mb-16 bg-black rounded-[3rem] p-16 md:p-20 mx-4 md:mx-8 relative overflow-hidden">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#00E599]/10 rounded-full blur-[120px]" />
          
          <div className="relative z-10">
            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
              ← Back to Home
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
              Terms of <span className="text-gray-400">Service.</span>
            </h1>
            <p className="text-xl text-gray-400">
              Last updated: December 31, 2025
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                By accessing and using the Quanta Chain website (quantachain.org) and related services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                These Terms constitute a legally binding agreement between you and Quanta Chain regarding your use of the Services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">2. Description of Services</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Quanta Chain is an open-source blockchain project focused on quantum-resistant cryptography. Our Services include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Informational website about the Quanta blockchain</li>
                <li>Access to open-source code repositories</li>
                <li>Documentation and technical resources</li>
                <li>Community forums and communication channels</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">3. Development Stage Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>IMPORTANT:</strong> Quanta Chain is currently in active development. The blockchain, software, and all related tools are provided "AS IS" without any warranties or guarantees.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By using or contributing to Quanta Chain, you acknowledge that the project is experimental and may contain bugs, errors, or security vulnerabilities. Use at your own risk.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">4. Open Source License</h2>
              <p className="text-gray-600 leading-relaxed">
                Quanta Chain is open-source software. The code is available on GitHub and is subject to the license terms specified in the repository. Please review the license file in the repository for specific terms governing the use, modification, and distribution of the code.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">5. No Financial Advice</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nothing on this website constitutes financial, investment, legal, or tax advice. You should consult with appropriate professionals before making any decisions related to cryptocurrency or blockchain technology.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Cryptocurrency activities involve significant risk. You may lose some or all of your investment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">6. User Responsibilities</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When using our Services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use the Services for any illegal or unauthorized purpose</li>
                <li>Not attempt to harm or disrupt the Services or blockchain network</li>
                <li>Not impersonate others or provide false information</li>
                <li>Be solely responsible for maintaining the security of your private keys and wallet</li>
                <li>Understand that transactions on the blockchain are irreversible</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">7. Blockchain Transactions</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All transactions made on the Quanta blockchain are:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Publicly recorded and visible on the blockchain</li>
                <li>Irreversible and cannot be undone</li>
                <li>Your sole responsibility</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                We have no ability to reverse, cancel, or refund transactions. You are solely responsible for verifying transaction details before confirming.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">8. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Except for the open-source code, the content on this website, including text, graphics, logos, and design, is the property of Quanta Chain and is protected by copyright and other intellectual property laws.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The "Quanta" name and logo are trademarks of Quanta Chain. You may not use these trademarks without our prior written permission.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">9. Disclaimer of Warranties</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Warranties of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement</li>
                <li>Security or accuracy</li>
                <li>Uninterrupted or error-free operation</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">10. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, QUANTA CHAIN AND ITS CONTRIBUTORS SHALL NOT BE LIABLE FOR ANY:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Indirect, incidental, special, or consequential damages</li>
                <li>Loss of profits, data, or use</li>
                <li>Damages resulting from use or inability to use the Services</li>
                <li>Damages resulting from errors, bugs, or security vulnerabilities</li>
                <li>Loss of cryptocurrency or digital assets</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">11. Indemnification</h2>
              <p className="text-gray-600 leading-relaxed">
                You agree to indemnify and hold harmless Quanta Chain, its contributors, and affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the Services or violation of these Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">12. Third-Party Services</h2>
              <p className="text-gray-600 leading-relaxed">
                Our Services may contain links to third-party websites or services (such as GitHub, Discord, Twitter). We are not responsible for the content, privacy practices, or terms of service of these third-party services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">13. Modifications to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will post the updated Terms on this page with a new "Last updated" date. Your continued use of the Services after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">14. Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to terminate or suspend access to our Services at any time, with or without notice, for any reason, including violation of these Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">15. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">16. Severability</h2>
              <p className="text-gray-600 leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">17. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <ul className="list-none text-gray-600 space-y-2">
                <li>• Via GitHub: <a href="https://github.com/xaexaex/quanta" target="_blank" className="text-[#00E599] hover:underline">github.com/xaexaex/quanta</a></li>
                <li>• Via our community channels listed on our website</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
