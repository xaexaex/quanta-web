import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Quantachain | Post-Quantum Blockchain',
    short_name: 'Quantachain',
    description: 'The quantum-safe gas layer for autonomous AI agents and DePIN. Falcon-512 PQC, BFT finality.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/favicon.png',
        sizes: '256x256',
        type: 'image/png',
      },
    ],
  }
}
