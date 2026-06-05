import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testnet Faucet",
  description: "Request free testnet QUA to fund your development workflow instantly on the Quantachain post-quantum blockchain.",
};

export default function FaucetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
