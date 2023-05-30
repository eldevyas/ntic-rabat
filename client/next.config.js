/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['images.pexels.com', 'images.unsplash.com'],
    },
    experimental: {
        appDir: true,
    },
}

module.exports = nextConfig;