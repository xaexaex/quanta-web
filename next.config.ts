import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack config (used by `next dev` in Next.js 16+).
  // Turbopack has native async WASM support — no extra rules needed.
  // This empty config silences the "webpack config but no turbopack config" error.
  turbopack: {},

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
