import million from 'million/compiler';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET || 'default-dataset',
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'default-project-id',
    SANITY_API_READ_TOKEN: process.env.SANITY_API_READ_TOKEN || 'default-read-token',
  },
  experimental: {
    webVitalsAttribution: ['FCP', 'LCP', 'CLS', 'FID', 'TTFB', 'INP'],
  },
  images: {
    remotePatterns: [{ hostname: 'cdn.sanity.io' }, { hostname: 'source.unsplash.com' }],
  },
  reactStrictMode: true,
  trailingSlash: false,
};

const millionConfig = {
  rsc: true,
  server: true,
};

export default million.next(nextConfig, millionConfig);
