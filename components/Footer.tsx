import Link from "next/link";
import Image from "next/image";

const GithubIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const DiscordIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
  </svg>
);

const XIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

const TelegramIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.686c.223-.204-.054-.31-.35-.11l-6.4 4.024-2.76-.86c-.6-.185-.615-.6.125-.89l10.736-4.135c.498-.18 1.042.106.892.892z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const footerLinks = {
  Network: [
    { label: "Katenet V3", href: "https://katenet.quantachain.org", external: true },
    { label: "Block Explorer", href: "https://quascan.xyz", external: true },
    { label: "Faucet", href: "/faucet" },
    { label: "Chrome Wallet", href: "https://chrome.google.com/webstore/detail/glofbcgdmodmaohealombcgoapdbdaff", external: true },
    { label: "Mining Pool", href: "https://github.com/quantachain/quanta-pool", external: true },
    { label: "Data Indexer", href: "https://github.com/quantachain/quanta-indexer", external: true },
    { label: "Mobile Wallet", href: "https://github.com/quantachain/quanta-mobile-wallet", external: true },
    { label: "Docker Hub", href: "https://hub.docker.com/r/xd637/quanta-node", external: true },
  ],
  Build: [
    { label: "GitHub", href: "https://github.com/quantachain/quanta", external: true },
    { label: "Documentation", href: "https://quantachain.gitbook.io/quantachain-docs", external: true },
    { label: "NPM SDK", href: "https://www.npmjs.com/package/quanta-sdk", external: true },
    { label: "WASM Engine", href: "https://crates.io/crates/quanta-wasm", external: true },
    { label: "Whitepaper", href: "/docs/WHITEPAPER.docx" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Press Kit", href: "/press" },
    { label: "Security", href: "https://github.com/quantachain/quanta/blob/main/SECURITY.md", external: true },
  ],
};


export default function Footer() {
  return (
    <div className="bg-transparent pt-4 sm:pt-8">
      <footer className="border-t border-white/10 bg-[#050505] rounded-t-[2.5rem] sm:rounded-t-[4rem] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">

          {/* Brand column */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <Image
                src="/logo/quanta-transparent-bg-logo.svg"
                alt="Quanta"
                width={28}
                height={28}
                className="w-7 h-7"
              />
              <span
                className="text-base font-bold text-white tracking-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Quantachain<span className="text-[#C4ED5F]">.</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-6">
              The AI agent execution layer. Post-quantum blockchain built in Rust.
              Falcon-512 signatures. 6-second BFT finality. Sub-cent gas.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { href: "https://github.com/quantachain/quanta", icon: <GithubIcon />, label: "GitHub" },
                { href: "https://discord.gg/7KmMBrrJEz", icon: <DiscordIcon />, label: "Discord" },
                { href: "https://x.com/quantachain", icon: <XIcon />, label: "X" },
                { href: "https://t.me/quantanetwork", icon: <TelegramIcon />, label: "Telegram" },
                { href: "https://www.linkedin.com/company/quantachain", icon: <LinkedInIcon />, label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-gray-500 hover:text-[#C4ED5F] hover:border-[#C4ED5F]/30 hover:bg-[#C4ED5F]/10 transition-all duration-150"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className="md:col-span-8 grid grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4
                  className="text-[10px] text-gray-400 uppercase tracking-widest mb-4"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {section}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target={"external" in link && link.external ? "_blank" : undefined}
                        rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                        className="text-sm text-gray-400 hover:text-[#C4ED5F] hover:-translate-y-0.5 inline-block transition-all duration-150"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-gray-400"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Quantachain V2.0.0
          </p>
          <p
            className="text-xs text-gray-400"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {new Date().getFullYear()} QUANTALABS PVT LTD {" "}
          </p>
        </div>
      </div>
      </footer>
    </div>
  );
}
