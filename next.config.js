/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s3.us-west-2.amazonaws.com', 'juhwan.shop', 'www.notion.so'],
  },
  format: ['image/png', 'image/webp', 'image/jpeg'],
};

module.exports = nextConfig;
