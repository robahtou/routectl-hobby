import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // ignore ts build errors
  typescript: {
    ignoreBuildErrors: true
  }
};

export default nextConfig;
