import type { NextConfig } from "next";

// Default to GitHub Pages base path, but auto-disable for Cloudflare Pages or allow overriding via env.
const isCloudflarePages =
  process.env.CF_PAGES === "1" || process.env.CF_PAGES === "true";
const defaultBasePath = isCloudflarePages ? "" : "/valiun.tech";
const basePath = process.env.NEXT_BASE_PATH ?? defaultBasePath;

const defaultAssetPrefix = isCloudflarePages ? "" : basePath;
const assetPrefix = process.env.NEXT_ASSET_PREFIX ?? defaultAssetPrefix;

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath } : {}),
  ...(assetPrefix ? { assetPrefix } : {}),
  reactStrictMode: true,
  compress: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
