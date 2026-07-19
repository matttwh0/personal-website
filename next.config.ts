import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "susty.app" },
      { protocol: "https", hostname: "klmilkynails.com" },
    ],
  },
};

export default nextConfig;
