import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the WASM file to be served correctly
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
