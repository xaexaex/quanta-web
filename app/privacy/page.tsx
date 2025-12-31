import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
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
              Privacy <span className="text-gray-400">Policy.</span>
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
              <h2 className="text-3xl font-bold mb-6 text-black">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to Quanta Chain ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website quantachain.org (the "Site").
              </p>
              <p className="text-gray-600 leading-relaxed">
                As an open-source blockchain project in development, we collect minimal personal information. This policy describes what data we may collect and how we use it.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">2. Information We Collect</h2>
              
              <h3 className="text-2xl font-bold mb-4 text-black">2.1 Automatically Collected Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you visit our Site, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>IP address</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-black">2.2 Blockchain Data</h3>
              <p className="text-gray-600 leading-relaxed">
                If you interact with the Quanta blockchain, all transaction data is publicly recorded on the blockchain. This is inherent to blockchain technology and is not controlled by this privacy policy. Blockchain data includes wallet addresses, transaction amounts, and transaction history.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">3. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Improve and optimize our Site</li>
                <li>Understand how visitors use our Site</li>
                <li>Detect and prevent technical issues</li>
                <li>Monitor and analyze usage trends</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">4. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 leading-relaxed">
                We may use cookies and similar tracking technologies to track activity on our Site. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">5. Data Sharing and Disclosure</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">6. Third-Party Links</h2>
              <p className="text-gray-600 leading-relaxed">
                Our Site may contain links to third-party websites (such as GitHub, Discord, Twitter). We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">7. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement reasonable security measures to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">8. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>The right to access your personal data</li>
                <li>The right to correct inaccurate data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to object to processing of your data</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">9. Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our Site is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">11. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
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
