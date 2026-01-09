"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

type NavItem = {
  name: string;
  href: string;
  external?: boolean;
  badge?: string;
  description?: string;
};

type NavGroup = {
  name: string;
  items: NavItem[];
};

const navItems: NavGroup[] = [
  {
    name: "Ecosystem",
    items: [
      { name: "Explorer", href: "#", badge: "Soon", description: "View real-time blocks & transactions" },
      { name: "Mining Pool", href: "#", badge: "Soon", description: "Join forces to secure the network" },
      { name: "Wallet", href: "#", badge: "Soon", description: "Securely store & manage your assets" },
    ],
  },
  {
    name: "Developers",
    items: [
      { name: "GitHub", href: "https://github.com/quantachain/quanta", external: true, description: "Source code & contributions" },
      { name: "Documentation", href: "/docs", description: "Integration guides & API reference" },
      { name: "Whitepaper", href: "/docs/WHITEPAPER.docx", description: "Technical architecture & specs" },
    ],
  },
  {
    name: "Company",
    items: [
      { name: "About", href: "/team", description: "Our mission & the team" },
      { name: "Blog", href: "/blog", description: "Latest updates & announcements" },
      { name: "Community", href: "/community", description: "Join the Quanta revolution" },
      { name: "Press Kit", href: "/press", description: "Brand assets & media resources" },
    ],
  },
  {
    name: "Social",
    items: [
      { name: "Discord", href: "https://discord.gg/7KmMBrrJEz", external: true, description: "Chat with the community" },
      { name: "X (Twitter)", href: "https://x.com/quantachain", external: true, description: "Follow for announcements" },
      { name: "Telegram", href: "https://t.me/quantanetwork", external: true, description: "Real-time discussions" },
    ],
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 h-20 md:h-24">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 flex-shrink-0">
            <Image
              src="/logo/quanta-transparent.svg"
              alt="Quanta Logo"
              width={56}
              height={56}
              className="w-12 h-12 md:w-14 md:h-14 mt-1"
              priority
            />
            <span className="text-2xl md:text-3xl font-bold tracking-tighter text-foreground">
              Quanta<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`text-sm font-semibold transition-colors flex items-center gap-1 cursor-pointer ${activeDropdown === item.name ? 'text-primary' : 'text-muted hover:text-primary'
                  }`}>
                  {item.name}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                </button>

                {/* Dropdown Card */}
                {activeDropdown === item.name && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-80 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="bg-background border border-gray-200 rounded-2xl shadow-2xl p-3 ring-1 ring-black/5">
                      <div className="space-y-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            target={subItem.external ? "_blank" : undefined}
                            className="block px-4 py-3 rounded-xl hover:bg-card transition-all group cursor-pointer"
                          >
                            <div className="flex items-center justify-between mb-0.5">
                              <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                                {subItem.name}
                              </span>
                              {subItem.badge && (
                                <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                                  {subItem.badge}
                                </span>
                              )}
                            </div>
                            {subItem.description && (
                              <p className="text-xs text-muted/80 font-medium">
                                {subItem.description}
                              </p>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <Link
              href="https://github.com/quantachain/quanta"
              target="_blank"
              className="inline-flex items-center justify-center p-2.5 md:p-3 text-muted hover:text-primary transition-colors hover:bg-card rounded-full"
            >
              <Github className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
            <Link
              href="https://discord.gg/7KmMBrrJEz"
              target="_blank"
              className="inline-flex items-center justify-center p-2.5 md:p-3 text-muted hover:text-primary transition-colors hover:bg-card rounded-full"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </Link>
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-muted hover:text-primary transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-background">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-6">
            {navItems.map((item) => (
              <div key={item.name}>
                <h4 className="font-bold text-sm text-foreground mb-3">{item.name}</h4>
                <div className="space-y-2 pl-4">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      target={subItem.external ? "_blank" : undefined}
                      className="flex items-center justify-between py-2 text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="text-sm">{subItem.name}</span>
                      {subItem.badge && (
                        <span className="text-xs bg-card text-gray-600 px-2 py-1 rounded-full font-semibold">
                          {subItem.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
