import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Quanta Chain - The Quantum Blockchain",
    template: "%s | Quanta Chain"
  },
  description: "The world's most trusted production-ready quantum-resistant blockchain. Built with Rust and NIST-standardized post-quantum cryptography to secure digital assets in the quantum era.",
  keywords: [
    "quantum blockchain",
    "quantum resistant blockchain",
    "post-quantum cryptography",
    "Falcon-512",
    "Kyber-1024",
    "quantum computing",
    "blockchain security",
    "NIST cryptography",
    "rust blockchain",
    "quantum safe",
    "PQC blockchain"
  ],
  authors: [{ name: "Quanta Chain Team" }],
  creator: "Quanta Chain",
  publisher: "Quanta Chain",
  metadataBase: new URL("https://quantachain.org"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quantachain.org",
    siteName: "Quanta Chain",
    title: "Quanta Chain - The Quantum Blockchain",
    description: "The world's most trusted production-ready quantum-resistant blockchain. Built with Rust and NIST-standardized post-quantum cryptography.",
    images: [
      {
        url: "/seo/image.png",
        width: 1200,
        height: 630,
        alt: "Quanta Chain - Quantum-Resistant Blockchain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quanta Chain - The Quantum Blockchain",
    description: "The world's most trusted production-ready quantum-resistant blockchain. Built with Rust and NIST-standardized post-quantum cryptography.",
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
    apple: [
      { url: "/favicon.png", type: "image/png" },
    ],
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
    name: "Quanta Chain",
    alternateName: ["QuantaChain"],
    url: "https://quantachain.org/",
  };

  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased bg-white text-black font-sans`}
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
