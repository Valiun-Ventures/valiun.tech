import type { NextConfig } from "next";

// Use GitHub Pages base path only when building in GitHub; default to root for Cloudflare and others.
const isCloudflarePages =
  process.env.CF_PAGES === "1" || process.env.CF_PAGES === "true";
const repo = (process.env.GITHUB_REPOSITORY ?? "").toLowerCase();
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const isGithubPages =
  process.env.GITHUB_PAGES === "true" ||
  (isGithubActions && repo === "valiun-ventures/valiun.tech");

const basePath =
  process.env.NEXT_BASE_PATH ??
  (isCloudflarePages ? "" : isGithubPages ? "/valiun.tech" : "");
const assetPrefix =
  process.env.NEXT_ASSET_PREFIX ?? (basePath ? basePath : "");

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
