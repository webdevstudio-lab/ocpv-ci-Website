import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
