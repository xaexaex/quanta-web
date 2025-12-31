import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold tracking-tighter text-black">
          Quanta<span className="text-[#00E599]">.</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-500 hover:text-black transition-colors">
          <Link href="#features" className="hover:text-[#00E599] transition-colors">Features</Link>
          <Link href="#tech" className="hover:text-[#00E599] transition-colors">Technology</Link>
          <Link href="#roadmap" className="hover:text-[#00E599] transition-colors">Roadmap</Link>
          <Link href="https://github.com/xaexaex/quanta" target="_blank" className="hover:text-[#00E599] transition-colors">GitHub</Link>
        </div>

        <Link 
          href="https://github.com/xaexaex/quanta"
          target="_blank"
          className="hidden md:inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-black bg-[#00E599] rounded-full hover:bg-[#00E599]/90 transition-all hover:scale-105"
        >
          Start Building
        </Link>
      </div>
    </nav>
  );
}
