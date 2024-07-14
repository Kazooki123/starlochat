/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["apps.googleusercontent.com"],
  },
};

module.exports = nextConfig
