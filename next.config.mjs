import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  images: { remotePatterns: [{ hostname: 'cdn.sanity.io' }, { hostname: 'source.unsplash.com' }] },
};

export default bundleAnalyzer(nextConfig);
