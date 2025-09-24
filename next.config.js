/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    unoptimized: true, // Required for static export
  },
  // Configure for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/joshinterior' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/joshinterior/' : '',
}

module.exports = nextConfig
