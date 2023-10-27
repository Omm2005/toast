/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
    images: {
        domains: ['uploadthing.com', 'lh3.googleusercontent.com'],
      }
}

module.exports = nextConfig
