import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Needed for reading PDF from /private in API routes
  serverExternalPackages: [],
  experimental: {},
  allowedDevOrigins: ["10.39.190.117"],
};

export default nextConfig;
