import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-16 sm:py-24 border-t border-gray-100 bg-transparent text-black">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <Image
                src="/logo/quanta-transparent-bg-logo.svg"
                alt="Quanta Logo"
                width={48}
                height={48}
                className="w-12 h-12 transition-transform group-hover:scale-110"
              />
              <span className="text-3xl font-bold tracking-tighter">
                Quanta<span className="text-[#00E599]">.</span>
              </span>
            </Link>
            <p className="text-gray-500 max-w-sm text-base leading-relaxed mb-6">
              Quantum-resistant blockchain built with NIST-standardized post-quantum cryptography for the next era of secure decentralized applications.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <Link
                href="https://discord.gg/7KmMBrrJEz"
                target="_blank"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#00E599] hover:text-[#00E599] transition-all hover:scale-110"
                aria-label="Discord"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" /></svg>
              </Link>
              <Link
                href="https://x.com/quantachain"
                target="_blank"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#00E599] hover:text-[#00E599] transition-all hover:scale-110"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </Link>
              <Link
                href="https://t.me/quantanetwork"
                target="_blank"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#00E599] hover:text-[#00E599] transition-all hover:scale-110"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" /></svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/quantachain"
                target="_blank"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#00E599] hover:text-[#00E599] transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </Link>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Ecosystem */}
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-900">Ecosystem</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Link href="https://scan.quantachain.org" target="_blank" className="hover:text-[#00E599] transition-colors">Explorer</Link>
                  <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Live</span>
                </li>
                <li className="flex items-center gap-2">
                  <Link href="/faucet" className="hover:text-[#00E599] transition-colors">Faucet</Link>
                  <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Live</span>
                </li>
                <li className="flex items-center gap-2">
                  <Link href="#" className="hover:text-[#00E599] transition-colors">Mining Pool</Link>
                  <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-semibold">Soon</span>
                </li>
                <li className="flex items-center gap-2">
                  <Link href="https://chrome.google.com/webstore/detail/glofbcgdmodmaohealombcgoapdbdaff" target="_blank" className="hover:text-[#00E599] transition-colors">Wallet</Link>
                  <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Live</span>
                </li>
              </ul>
            </div>

            {/* Developers */}
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-900">Developers</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><Link href="https://github.com/quantachain/quanta" target="_blank" className="hover:text-[#00E599] transition-colors">GitHub</Link></li>
                <li><Link href="https://quantachain.gitbook.io/quantachain-docs" target="_blank" rel="noopener noreferrer" className="hover:text-[#00E599] transition-colors">Documentation</Link></li>
                <li><Link href="/docs/WHITEPAPER.docx" className="hover:text-[#00E599] transition-colors">Whitepaper</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-900">Company</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><Link href="/team" className="hover:text-[#00E599] transition-colors">About</Link></li>
                <li><Link href="/community" className="hover:text-[#00E599] transition-colors">Community</Link></li>
                <li><Link href="/press" className="hover:text-[#00E599] transition-colors">Press Kit</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-900">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="mailto:contact@quantachain.org" className="hover:text-[#00E599] transition-colors">Partnerships</a></li>
                <li><a href="mailto:info@quantachain.org" className="hover:text-[#00E599] transition-colors">General Inquiries</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-sm text-gray-500 gap-4">
          <p className="font-mono text-xs">© {new Date().getFullYear()} Quanta Chain. All rights reserved.</p>
          <div className="flex gap-6 text-xs">
            <Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
