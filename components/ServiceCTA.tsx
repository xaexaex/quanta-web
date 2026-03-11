import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function ServiceCTA() {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#00E599]/10 rounded-[100%] blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto bg-[#0a0a0a] rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl border border-white/5">
                    {/* Inner dark glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E599]/20 rounded-full blur-[80px]" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00E599]/20 rounded-full blur-[80px]" />

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 bg-[#00E599]/10 border border-[#00E599]/20 rounded-2xl flex items-center justify-center mb-8 text-[#00E599] shadow-[0_0_30px_-5px_#00E599]">
                            <ShieldCheck className="w-8 h-8" />
                        </div>

                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
                            Ready to <span className="text-[#00E599]">Future-Proof</span> Your Systems?
                        </h2>

                        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl text-center leading-relaxed text-balance">
                            Partner with our experts to integrate post-quantum cryptography and secure your infrastructure against next-generation threats.
                        </p>

                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center gap-3 bg-[#00E599] hover:bg-[#00c282] text-black font-bold py-4 px-8 rounded-xl transition-all text-lg shadow-[0_0_40px_-10px_rgba(0,229,153,0.5)] hover:shadow-[0_0_60px_-15px_rgba(0,229,153,0.7)] hover:-translate-y-1 active:scale-95"
                        >
                            Explore Our Services
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
