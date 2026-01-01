import { Metadata } from "next";

export function generateMetadata({
  title = "Quanta Chain - Quantum-Resistant Blockchain",
  description = "The world's first production-ready quantum-resistant blockchain. Built with Rust and NIST-standardized post-quantum cryptography to secure digital assets in the quantum era.",
  path = "/",
  image = "/og-image.jpg"
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `https://quantachain.org${path}`;
  
  return {
    title,
    description,
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
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://quantachain.org"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Quanta Chain",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
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
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
  };
}
