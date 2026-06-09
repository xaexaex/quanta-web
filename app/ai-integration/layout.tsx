import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Integration",
  description: "Discover how AI agents use the premier Post Quantum & AI execution layer to securely generate wallets, construct transactions, and persist memory on-chain.",
};

export default function AiIntegrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
