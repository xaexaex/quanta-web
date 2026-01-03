"use client";

import Link from "next/link";
import { GitFork, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 h-20 md:h-24">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="text-2xl md:text-3xl font-bold tracking-tighter text-black flex-shrink-0">
            Quanta<span className="text-[#00E599]">.</span>
          </Link>
          
          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            <Link href="/about" className="text-sm font-semibold text-gray-700 hover:text-[#00E599] transition-colors">
              About
            </Link>
            <Link href="/docs" className="text-sm font-semibold text-gray-700 hover:text-[#00E599] transition-colors">
              Docs
            </Link>
            <Link href="/blog" className="text-sm font-semibold text-gray-700 hover:text-[#00E599] transition-colors">
              Blog
            </Link>
            <Link href="/community" className="text-sm font-semibold text-gray-700 hover:text-[#00E599] transition-colors">
              Community
            </Link>
            <Link href="/press" className="text-sm font-semibold text-gray-700 hover:text-[#00E599] transition-colors">
              Press Kit
            </Link>
          </div>
          
          {/* Right Side Actions */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#00E599] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link 
              href="https://github.com/xaexaex/quanta"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 md:px-8 py-2.5 md:py-3 text-xs sm:text-sm font-bold text-black bg-[#00E599] rounded-full hover:bg-[#00E599]/90 transition-all hover:scale-105"
            >
              <span className="hidden sm:inline">Start Contributing</span>
              <span className="sm:hidden">Contribute</span>
              <GitFork className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            <Link 
              href="/about" 
              className="text-lg font-semibold text-gray-700 hover:text-[#00E599] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/docs" 
              className="text-lg font-semibold text-gray-700 hover:text-[#00E599] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Docs
            </Link>
            <Link 
              href="/blog" 
              className="text-lg font-semibold text-gray-700 hover:text-[#00E599] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/community" 
              className="text-lg font-semibold text-gray-700 hover:text-[#00E599] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </Link>
            <Link 
              href="/press" 
              className="text-lg font-semibold text-gray-700 hover:text-[#00E599] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Press Kit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
