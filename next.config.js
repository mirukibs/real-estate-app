const { clear } = require('console');

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'bayut-production.s3.eu-central-1.amazonaws.com'
        },
      ],
    },
  }
