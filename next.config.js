/** @type {import('next').NextConfig} */
const nextConfig = {
  rules: [{
    test: /\.svg$/,
    use: ["@svgr/webpack"]
  }],
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
