import Link from "next/link";
import { GitFork } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold tracking-tighter text-black">
          Quanta<span className="text-[#00E599]">.</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link 
            href="https://github.com/xaexaex/quanta"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-bold text-black bg-[#00E599] rounded-full hover:bg-[#00E599]/90 transition-all hover:scale-105"
          >
            Start Contributing
            <GitFork className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
