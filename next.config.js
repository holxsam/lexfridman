/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["lexfridman.com", "img.youtube.com"],
  },
};

module.exports = nextConfig;
