/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    ppr: "incremental", // Adopt PPR for specific routes
  },
};

export default nextConfig;
