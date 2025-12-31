import { ShieldCheck, Lock, Code2, Pickaxe, User, Database, Cog } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Falcon-512 Signatures",
      description: "Replacing traditional ECDSA with NIST-standardized Falcon-512 for quantum-resistant transaction signing.",
      icon: <ShieldCheck className="w-12 h-12 text-[#00E599]" />
    },
    {
      title: "Kyber-1024 Encryption",
      description: "Utilizing Kyber-1024 for secure wallet encryption and communication, ensuring your assets stay safe.",
      icon: <Lock className="w-12 h-12 text-[#00E599]" />
    },
    {
      title: "Built in Rust",
      description: "Engineered 100% in Rust for unparalleled memory safety, performance, and reliability.",
      icon: <Code2 className="w-12 h-12 text-[#00E599]" />
    },
    {
      title: "Proof of Work",
      description: "A robust PoW consensus mechanism with dynamic difficulty adjustment for fair and secure mining.",
      icon: <Pickaxe className="w-12 h-12 text-[#00E599]" />
    },
    {
      title: "Account Model",
      description: "Familiar Ethereum-style account model (not UTXO) making it easier for developers to adapt.",
      icon: <User className="w-12 h-12 text-[#00E599]" />
    },
    {
      title: "Sled Database",
      description: "High-performance embedded database for efficient state management and storage.",
      icon: <Database className="w-12 h-12 text-[#00E599]" />
    }
  ];

  return (
    <section id="features" className="py-32 relative bg-white">
      <div className="px-6">
        {/* Heading Section with Black BG */}
        <div className="mb-24 bg-black rounded-[3rem] p-16 md:p-20 mx-4 md:mx-8 relative overflow-hidden">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#00E599]/10 rounded-full blur-[120px]" />
          
          <div className="relative z-10">
            <div className="max-w-4xl">
              <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight">
                Engineered for <br />
                <span className="text-gray-400">the Future.</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                Quanta combines state-of-the-art cryptography with a robust architecture to deliver a blockchain that lasts.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-5 flex items-center gap-4">
                <div className="text-[#00E599] text-4xl font-bold">512</div>
                <div className="text-gray-400 text-sm uppercase tracking-widest">Falcon Bits</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-5 flex items-center gap-4">
                <div className="text-[#00E599] text-4xl font-bold">1024</div>
                <div className="text-gray-400 text-sm uppercase tracking-widest">Kyber Bits</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-5 flex items-center gap-4">
                <div className="text-[#00E599] text-4xl font-bold">NIST</div>
                <div className="text-gray-400 text-sm uppercase tracking-widest">Standardized</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 bg-[#00E599] rounded-[3rem] p-12 md:p-16 mx-4 md:mx-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-10 rounded-[2rem] bg-white hover:bg-gray-50 transition-all duration-300 group shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300 w-fit p-4 bg-[#00E599]/10 rounded-2xl">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
