/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost','christophe-charbonneau-freeston-portfolio.vercel.app',"christophe-charbonneau-freeston-portfolio"]
  }
}

module.exports = nextConfig