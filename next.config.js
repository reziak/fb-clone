/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "cdna.artstation.com",
      "links.papareact.com",
      "images.unsplash.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
    ]
  },
}

module.exports = nextConfig
