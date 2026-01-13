export default function WhyQuanta() {
  return (
    <section id="why-quanta" className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Why <span className="text-[#00E599]">Quanta</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            The first blockchain built from the ground up to withstand quantum computing threats.
          </p>
        </div>

        {/* Simple List */}
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-6 text-lg">
            <li className="flex items-start gap-4">
              <span className="text-[#00E599] text-2xl font-bold flex-shrink-0">•</span>
              <div>
                <strong className="text-gray-900">Quantum-Resistant Security:</strong>
                <span className="text-gray-600"> NIST L1-5 certified post-quantum cryptography protects your assets for decades to come.</span>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <span className="text-[#00E599] text-2xl font-bold flex-shrink-0">•</span>
              <div>
                <strong className="text-gray-900">Fair Launch:</strong>
                <span className="text-gray-600"> 0% pre-mine or ICO allocation. Everyone starts equal with no insider advantages.</span>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <span className="text-[#00E599] text-2xl font-bold flex-shrink-0">•</span>
              <div>
                <strong className="text-gray-900">Deflationary Economics:</strong>
                <span className="text-gray-600"> 70% of transaction fees are permanently burned, creating long-term scarcity and value.</span>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <span className="text-[#00E599] text-2xl font-bold flex-shrink-0">•</span>
              <div>
                <strong className="text-gray-900">Fast & Efficient:</strong>
                <span className="text-gray-600"> 10-second block times for quick confirmations without compromising security.</span>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
