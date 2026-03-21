import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack config (used by `next dev` in Next.js 16+).
  // Turbopack has native async WASM support — no extra rules needed.
  // This empty config silences the "webpack config but no turbopack config" error.
  turbopack: {},

  // L-9 FIX: Security headers — essential for a wallet app.
  // Prevents clickjacking, MIME sniffing, and unnecessary browser feature leaks.
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent this page from being embedded in iframes (clickjacking)
          { key: 'X-Frame-Options', value: 'DENY' },
          // Prevent MIME type sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Don't send referrer when navigating away from the wallet
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Restrict browser features (camera, mic, etc.)
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },

  // Webpack config (used by `next build` / production builds).
  // Keep this for WASM support during production bundling.
  webpack(config, { isServer }) {
    // Enable WASM support in webpack
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };

    // On the server side, mark the wasm module as external so Node.js
    // loads it natively rather than through webpack's bundle.
    if (isServer) {
      config.externals = [
        ...(Array.isArray(config.externals) ? config.externals : []),
        // Prevent webpack from bundling the wasm glue — we load it with require() + readFileSync
        ({ request }: { request?: string }, callback: (err?: Error | null, result?: string) => void) => {
          if (request && request.includes('quanta_wasm')) {
            return callback(null, `commonjs ${request}`);
          }
          callback();
        },
      ];
    }

    return config;
  },
};

export default nextConfig;

