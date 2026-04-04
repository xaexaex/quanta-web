export const RPC_URL = "https://rpc.quantachain.org";

export interface NetworkStats {
  chain_length: number;
  total_transactions: number;
  current_difficulty: number;
  mining_reward: number;
  total_supply: number;
  pending_transactions: number;
}

export async function fetchStats(): Promise<NetworkStats | null> {
  try {
    const res = await fetch(`${RPC_URL}/api/stats`, {
      next: { revalidate: 10 },
      cache: 'no-store' // We might use it in client side or want fresh data
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch stats", error);
    return null;
  }
}
