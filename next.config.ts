import nextMdx from '@next/mdx';

const withMdx = nextMdx({
  // By default only the `.mdx` extension is supported.
  extension: /\.mdx?$/,
  options: {
    /* otherOptions… */
  },
});

const nextConfig = withMdx({
  // Support MDX files as pages:
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '', // Leave empty if not needed
        pathname: '/**', // Allows all paths on the hostname
      },
    ],
  },
});

export default nextConfig;
