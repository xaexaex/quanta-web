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
    default: "Quanta Chain - Quantum-Resistant Blockchain",
    template: "%s | Quanta Chain"
  },
  description: "The world's first production-ready quantum-resistant blockchain. Built with Rust and NIST-standardized post-quantum cryptography to secure digital assets in the quantum era.",
  keywords: [
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
    title: "Quanta Chain - Quantum-Resistant Blockchain",
    description: "The world's first production-ready quantum-resistant blockchain. Built with Rust and NIST-standardized post-quantum cryptography.",
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
    title: "Quanta Chain - Quantum-Resistant Blockchain",
    description: "The world's first production-ready quantum-resistant blockchain. Built with Rust and NIST-standardized post-quantum cryptography.",
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
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicons/favicon.ico",
    apple: [
      { url: "/favicons/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/favicons/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/favicons/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/favicons/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/favicons/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/favicons/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/favicons/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/favicons/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/favicons/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome", url: "/favicons/android-icon-192x192.png", sizes: "192x192" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased bg-white text-black font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
