import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [640, 828, 1200],
    imageSizes: [16, 32, 64, 128, 256],
    minimumCacheTTL: 3600,
  },
};

export default nextConfig;
