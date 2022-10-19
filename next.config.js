const withLess = require('next-with-less');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: () => {
    return [
      {
        source: '/',
        destination: '/index.html',
      },
    ];
  },
};

module.exports = withLess(nextConfig);