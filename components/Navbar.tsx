"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  BookOpen,
  Globe,
  MessageSquare,
  Blocks,
  ArrowUpRight,
  ChevronDown,
  Search,
  Droplet,
  Pickaxe,
  Wallet,
  Code2,
  Package,
  FileText,
  Briefcase,
  Users,
  Award,
  Smartphone,
} from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

type NavItem = {
  name: string;
  href: string;
  external?: boolean;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  badge?: string;
};

type NavGroup = {
  name: string;
  items: NavItem[];
  footer?: { label: string; href: string };
};

const navGroups: NavGroup[] = [
  {
    name: "Ecosystem",
    footer: { label: "Explore the full ecosystem →", href: "/#ecosystem" },
    items: [
      {
        name: "Block Explorer",
        href: "https://scan.quantachain.org",
        external: true,
        description: "Real-time blocks, transactions & analytics",
        icon: Search,
        badge: "Live",
      },
      {
        name: "Faucet",
        href: "/faucet",
        description: "Get Testnet QUA for development",
        icon: Droplet,
        badge: "Live",
      },
      {
        name: "Chrome Wallet",
        href: "https://chrome.google.com/webstore/detail/glofbcgdmodmaohealombcgoapdbdaff",
        external: true,
        description: "Falcon-512 secured browser extension wallet",
        icon: Wallet,
        badge: "Live",
      },
      {
        name: "Mobile Wallet",
        href: "https://github.com/quantachain/quanta-mobile-wallet",
        external: true,
        description: "Android app with native Rust cryptography",
        icon: Smartphone,
        badge: "Building",
      },
      {
        name: "Mining Pool",
        href: "#",
        description: "Join forces to secure the network",
        icon: Pickaxe,
        badge: "Soon",
      },
    ],
  },
  {
    name: "Developers",
    footer: { label: "Read the documentation →", href: "https://quantachain.gitbook.io/quantachain-docs" },
    items: [
      {
        name: "GitHub",
        href: "https://github.com/quantachain/quanta",
        external: true,
        description: "Source code & open source contributions",
        icon: GithubIcon,
      },
      {
        name: "Documentation",
        href: "https://quantachain.gitbook.io/quantachain-docs",
        external: true,
        description: "Integration guides & API reference",
        icon: BookOpen,
      },
      {
        name: "NPM SDK",
        href: "https://www.npmjs.com/package/quanta-sdk",
        external: true,
        description: "Official JS/TS client library",
        icon: Package,
        badge: "Live",
      },
      {
        name: "WASM Engine",
        href: "https://crates.io/crates/quanta-wasm",
        external: true,
        description: "Rust post-quantum cryptography module",
        icon: Code2,
        badge: "Live",
      },
      {
        name: "Whitepaper",
        href: "/docs/WHITEPAPER.docx",
        description: "Protocol architecture & technical specs",
        icon: FileText,
      },
    ],
  },
  {
    name: "Company",
    footer: { label: "Learn about Quantalabs →", href: "https://quantalabs.cc" },
    items: [
      {
        name: "Quantalabs",
        href: "https://quantalabs.cc",
        external: true,
        description: "Core protocol engineering lab",
        icon: Briefcase,
      },
      {
        name: "Team",
        href: "/team",
        description: "Protocol mission & the people behind Quanta",
        icon: Users,
      },
      {
        name: "Community",
        href: "/community",
        description: "Join the Quanta ecosystem",
        icon: Globe,
      },
      {
        name: "Press Kit",
        href: "/press",
        description: "Brand assets & media resources",
        icon: Award,
      },
    ],
  },
  {
    name: "Social",
    footer: { label: "Join the Discord →", href: "https://discord.gg/7KmMBrrJEz" },
    items: [
      {
        name: "Discord",
        href: "https://discord.gg/7KmMBrrJEz",
        external: true,
        description: "Chat with the community",
        icon: DiscordIcon,
        badge: "Active",
      },
      {
        name: "X (Twitter)",
        href: "https://x.com/quantachain",
        external: true,
        description: "Follow for announcements",
        icon: MessageSquare,
      },
      {
        name: "Telegram",
        href: "https://t.me/quantanetwork",
        external: true,
        description: "Real-time discussions",
        icon: MessageSquare,
      },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm"
          : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
        <div className="flex items-center justify-between h-full">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <Image
              src="/logo/quanta-transparent-bg-logo.svg"
              alt="Quanta Logo"
              width={48}
              height={48}
              className="w-10 h-10 transition-transform group-hover:scale-110"
              priority
            />
            <span className="text-2xl font-bold tracking-tighter text-black">
              Quanta<span className="text-[#00E599]">.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navGroups.map((group) => (
              <div
                key={group.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(group.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-full transition-all ${activeDropdown === group.name
                      ? "text-black bg-gray-100"
                      : "text-gray-600 hover:text-black hover:bg-gray-50"
                    }`}
                >
                  {group.name}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === group.name ? "rotate-180 text-[#00E599]" : ""
                      }`}
                  />
                </button>

                {activeDropdown === group.name && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
                    style={{ minWidth: "22rem" }}
                    onMouseEnter={() => handleMouseEnter(group.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white rounded-2xl shadow-[0_24px_60px_-10px_rgba(0,0,0,0.12)] border border-black/5 overflow-hidden">
                      <div className="p-2">
                        {group.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noopener noreferrer" : undefined}
                            className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 group-hover/item:bg-black group-hover/item:text-white transition-all">
                              {item.icon && <item.icon className="w-4 h-4" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-sm font-bold text-gray-900">{item.name}</span>
                                {item.badge && (
                                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${item.badge === "Live" || item.badge === "Active"
                                      ? "bg-green-50 text-green-700 border border-green-100"
                                      : item.badge === "Building"
                                        ? "bg-blue-50 text-blue-600 border border-blue-100"
                                        : "bg-gray-100 text-gray-500 border border-gray-200"
                                    }`}>
                                    {item.badge}
                                  </span>
                                )}
                                {item.external && (
                                  <ArrowUpRight className="w-3 h-3 text-gray-300 group-hover/item:text-gray-500 transition-colors" />
                                )}
                              </div>
                              <p className="text-xs text-gray-500 font-medium leading-snug">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {group.footer && (
                        <div className="px-4 py-3 border-t border-gray-50 bg-gray-50/50">
                          <Link
                            href={group.footer.href}
                            target={group.footer.href.startsWith("http") ? "_blank" : undefined}
                            rel={group.footer.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-xs font-bold text-gray-400 hover:text-[#00E599] transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {group.footer.label}
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="https://github.com/quantachain/quanta"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center w-9 h-9 text-gray-500 hover:text-black transition-all hover:bg-gray-100 rounded-full"
              aria-label="GitHub"
            >
              <GithubIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href="https://discord.gg/7KmMBrrJEz"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center w-9 h-9 text-gray-500 hover:text-[#5865F2] transition-all hover:bg-indigo-50 rounded-full"
              aria-label="Discord"
            >
              <DiscordIcon className="w-[18px] h-[18px]" />
            </a>
            <Link
              href="/faucet"
              className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 bg-black text-white rounded-full font-semibold text-sm hover:bg-[#00E599] hover:text-black transition-all"
            >
              Get QUA
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-600 hover:text-black transition-colors rounded-full hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white border-t border-gray-100 overflow-y-auto z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-2">

            {navGroups.map((group) => (
              <div key={group.name} className="border border-gray-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === group.name ? null : group.name)
                  }
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-bold text-sm text-black uppercase tracking-wider">
                    {group.name}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform ${mobileExpanded === group.name ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {mobileExpanded === group.name && (
                  <div className="border-t border-gray-50 bg-gray-50/50 px-3 py-2">
                    {group.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center shrink-0">
                          {item.icon && <item.icon className="w-4 h-4 text-gray-600" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-gray-900">{item.name}</span>
                            {item.badge && (
                              <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-full ${item.badge === "Live" || item.badge === "Active"
                                  ? "bg-green-50 text-green-700"
                                  : item.badge === "Building"
                                    ? "bg-blue-50 text-blue-600"
                                    : "bg-gray-100 text-gray-500"
                                }`}>
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 font-medium">{item.description}</p>
                        </div>
                        {item.external && <ArrowUpRight className="w-3.5 h-3.5 text-gray-300 ml-auto shrink-0" />}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/faucet"
              onClick={() => setIsOpen(false)}
              className="mt-2 block px-6 py-4 text-sm font-bold text-white bg-black rounded-2xl text-center hover:bg-[#00E599] hover:text-black transition-all uppercase tracking-wider"
            >
              Get QUA
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
