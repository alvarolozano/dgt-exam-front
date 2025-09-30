/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['sedeapl.dgt.gob.es', 'sedeclave.dgt.gob.es']
  }
}

module.exports = nextConfig
