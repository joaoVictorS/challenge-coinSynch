import { join } from 'node:path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.lorem.space'
      }
    ]
  },
  sassOptions: {
    includePaths: [join('src', 'styles')],
    prependData: `@import "@/styles/variables.scss";`
  }
};

export default nextConfig;
