import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/waseem-portfolio",
  assetPrefix: "/waseem-portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
