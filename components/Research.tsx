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
    <section className="py-24 bg-transparent mt-12 mb-12 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00E599]/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight leading-[1]">
              Research &amp; <span className="text-[#00E599]">Publications</span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              We operate at the forefront of cryptography and theoretical physics. Explore our peer-reviewed research and latest insights.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Academic Papers */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-6 h-6 text-[#00E599]" />
              <h3 className="text-2xl font-bold">Academic Papers</h3>
            </div>
            {publications.map((pub, index) => (
              <Link 
                key={index}
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,229,153,0.12)] hover:border-[#00E599]/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-black group-hover:bg-[#00E599] transition-colors" />
                <div className="flex flex-col gap-3 ml-2">
                  <div className="flex justify-between items-start">
                     <span className="text-xs font-mono font-bold tracking-widest text-[#00E599] uppercase pt-1">
                       {pub.type}
                     </span>
                     <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-black leading-snug group-hover:text-[#00E599] transition-colors">
                    {pub.title}
                  </h4>
                  <p className="text-sm text-gray-500 font-medium">Published: {pub.date}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Articles */}
          <div className="space-y-6">
             <div className="flex items-center gap-3 mb-8">
              <FileText className="w-6 h-6 text-black" />
              <h3 className="text-2xl font-bold">Articles &amp; Insights</h3>
            </div>
            {articles.map((article, index) => (
              <Link 
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-black/10 transition-all duration-300"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                     <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase pt-1">
                       {article.type}
                     </span>
                     <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-black leading-snug group-hover:text-[#00E599] transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-sm text-gray-500 font-medium">{article.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
