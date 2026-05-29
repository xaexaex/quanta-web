import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

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
    default: "Quanta — AI Agent Execution Layer | Post-Quantum Blockchain",
    template: "%s | Quanta",
  },
  description:
    "Quanta is the quantum-safe gas layer for autonomous AI agents. BFT + DPoS consensus, Falcon-512 post-quantum signatures, 6-second finality, sub-cent execution fees. Built in Rust.",
  keywords: [
    "post-quantum blockchain",
    "AI agent blockchain",
    "Falcon-512",
    "BFT consensus",
    "quantum-resistant blockchain",
    "PQC blockchain",
    "AI execution layer",
    "Rust blockchain",
    "DPoS blockchain",
    "quantum-safe",
    "NIST PQC",
    "Kyber-1024",
    "QUA token",
  ],
  authors: [{ name: "Kishore K", url: "https://quantachain.org" }],
  creator: "Kishore K",
  publisher: "Quanta",
  metadataBase: new URL("https://quantachain.org"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quantachain.org",
    siteName: "Quanta",
    title: "Quanta — AI Agent Execution Layer | Post-Quantum Blockchain",
    description:
      "The quantum-safe gas layer for autonomous AI agents. Falcon-512 PQC, BFT finality, sub-cent fees. Built in Rust.",
    images: [
      {
        url: "/seo/image.png",
        width: 1200,
        height: 630,
        alt: "Quanta — Post-Quantum Blockchain for AI Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quanta — AI Agent Execution Layer | Post-Quantum Blockchain",
    description:
      "The quantum-safe gas layer for autonomous AI agents. Falcon-512 PQC, BFT finality, sub-cent fees.",
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
    name: "Quanta",
    alternateName: ["QuantaChain", "Quanta Blockchain"],
    url: "https://quantachain.org/",
    description:
      "Post-quantum blockchain built for AI agent execution. Falcon-512 signatures, BFT+DPoS consensus, sub-cent gas fees.",
  };

  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${inter.variable} antialiased bg-[#080808] text-white font-sans`}
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
