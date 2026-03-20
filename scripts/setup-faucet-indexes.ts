/**
 * Run this once to create the MongoDB indexes needed by the faucet.
 *
 * Usage:
 *   npx ts-node -e "require('./scripts/setup-faucet-indexes')"
 *   -- or --
 *   node -r ts-node/register scripts/setup-faucet-indexes.ts
 */

import clientPromise from '../lib/mongodb';

async function main() {
    const client = await clientPromise;
    const db = client.db('quanta');
    const col = db.collection('faucet_claims');

    // Compound index to speed up the rate-limit check
    await col.createIndex({ ip: 1, claimed_at: -1 });
    await col.createIndex({ address: 1, claimed_at: -1 });
    await col.createIndex({ claimed_at: 1 }, { expireAfterSeconds: 60 * 60 * 24 * 30 }); // auto-expire after 30 days

    console.log('✅  Faucet indexes created');
    process.exit(0);
}

main().catch((e) => { console.error(e); process.exit(1); });
