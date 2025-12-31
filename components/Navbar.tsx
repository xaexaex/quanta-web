import Link from "next/link";
import { GitFork } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 md:h-24 flex items-center justify-between">
        <Link href="/" className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter text-black">
          Quanta<span className="text-[#00E599]">.</span>
        </Link>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <Link 
            href="https://github.com/xaexaex/quanta"
            target="_blank"
            className="inline-flex items-center justify-center gap-1 sm:gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-bold text-black bg-[#00E599] rounded-full hover:bg-[#00E599]/90 transition-all hover:scale-105"
          >
            <span className="hidden sm:inline">Start Contributing</span>
            <span className="sm:hidden">Contribute</span>
            <GitFork className="w-3 h-3 sm:w-4 sm:h-4" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
