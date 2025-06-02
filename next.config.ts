import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sv-yptplguxwm.cloud.elastika.pe'
      },
      {
        protocol: 'https',
        hostname: 'cdn.www.gob.pe'
      }
    ]
  }
};

export default nextConfig;
