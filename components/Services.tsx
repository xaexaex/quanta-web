"use client";

import { Shield, Lock, Wallet, Server, Send } from "lucide-react";
import { useState } from "react";

export default function Services() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("");

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("Thanks for your interest! We'll be in touch shortly.");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus(data.error || "Failed to submit. Please try again.");
            }
        } catch (error) {
            console.error(error);
            setStatus("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setStatus(""), 5000);
        }
    };

    const services = [
        {
            title: "Post-quantum cryptography integration",
            description: "Seamlessly integrate NIST-standardized algorithms into your existing systems.",
            icon: Shield
        },
        {
            title: "Kyber / Dilithium / Falcon migration",
            description: "Expert guidance on transitioning your infrastructure to post-quantum security algorithms.",
            icon: Lock
        },
        {
            title: "Quantum-safe wallet architecture",
            description: "Design and implementation of secure, quantum-resistant cryptocurrency wallets.",
            icon: Wallet
        },
        {
            title: "PQC security audit",
            description: "Comprehensive audits of your cryptographic implementations to ensure post-quantum resilience.",
            icon: Server
        }
    ];

    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-white">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#00E599]/10 blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#00E599]/5 blur-[100px]" />
            </div>

            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-gray-900">
                        Quantum-Safe <span className="text-[#00E599]">Services</span>
                    </h2>
                    <p className="text-xl md:text-2xl font-medium text-gray-900 mb-6">
                        We help blockchain projects upgrade to quantum-resistant cryptography.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed mb-4">
                        Quantachain is a specialized team focused exclusively on post-quantum cryptography (PQC).
                        Having built Quanta—a quantum-resistant blockchain using NIST-standardized algorithms like Falcon-512 and Kyber-1024—we offer expert guidance to transition your infrastructure before quantum threats become reality.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-[#00E599]/30 group"
                        >
                            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-gray-900 group-hover:bg-[#00E599] group-hover:text-black transition-colors duration-300">
                                <service.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Contact Form Section */}
                <div className="max-w-2xl mx-auto bg-white p-10 rounded-[2rem] border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-bold mb-3 text-gray-900">Partner With Us</h3>
                        <p className="text-lg text-gray-600">Get in touch to discuss your PQC and infrastructure needs.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#00E599] focus:ring-2 focus:ring-[#00E599]/20 outline-none transition-all text-gray-900"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#00E599] focus:ring-2 focus:ring-[#00E599]/20 outline-none transition-all text-gray-900"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">How can we help?</label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                                rows={5}
                                className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#00E599] focus:ring-2 focus:ring-[#00E599]/20 outline-none transition-all text-gray-900 resize-none"
                                placeholder="Tell us about your project..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#00E599] hover:bg-[#00c282] disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 mt-4 text-lg shadow-lg shadow-[#00E599]/20 hover:shadow-[#00E599]/40 active:scale-[0.98]"
                        >
                            {/* <Send className="w-5 h-5" /> */}
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                        {status && (
                            <div className="p-4 bg-emerald-50 text-emerald-700 rounded-xl mt-4 text-center font-medium animate-in fade-in slide-in-from-bottom-2">
                                {status}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
