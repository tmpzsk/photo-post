/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: {
    dirs: ['app', 'pages'],
  },
}

module.exports = nextConfig
