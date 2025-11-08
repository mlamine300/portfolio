import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "www.svgrepo.com", protocol: "https" },
      { hostname: "*", protocol: "https" },
    ],
  },
};

export default nextConfig;
