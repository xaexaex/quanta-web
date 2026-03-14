import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testnet Faucet",
  description: "Get Testnet QUA every 24 hours for testing your applications on the Quanta Chain.",
  alternates: {
    canonical: "https://quantachain.org/faucet",
  },
};

export default function FaucetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
