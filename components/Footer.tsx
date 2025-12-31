import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-24 border-t border-gray-100 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <div>
            <Link href="/" className="text-4xl font-bold tracking-tighter mb-8 block">
              Quanta<span className="text-[#00E599]">.</span>
            </Link>
            <p className="text-gray-500 max-w-sm text-lg leading-relaxed">
              The quantum-resistant blockchain for the next generation of secure decentralized applications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div>
              <h4 className="font-bold mb-8 text-lg">Ecosystem</h4>
              <ul className="space-y-6 text-gray-500">
                <li className="flex items-center gap-2">
                  <Link href="#" className="hover:text-[#00E599] transition-colors">Explorer</Link>
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full font-semibold">Soon</span>
                </li>
                <li className="flex items-center gap-2">
                  <Link href="#" className="hover:text-[#00E599] transition-colors">Mining Pool</Link>
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full font-semibold">Soon</span>
                </li>
                <li className="flex items-center gap-2">
                  <Link href="#" className="hover:text-[#00E599] transition-colors">Wallet</Link>
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full font-semibold">Soon</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-8 text-lg">Developers</h4>
              <ul className="space-y-6 text-gray-500">
                <li><Link href="https://github.com/xaexaex/quanta" target="_blank" className="hover:text-[#00E599] transition-colors">GitHub</Link></li>
                <li><Link href="/docs" className="hover:text-[#00E599] transition-colors">Documentation</Link></li>
                <li>
                  <Link href="https://www.notion.so/Whitepaper-2daa050e9c2e80b09b47f6860ef4c379" target="_blank" className="hover:text-[#00E599] transition-colors">Whitepaper</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-8 text-lg">Community</h4>
              <ul className="space-y-6 text-gray-500">
                <li><Link href="#" className="hover:text-[#00E599] transition-colors">Discord</Link></li>
                <li><Link href="#" className="hover:text-[#00E599] transition-colors">Twitter</Link></li>
                <li><Link href="#" className="hover:text-[#00E599] transition-colors">Telegram</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-100 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Quanta Chain. All rights reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
