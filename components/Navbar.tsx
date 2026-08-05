"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  Search,
  Droplet,
  Wallet,
  BookOpen,
  Code2,
  Package,
  FileText,
  Globe,
  MessageSquare,
  Server,
  Layers,
  Bot,
  Building2,
  Microscope,
  Briefcase,
  Newspaper,
  Mail,
  Cog,
  Zap,
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
  label: string;
  href: string;
  external?: boolean;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  badge?: string;
  disabled?: boolean;
};

type NavGroup = {
  name: string;
  items: NavItem[];
};

const navGroups: NavGroup[] = [
  {
    name: "Network",
    items: [
      {
        label: "Katenet",
        href: "https://katenet.quantachain.org",
        external: true,
        description: "The V3 Testnet Environment",
        icon: Zap,
        badge: "Testnet",
      },
      {
        label: "QuaScan",
        href: "https://quascan.xyz",
        external: true,
        description: "Real-time blocks, transactions, validators",
        icon: Search,
        badge: "Live",
      },
      {
        label: "Faucet",
        href: "/faucet",
        description: "Get testnet QUA for development",
        icon: Droplet,
      },
      {
        label: "Validators",
        href: "/validators",
        description: "Live network node leaderboard",
        icon: Server,
        badge: "Live",
      },
      {
        label: "Quanta Wallet",
        href: "https://chromewebstore.google.com/detail/quanta-wallet/glofbcgdmodmaohealombcgoapdbdaff",
        external: true,
        description: "Official Chrome extension wallet",
        icon: Wallet,
        badge: "New",
      },
    ],
  },
  {
    name: "Build",
    items: [
      {
        label: "GitHub",
        href: "https://github.com/quantachain/quanta",
        external: true,
        description: "Source code and open contributions",
        icon: GithubIcon,
      },
      {
        label: "Documentation",
        href: "https://quantachain.gitbook.io/quantachain-docs",
        external: true,
        description: "Node setup, API reference, SDK guides",
        icon: BookOpen,
      },
      {
        label: "AI Integration",
        href: "/ai-integration",
        description: "How AI agents use the execution layer",
        icon: Bot,
        badge: "New",
      },
      {
        label: "Whitepaper",
        href: "https://quantachain.gitbook.io/quantachain-docs",
        external: true,
        description: "Protocol architecture and technical specs",
        icon: FileText,
      },
    ],
  },
  {
    name: "Community",
    items: [
      {
        label: "Discord",
        href: "https://discord.gg/7KmMBrrJEz",
        external: true,
        description: "Chat with builders and validators",
        icon: DiscordIcon,
      },
      {
        label: "X (Twitter)",
        href: "https://x.com/quantachain",
        external: true,
        description: "Announcements and updates",
        icon: MessageSquare,
      },
      {
        label: "Telegram",
        href: "https://t.me/quantanetwork",
        external: true,
        description: "Real-time discussions",
        icon: MessageSquare,
      },
      {
        label: "Community Hub",
        href: "#",
        description: "Community grants — coming soon",
        icon: Globe,
        badge: "Soon",
        disabled: true,
      },
    ],
  },
  {
    name: "Company",
    items: [
      {
        label: "About Us",
        href: "https://quantalabs.cc/company",
        external: true,
        description: "Details about Quanta Labs",
        icon: Building2,
      },
      {
        label: "Services",
        href: "https://quantalabs.cc/services",
        external: true,
        description: "Enterprise nodes and consulting",
        icon: Cog,
      },
      {
        label: "Blog",
        href: "https://quantalabs.cc/blog",
        external: true,
        description: "Company updates and tutorials",
        icon: Newspaper,
      },
      {
        label: "Careers",
        href: "https://quantalabs.cc/careers",
        external: true,
        description: "Open roles for building the network",
        icon: Briefcase,
      },
      {
        label: "Contact",
        href: "https://quantalabs.cc/contact",
        external: true,
        description: "Get in touch for partnerships",
        icon: Mail,
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleMouseEnter = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      {/* Full-width Navbar */}
      <header 
        id="main-navbar"
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-[rgba(0,0,0,0.06)] shadow-sm"
            : "bg-white/80 backdrop-blur-md border-b border-transparent"
        }`}
        style={{ top: "var(--banner-offset, 40px)" }}
      >
        <nav className="w-full max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <Image
              src="/logo/quanta-transparent-bg-logo.svg"
              alt="Quanta"
              width={32}
              height={32}
              className="w-8 h-8 transition-transform duration-200 group-hover:scale-110"
              priority
            />
            <span
              className="text-lg font-bold tracking-tight text-black"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Quanta<span className="text-[#C4ED5F]">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navGroups.map((group) => (
              <div
                key={group.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(group.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                    activeDropdown === group.name
                      ? "text-[#C4ED5F] bg-[#0a0a0a]"
                      : "text-gray-600 hover:text-black hover:bg-gray-100/80"
                  }`}
                >
                  {group.name}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      activeDropdown === group.name ? "rotate-180 text-[#C4ED5F]" : ""
                    }`}
                  />
                </button>

                {activeDropdown === group.name && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                    style={{ minWidth: "22rem" }}
                    onMouseEnter={() => handleMouseEnter(group.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-[#0a0a0a]/95 backdrop-blur-2xl rounded-2xl border border-[rgba(255,255,255,0.08)] overflow-hidden shadow-[0_30px_60px_-10px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.05)] p-2">
                        {group.items.map((item) => (
                          item.disabled ? (
                            <div
                              key={item.label}
                              className="flex items-start gap-3.5 p-3 rounded-xl opacity-40 cursor-not-allowed"
                            >
                              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400">
                                {item.icon && <item.icon className="w-4 h-4" />}
                              </div>
                              <div className="flex-1 min-w-0 pt-0.5">
                                <div className="flex items-center gap-1.5 mb-1">
                                  <span className="text-sm font-semibold text-gray-300">{item.label}</span>
                                  <span className="px-1.5 py-0.5 rounded border border-white/10 bg-white/5 text-[9px] font-bold tracking-wider uppercase text-gray-400">
                                    Coming Soon
                                  </span>
                                </div>
                                <p className="text-[13px] text-gray-500 leading-snug font-normal">{item.description}</p>
                              </div>
                            </div>
                          ) : (
                          <Link
                            key={item.label}
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noopener noreferrer" : undefined}
                            className="group/item flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/[0.06] transition-all duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover/item:bg-[#C4ED5F]/10 group-hover/item:border-[#C4ED5F]/30 group-hover/item:text-[#C4ED5F] transition-all duration-200 shadow-inner">
                              {item.icon && <item.icon className="w-4 h-4" />}
                            </div>
                            <div className="flex-1 min-w-0 pt-0.5">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-semibold text-gray-200 group-hover/item:text-white transition-colors">{item.label}</span>
                                {item.badge && (
                                  <span className="px-1.5 py-0.5 rounded border border-[#C4ED5F]/30 bg-[#C4ED5F]/10 text-[9px] font-bold tracking-wider uppercase text-[#C4ED5F]">
                                    {item.badge}
                                  </span>
                                )}
                                {item.external && (
                                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover/item:text-[#C4ED5F]/80 transition-colors" />
                                )}
                              </div>
                              <p className="text-[13px] text-gray-400 leading-snug font-normal group-hover/item:text-gray-300 transition-colors">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                          )
                        ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="https://github.com/quantachain/quanta"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center justify-center w-8 h-8 text-gray-400 hover:text-black transition-colors duration-150 rounded-lg hover:bg-[rgba(0,0,0,0.04)]"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>


            <Link
              href="https://github.com/quantachain/quanta/releases/tag/v3.0.0-alpha"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-semibold bg-[#C4ED5F] text-black border border-[#C4ED5F] rounded-lg transition-all duration-150 shadow-[0_0_20px_rgba(196,237,95,0.2)] hover:-translate-y-[1px]"
            >
              Run a Node
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-8 h-8 flex items-center justify-center text-gray-600 hover:text-black transition-colors rounded-lg hover:bg-[rgba(0,0,0,0.04)]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white pt-24 overflow-y-auto">
          <div className="px-6 pb-10 flex flex-col gap-2">
            {navGroups.map((group) => (
              <div key={group.name}>
                <button
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === group.name ? null : group.name)
                  }
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-[rgba(0,0,0,0.06)] text-left mb-1 hover:bg-[rgba(0,0,0,0.03)] transition-colors"
                >
                  <span
                    className="text-sm font-semibold text-black uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {group.name}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform ${
                      mobileExpanded === group.name ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileExpanded === group.name && (
                  <div className="border border-[rgba(0,0,0,0.04)] rounded-xl bg-gray-50 px-3 py-2 mb-2">
                    {group.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-[rgba(0,0,0,0.04)] transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="w-7 h-7 rounded-lg bg-gray-100 border border-[rgba(0,0,0,0.06)] flex items-center justify-center text-gray-400">
                          {item.icon && <item.icon className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-medium text-black">{item.label}</span>
                            {item.badge && (
                              <span className="px-1.5 py-0.5 rounded border border-[#C4ED5F] bg-[#C4ED5F]/10 text-[9px] font-bold tracking-wider uppercase text-[#7bb800]">
                                {item.badge}
                              </span>
                            )}
                            {item.external && (
                              <ArrowUpRight className="inline-block w-3 h-3 text-gray-400 ml-1" />
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="flex flex-col gap-3 mt-4">

              <Link
                href="https://github.com/quantachain/quanta/releases/tag/v3.0.0-alpha"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-[#C4ED5F] text-black border border-[#C4ED5F] transition-all shadow-[0_0_20px_rgba(196,237,95,0.2)]"
              >
                Run a Node
              </Link>
              <Link
                href="/faucet"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium text-gray-600 border border-[rgba(0,0,0,0.06)] hover:text-black transition-colors"
              >
                Testnet Faucet
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
