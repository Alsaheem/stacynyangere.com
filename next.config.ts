import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Only for GitHub Pages project URL (https://alsaheem.github.io/stacynyangere.com/).
  // Netlify / custom domain builds leave this unset so assets resolve from `/`.
  basePath: process.env.GITHUB_PAGES === "true" ? "/stacynyangere.com" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
