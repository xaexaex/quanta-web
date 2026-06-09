import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testnet V3 TGE Sign-Up",
  description: "Join the premier Post Quantum & AI execution layer. Register for Testnet V3, run a node, deploy AI agents, and earn early allocation (QUA points).",
  openGraph: {
    title: "Post Quantum & AI Testnet V3 Sign-Up",
    description: "Register for Testnet V3 and earn early allocation by running a validator node or AI agent.",
    url: "https://quantachain.org/tge",
  },
  twitter: {
    title: "Post Quantum & AI Testnet V3 Sign-Up",
    description: "Register for Testnet V3 and earn early allocation.",
  }
};

export default function TGELayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
