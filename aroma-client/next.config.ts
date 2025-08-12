import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  env: {
    APP_URL: process.env.APP_URL
  },

  reactStrictMode: false,

  eslint: {
    ignoreDuringBuilds: true
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  }
}

export default nextConfig
