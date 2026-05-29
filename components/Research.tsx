import { ArrowUpRight } from "lucide-react";

export default function Research() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="divider mb-16" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="section-label">Research</span>
          <h2
            className="text-4xl font-bold text-white mb-6 mt-2 leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Peer-Reviewed Architecture
          </h2>
          <p className="text-[#8a8a8a] text-lg leading-relaxed font-light mb-8">
            The Quanta protocol is documented in a published research paper
            covering the full cryptographic and consensus architecture.
          </p>

          {/* Citation block */}
          <div className="code-block mb-6">
            <pre className="text-xs leading-loose overflow-x-auto whitespace-pre-wrap">
              <code>
                <span className="line-flag">@misc</span>
                <span className="line-cmd">{"{"}</span>
                <span className="line-cmd">quanta2026,</span>
                {"\n"}
                <span className="line-cmd">  title  = </span>
                <span className="line-flag">{"{"}QUANTA: Engineering a Production-Ready</span>
                {"\n"}
                <span className="line-flag">           Post-Quantum Blockchain with Falcon-512{"}"}</span>
                {",\n"}
                <span className="line-cmd">  author = </span>
                <span className="line-flag">{"{"}Kishore K{"}"}</span>
                {",\n"}
                <span className="line-cmd">  year   = </span>
                <span className="line-flag">{"{"}2026{"}"}</span>
                {",\n"}
                <span className="line-cmd">  doi    = </span>
                <span className="line-flag">{"{"}10.5281/zenodo.18753528{"}"}</span>
                {",\n"}
                <span className="line-cmd">  url    = </span>
                <span className="line-flag">{"{"}https://doi.org/10.5281/zenodo.18753528{"}"}</span>
                {"\n"}
                <span className="line-cmd">{"}"}</span>
              </code>
            </pre>
          </div>

          <a
            href="https://doi.org/10.5281/zenodo.18753528"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex"
          >
            Read on Zenodo
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right: paper metadata */}
        <div className="lg:col-span-5">
          <div className="card-dark p-6 space-y-4">
            {[
              { label: "Title", value: "Engineering a Production-Ready Post-Quantum Blockchain with Falcon-512 Lattice Signatures" },
              { label: "Author", value: "Kishore K" },
              { label: "Published", value: "February 2026" },
              { label: "DOI", value: "10.5281/zenodo.18753528" },
              { label: "Platform", value: "Zenodo / CERN" },
            ].map((f) => (
              <div key={f.label} className="border-b border-[rgba(255,255,255,0.04)] pb-4 last:border-0 last:pb-0">
                <span
                  className="text-[9px] text-[#4a4a4a] uppercase tracking-widest block mb-1"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {f.label}
                </span>
                <span className="text-sm text-[#8a8a8a]">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
