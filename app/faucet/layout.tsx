import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testnet Faucet",
  description: "Get testnet QUA tokens for the premier Post Quantum & AI blockchain. Build autonomous AI agents with Post-Quantum Cryptography.",
};

export default function FaucetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
