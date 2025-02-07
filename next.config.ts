import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "cdn.pixabay.com",
      "www.shutterstock.com",
      "stimg.cardekho.com",
      "imgd.aeplcdn.com", // Added imgd.aeplcdn.com
    ],
  },
};

export default nextConfig;

