import Link from 'next/link';
import { ArrowUpRight, BookOpen, FileText } from 'lucide-react';

const publications = [
  {
    title: "Learning with Correlated Errors: A New Lattice Hard Problem with Worst-Case Reductions and Public-Key Encryption",
    date: "March 11, 2026",
    link: "https://doi.org/10.5281/zenodo.18962921",
    type: "Zenodo Publication"
  },
  {
    title: "Quantum Temporal Order: Structural Inevitability of Modular Flow and the Problem of Time",
    date: "March 3, 2026",
    link: "https://doi.org/10.5281/zenodo.18845465",
    type: "Zenodo Publication"
  },
  {
    title: "QUANTA: Engineering a Production-Ready Post-Quantum Blockchain with Falcon-512 Lattice Signatures",
    date: "February 24, 2026",
    link: "https://doi.org/10.5281/zenodo.18753528",
    type: "Zenodo Publication"
  }
];

const articles = [
  {
    title: "The Quantum Clock Is Ticking — And Only One Blockchain Was Built to Survive It",
    date: "Feb 24, 2026",
    link: "https://medium.com/@kishorekkumar34/the-quantum-clock-is-ticking-and-only-one-blockchain-was-built-to-survive-it-ee3cca7675b7",
    type: "Medium Article"
  },
  {
    title: "Quantum Computers Will Steal Your Crypto. We Built a Blockchain That Can't Be Hacked.",
    date: "Feb 22, 2026",
    link: "https://medium.com/@kishorekkumar34/quantum-computers-will-steal-your-crypto-we-built-a-blockchain-that-cant-be-hacked-4d3126d81d6f",
    type: "Medium Article"
  }
];

export default function Research() {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase mb-4 block">
              Our Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1] text-gray-900">
              Research &amp; <span className="text-[#00E599]">Publications</span>
            </h2>
          </div>
          <p className="text-lg text-gray-500 font-light leading-relaxed max-w-md text-right hidden md:block">
            Operating at the forefront of cryptography and theoretical physics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Academic Papers */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#00E599]/10 flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-[#00E599]" />
              </div>
              <h3 className="text-base font-bold text-gray-900 tracking-tight">Academic Papers</h3>
            </div>
            <div className="space-y-3">
              {publications.map((pub, index) => (
                <Link
                  key={index}
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#00E599]/25 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Left accent line */}
                  <div className="absolute left-0 top-0 w-0.5 h-full bg-gray-100 group-hover:bg-[#00E599] transition-colors duration-300 rounded-l-2xl" />

                  <div className="flex-1 min-w-0 pl-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#00E599] uppercase">
                        {pub.type}
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-[15px] font-semibold text-gray-800 leading-snug group-hover:text-gray-900 transition-colors line-clamp-2">
                      {pub.title}
                    </h4>
                    <p className="text-xs text-gray-400 font-medium mt-2">Published: {pub.date}</p>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-[#00E599] flex-shrink-0 mt-0.5 transition-colors duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Articles & Insights */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                <FileText className="w-4 h-4 text-gray-500" />
              </div>
              <h3 className="text-base font-bold text-gray-900 tracking-tight">Articles &amp; Insights</h3>
            </div>
            <div className="space-y-3">
              {articles.map((article, index) => (
                <Link
                  key={index}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase">
                        {article.type}
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-[15px] font-semibold text-gray-800 leading-snug group-hover:text-gray-900 transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-xs text-gray-400 font-medium mt-2">{article.date}</p>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-gray-600 flex-shrink-0 mt-0.5 transition-colors duration-300" />
                </Link>
              ))}


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
