/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "imagedelivery.net",
      "api.producthunt.com",
      "avatars.githubusercontent.com",
      "tailwindui.com",
      "images.unsplash.com",
      "arthtyagi.com",
      "cdn.builder.io",
    ],
  },
};

  module.exports = nextConfig;
