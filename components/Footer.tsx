import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 sm:py-20 md:py-24 border-t border-gray-100 bg-white text-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 sm:gap-16 mb-16 sm:mb-20 md:mb-24">
          <div>
            <Link href="/" className="text-3xl sm:text-4xl font-bold tracking-tighter mb-6 sm:mb-8 block">
              Quanta<span className="text-[#00E599]">.</span>
            </Link>
            <p className="text-gray-500 max-w-sm text-base sm:text-lg leading-relaxed">
              Quantum-resistant blockchain built with NIST-standardized post-quantum cryptography for the next era of secure decentralized applications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16 w-full md:w-auto">
            <div>
              <h4 className="font-bold mb-6 sm:mb-8 text-base sm:text-lg">Ecosystem</h4>
              <ul className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-500">
                <li className="flex items-center gap-2">
                  <Link href="#" className="hover:text-[#00E599] transition-colors">Explorer</Link>
                  <span className="text-[10px] sm:text-xs bg-gray-200 text-gray-600 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-semibold">Soon</span>
                </li>
                <li className="flex items-center gap-2">
                  <Link href="#" className="hover:text-[#00E599] transition-colors">Mining Pool</Link>
                  <span className="text-[10px] sm:text-xs bg-gray-200 text-gray-600 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-semibold">Soon</span>
                </li>
                <li className="flex items-center gap-2">
                  <Link href="#" className="hover:text-[#00E599] transition-colors">Wallet</Link>
                  <span className="text-[10px] sm:text-xs bg-gray-200 text-gray-600 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-semibold">Soon</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 sm:mb-8 text-base sm:text-lg">Developers</h4>
              <ul className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-500">
                <li><Link href="https://github.com/quantachain/quanta" target="_blank" className="hover:text-[#00E599] transition-colors">GitHub</Link></li>
                <li><Link href="/docs" className="hover:text-[#00E599] transition-colors">Documentation</Link></li>
                <li>
                  <Link href="/docs/WHITEPAPER.docx" className="hover:text-[#00E599] transition-colors">Whitepaper</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 sm:mb-8 text-base sm:text-lg">Company</h4>
              <ul className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-500">
                <li><Link href="/team" className="hover:text-[#00E599] transition-colors">About</Link></li>
                <li><Link href="/blog" className="hover:text-[#00E599] transition-colors">Blog</Link></li>
                <li><Link href="/community" className="hover:text-[#00E599] transition-colors">Community</Link></li>
                <li><Link href="/press" className="hover:text-[#00E599] transition-colors">Press Kit</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 sm:mb-8 text-base sm:text-lg">Contact</h4>
              <ul className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-500">
                <li>
                  <a href="mailto:contact@quantachain.org" className="hover:text-[#00E599] transition-colors">Partnerships</a>
                </li>
                <li>
                  <a href="mailto:info@quantachain.org" className="hover:text-[#00E599] transition-colors">General Inquiries</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 sm:pt-10 border-t border-gray-100 text-xs sm:text-sm text-gray-500 gap-6">
          <p>&copy; {new Date().getFullYear()} Quanta Chain. All rights reserved.</p>
          <div className="flex gap-6 sm:gap-8">
            <Link href="https://discord.gg/7KmMBrrJEz" target="_blank" className="hover:text-[#00E599] transition-colors">Discord</Link>
            <Link href="https://x.com/quantachain" target="_blank" className="hover:text-[#00E599] transition-colors">X</Link>
            <Link href="https://t.me/quantanetwork" target="_blank" className="hover:text-[#00E599] transition-colors">Telegram</Link>
          </div>
          <div className="flex gap-6 sm:gap-8">
            <Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
