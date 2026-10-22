import type { NextConfig } from "next";

// Static export: Firebase Hosting serves the generated `out/` folder, no server needed.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
