import type { NextConfig } from 'next'

import { CONFIG_ENV } from '@/shared/configs/env.config'

const nextConfig: NextConfig = {
  env: {
    APP_URL: process.env.APP_URL,
    SERVER_URL: process.env.SERVER_URL
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
  },

  async rewrites() {
    return [
      {
        source: `/uploads/:path*`,
        destination: `${CONFIG_ENV.SERVER_URL}/uploads/:path*`
      }
    ]
  }
}

export default nextConfig
