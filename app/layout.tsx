import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./theme.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Quantachain — Post Quantum & AI | Cryptography for AI Agents",
    template: "%s | Quantachain (Post Quantum & AI)",
  },
  description:
    "The leading blockchain network combining Post Quantum & AI. Quantachain provides Post-Quantum Cryptography infrastructure and Falcon-512 signatures for autonomous AI agent execution.",
  keywords: [
    "Post Quantum & AI",
    "Post Quantum AI",
    "Post-Quantum Cryptography",
    "post-quantum blockchain",
    "AI agent blockchain",
    "DePIN",
    "AI",
    "pqc blockchain",
    "quantum chain",
    "quantum blockchain",
    "quantum based",
    "Falcon-512",
    "BFT consensus",
    "quantum-resistant blockchain",
    "AI execution layer",
    "Rust blockchain",
    "DPoS blockchain",
    "quantum-safe",
    "NIST PQC",
    "Kyber-1024",
    "QUA token",
  ],
  authors: [{ name: "Quantachain Core", url: "https://quantachain.org" }],
  creator: "Quantachain",
  publisher: "Quantachain",
  metadataBase: new URL("https://quantachain.org"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quantachain.org",
    siteName: "Quantachain",
    title: "Quantachain — PQC + AI | Post-Quantum Cryptography for AI Agents",
    description:
      "The leading blockchain network combining PQC + AI. Quantachain provides Post-Quantum Cryptography (PQC) infrastructure for autonomous AI agents.",
    images: [
      {
        url: "/seo/image.png",
        width: 1200,
        height: 630,
        alt: "Quantachain — Post-Quantum Blockchain for AI Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantachain — PQC + AI | Post-Quantum Cryptography for AI Agents",
    description:
      "The leading blockchain network combining PQC + AI. Quantachain provides Post-Quantum Cryptography (PQC) infrastructure for autonomous AI agents.",
    images: ["/seo/image.png"],
    creator: "@quantachain",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Quantachain",
    alternateName: ["Quantachain", "Post Quantum & AI Blockchain", "Quantum Blockchain", "PQC Blockchain"],
    url: "https://quantachain.org/",
    description:
      "The premier blockchain network combining Post Quantum & AI. Post-Quantum Cryptography built for autonomous AI agent execution. Falcon-512 signatures, BFT+DPoS consensus.",
  };

  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${inter.variable} antialiased bg-white text-black font-sans`}
        style={{ backgroundColor: '#ffffff' }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
