import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["tsx", "ts", "jsx", "js"],

  // 1. Active l'exportation statique pour générer des fichiers HTML
  output: "export",

  // 2. Désactive l'optimisation d'image (obligatoire pour l'export statique sur Render)
  // Remplace "domains" qui est obsolète
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // 3. Optionnel : assure que les liens se terminent par un slash (évite des 404 sur certains serveurs)
  trailingSlash: false,
};

export default nextConfig;
