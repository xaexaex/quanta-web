import Link from 'next/link';
import { Package, Code2, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';

export default function DeveloperTools() {
  return (
    <section className="py-16 sm:py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase mb-4 block">
              Ecosystem Access
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1] text-gray-900">
              Developer <span className="text-[#00E599]">Tools</span>
            </h2>
          </div>
          <p className="text-lg text-gray-500 font-light leading-relaxed max-w-md text-left md:text-right">
            Production-ready SDKs and WebAssembly modules built for extreme performance and post-quantum security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Quanta SDK */}
          <div className="group bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:border-[#00E599]/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[300px]">
             <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
               <Package className="w-32 h-32 text-black" />
             </div>
             
             <div>
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:border-[#00E599]/30 transition-colors">
                   <Code2 className="w-6 h-6 text-gray-700 group-hover:text-[#00E599] transition-colors" />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-gray-900">quanta-sdk</h3>
                   <span className="text-xs font-mono font-semibold tracking-wider text-gray-400 uppercase">NPM Package</span>
                 </div>
               </div>
               
               <p className="text-gray-600 mb-8 relative z-10 leading-relaxed font-light">
                 The official JavaScript/TypeScript SDK for interacting with the Quanta protocol. Full support for account management, transaction signing, and protocol interaction in Node.js and browser environments.
               </p>
             </div>

             <div className="flex items-center justify-between mt-auto">
               <div className="flex items-center gap-4 text-xs font-mono text-gray-500 font-medium">
                 <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-[#00E599]" /> Typesafe</span>
                 <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#00E599]" /> Verified</span>
               </div>
               
               <Link
                 href="https://www.npmjs.com/package/quanta-sdk"
                 target="_blank"
                 className="flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-[#00E599] transition-colors"
               >
                 View on NPM <ArrowUpRight className="w-4 h-4" />
               </Link>
             </div>
          </div>

          {/* Quanta WASM */}
          <div className="group bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:border-teal-500/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[300px]">
             <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
               <Code2 className="w-32 h-32 text-black" />
             </div>
             
             <div>
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:border-teal-500/30 transition-colors">
                   <Package className="w-6 h-6 text-gray-700 group-hover:text-teal-600 transition-colors" />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-gray-900">quanta-wasm</h3>
                   <span className="text-xs font-mono font-semibold tracking-wider text-gray-400 uppercase">Crates.io & NPM</span>
                 </div>
               </div>
               
               <p className="text-gray-600 mb-8 relative z-10 leading-relaxed font-light">
                 High-performance WebAssembly module compiled from Rust. Provides native-speed post-quantum cryptographic operations, including Falcon-512 signatures directly in the browser.
               </p>
             </div>

             <div className="flex items-center justify-between mt-auto">
               <div className="flex items-center gap-4 text-xs font-mono text-gray-500 font-medium">
                 <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-teal-500" /> WebAssembly</span>
                 <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-teal-500" /> Rust Core</span>
               </div>
               
               <div className="flex flex-col items-end gap-2 sm:flex-row sm:gap-4 mt-4 sm:mt-0">
                 <Link
                   href="https://crates.io/crates/quanta-wasm"
                   target="_blank"
                   className="flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-teal-600 transition-colors"
                 >
                   Crates.io <ArrowUpRight className="w-4 h-4" />
                 </Link>
                 <Link
                   href="https://www.npmjs.com/package/quanta-wasm"
                   target="_blank"
                   className="flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-teal-600 transition-colors"
                 >
                   NPM <ArrowUpRight className="w-4 h-4" />
                 </Link>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
