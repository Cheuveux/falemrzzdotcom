import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Placeholder le temps du mock — à remplacer par cdn.shopify.com
      { protocol: "https", hostname: "images.unsplash.com" },
      // Domaine CDN Shopify, à activer quand le compte sera prêt :
      { protocol: "https", hostname: "cdn.shopify.com" },
    ],
  },
};

export default nextConfig;
