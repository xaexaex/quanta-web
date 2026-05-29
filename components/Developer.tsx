import { ArrowUpRight } from "lucide-react";

const GithubIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const links = [
  {
    label: "GitHub",
    href: "https://github.com/quantachain/quanta",
    external: true,
    icon: <GithubIcon />,
    desc: "Source code",
  },
  {
    label: "Documentation",
    href: "https://quantachain.gitbook.io/quantachain-docs",
    external: true,
    icon: null,
    desc: "GitBook docs",
  },
  {
    label: "NPM SDK",
    href: "https://www.npmjs.com/package/quanta-sdk",
    external: true,
    icon: null,
    desc: "quanta-sdk",
  },
  {
    label: "WASM",
    href: "https://crates.io/crates/quanta-wasm",
    external: true,
    icon: null,
    desc: "quanta-wasm",
  },
  {
    label: "Whitepaper",
    href: "/docs/WHITEPAPER.docx",
    external: false,
    icon: null,
    desc: "DOI 10.5281/zenodo.18753528",
  },
  {
    label: "Docker",
    href: "https://hub.docker.com/r/xd637/quanta-node",
    external: true,
    icon: null,
    desc: "xd637/quanta-node",
  },
];

export default function Developer() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left: headline + links */}
        <div className="lg:col-span-5">
          <span className="section-label">Developers</span>
          <h2
            className="text-5xl font-bold leading-[1.05] tracking-tight text-white mt-2 mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Deploy in Minutes.
            <br />
            <span className="text-[#00E599]">Own Your Node.</span>
          </h2>
          <p className="text-[#8a8a8a] text-lg leading-relaxed font-light mb-10">
            Quanta nodes run anywhere with 4-core CPU and 4 GB RAM. No ASICs.
            No GPUs. Falcon-512 BFT is CPU-friendly by design.
          </p>

          {/* Links grid */}
          <div className="grid grid-cols-2 gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className="flex items-center justify-between p-3 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[#0f0f0f] hover:border-[rgba(0,229,153,0.2)] hover:bg-[rgba(0,229,153,0.02)] transition-all duration-150 group"
              >
                <div>
                  <span className="text-sm font-medium text-white block">{l.label}</span>
                  <span
                    className="text-xs text-[#4a4a4a]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {l.desc}
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#4a4a4a] group-hover:text-[#00E599] transition-colors flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>

        {/* Right: code block */}
        <div className="lg:col-span-7">
          <div className="code-block">
            {/* Top bar */}
            <div className="flex items-center gap-2 mb-5 pb-4 border-b border-[rgba(255,255,255,0.05)]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              <span
                className="ml-3 text-xs text-[#4a4a4a]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                terminal
              </span>
            </div>

            <pre className="text-sm leading-loose overflow-x-auto">
              <code>
                <span className="line-comment"># Pull the official Quanta node image</span>
                {"\n"}
                <span className="line-cmd">docker pull </span>
                <span className="line-flag">xd637/quanta-node:latest</span>
                {"\n\n"}
                <span className="line-comment"># Run the node (ports: 3000=API, 8333=P2P)</span>
                {"\n"}
                <span className="line-cmd">docker run -d \</span>
                {"\n"}
                <span className="line-cmd">  --name quanta-node \</span>
                {"\n"}
                <span className="line-cmd">  --restart always \</span>
                {"\n"}
                <span className="line-cmd">  -p </span><span className="line-flag">3000</span><span className="line-cmd">:3000 -p </span><span className="line-flag">8333</span><span className="line-cmd">:8333 \</span>
                {"\n"}
                <span className="line-cmd">  -v quanta-data:/home/quanta/quanta_data \</span>
                {"\n"}
                <span className="line-cmd">  xd637/quanta-node:latest</span>
                {"\n\n"}
                <span className="line-comment"># Verify it's running</span>
                {"\n"}
                <span className="line-cmd">curl http://localhost:</span><span className="line-flag">3000</span><span className="line-cmd">/health</span>
                {"\n\n"}
                <span className="line-comment"># Create an HD wallet (24-word mnemonic)</span>
                {"\n"}
                <span className="line-cmd">docker exec -it quanta-node quanta </span>
                <span className="line-flag">new_hd_wallet</span>
                <span className="line-cmd"> --file hd_wallet.json</span>
                {"\n\n"}
                <span className="line-comment"># Stake QUA to become a BFT validator</span>
                {"\n"}
                <span className="line-cmd">docker exec -it quanta-node quanta </span>
                <span className="line-flag">stake</span>
                <span className="line-cmd"> --wallet hd_wallet.json --amount 10000000</span>
              </code>
            </pre>
          </div>

          {/* Hardware requirements */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { label: "CPU", value: "4-core" },
              { label: "RAM", value: "4 GB" },
              { label: "Monthly Cost", value: "~$20–40" },
            ].map((spec) => (
              <div
                key={spec.label}
                className="flex flex-col items-center p-3 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[#0f0f0f]"
              >
                <span
                  className="text-[9px] text-[#4a4a4a] uppercase tracking-widest mb-1"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {spec.label}
                </span>
                <span
                  className="text-sm font-bold text-white"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
