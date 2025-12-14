/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/med',
  assetPrefix: '/med',

  // Disable Next.js image optimization so static assets under /public load directly via /med/images/**
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
