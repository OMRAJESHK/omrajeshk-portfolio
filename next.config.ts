import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enables static export
  trailingSlash: true,  // Required for static hosting
  basePath: '/omrajeshk-portfolio',  // Replace with your GitHub repo name (e.g., '/your-repo-name')
  assetPrefix: '/omrajeshk-portfolio/',  // Same as basePath, with trailing slash
};

export default nextConfig;