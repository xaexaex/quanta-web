"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Menu, X, Search, Droplet, Pickaxe, Wallet, BookOpen, FileText, Users, Newspaper, MessageSquare, Award, Send, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";

type NavItem = {
  name: string;
  href: string;
  external?: boolean;
  badge?: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
};

type NavGroup = {
  name: string;
  items: NavItem[];
};

const navItems: NavGroup[] = [
  {
    name: "Ecosystem",
    items: [
      { name: "Explorer", href: "#", badge: "Soon", description: "View real-time blocks & transactions", icon: Search },
      { name: "Faucet", href: "/faucet", badge: "Live", description: "Get Testnet QUA for development", icon: Droplet },
      { name: "Mining Pool", href: "#", badge: "Soon", description: "Join forces to secure the network", icon: Pickaxe },
      { name: "Wallet", href: "#", badge: "Soon", description: "Securely store & manage your assets", icon: Wallet },
    ],
  },
  {
    name: "Developers",
    items: [
      { name: "GitHub", href: "https://github.com/quantachain/quanta", external: true, description: "Source code & contributions", icon: Github },
      { name: "Documentation", href: "https://quantachain.gitbook.io/quantachain-docs", external: true, description: "Integration guides & API reference", icon: BookOpen },
      { name: "Whitepaper", href: "/docs/WHITEPAPER.docx", description: "Technical architecture & specs", icon: FileText },
    ],
  },
  {
    name: "Company",
    items: [
      { name: "About", href: "/team", description: "Our mission & the team", icon: Users },
      { name: "Services", href: "/services", description: "Quantum-safe engineering & consulting", icon: Briefcase },
      { name: "Community", href: "/community", description: "Join the Quanta revolution", icon: MessageSquare },
      { name: "Press Kit", href: "/press", description: "Brand assets & media resources", icon: Award },
    ],
  },
  {
    name: "Social",
    items: [
      { name: "Discord", href: "https://discord.gg/7KmMBrrJEz", external: true, description: "Chat with the community", icon: MessageSquare },
      { name: "X (Twitter)", href: "https://x.com/quantachain", external: true, description: "Follow for announcements", icon: Send },
      { name: "Telegram", href: "https://t.me/quantanetwork", external: true, description: "Real-time discussions", icon: Send },
    ],
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
      ? "bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm"
      : "bg-transparent border-b border-transparent"
      }`}>
      <div className="container mx-auto px-6 h-20">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <Image
              src="/logo/quanta-transparent-bg-logo.svg"
              alt="Quanta Logo"
              width={48}
              height={48}
              className="w-12 h-12 transition-transform group-hover:scale-110"
              priority
            />
            <span className="text-2xl md:text-3xl font-bold tracking-tighter text-black">
              Quanta<span className="text-[#00E599]">.</span>
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
                <button className={`text-sm font-semibold transition-colors flex items-center gap-1 cursor-pointer ${activeDropdown === item.name ? 'text-[#00E599]' : 'text-gray-600 hover:text-black'
                  }`}>
                  {item.name}
                </button>

                {/* Dropdown Card */}
                {/* Dropdown Card */}
                {activeDropdown === item.name && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[22rem] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-2 border border-black/5 overflow-hidden ring-1 ring-black/5">
                      <div className="grid gap-1">
                        {item.items.map((subItem, idx) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            target={subItem.external ? "_blank" : undefined}
                            className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
                          >
                            {/* Icon */}
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-[#00E599] group-hover:text-black transition-all duration-300">
                              {subItem.icon && <subItem.icon className="w-5 h-5" />}
                            </div>

                            {/* Content */}
                            <div>
                              <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-sm font-bold text-gray-900 group-hover:text-black transition-colors">{subItem.name}</span>
                                {subItem.badge && (
                                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide ${subItem.badge === "Live"
                                    ? "bg-[#00E599]/20 text-emerald-800"
                                    : "bg-gray-100 text-gray-500"
                                    }`}>
                                    {subItem.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-gray-500 leading-relaxed font-medium group-hover:text-gray-600">
                                {subItem.description}
                              </p>
                            </div>
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
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              href="https://github.com/quantachain/quanta"
              target="_blank"
              className="inline-flex items-center justify-center w-10 h-10 text-gray-600 hover:text-[#00E599] transition-all hover:bg-gray-50 rounded-full hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://discord.gg/7KmMBrrJEz"
              target="_blank"
              className="inline-flex items-center justify-center w-10 h-10 text-gray-600 hover:text-[#00E599] transition-all hover:bg-gray-50 rounded-full hover:scale-110"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </Link>
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-600 hover:text-black transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name}>
                <h4 className="font-bold text-sm uppercase tracking-wider text-gray-900 mb-3">{item.name}</h4>
                <div className="space-y-1 pl-4">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      target={subItem.external ? "_blank" : undefined}
                      className="flex items-center justify-between py-2 text-gray-600 hover:text-[#00E599] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="text-sm font-medium">{subItem.name}</span>
                      {subItem.badge && (
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${subItem.badge === "Live"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-500"
                          }`}>
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
