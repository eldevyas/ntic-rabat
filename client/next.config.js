/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    env: {
        NEXT_PUBLIC_HOSTNAME: 'http://localhost:3000',
        NEXT_PUBLIC_API_URL: 'http://localhost:3000/api',
        SERVER_PUBLIC_HOSTNAME: 'https://api.asonts.com/',
        SERVER_PUBLIC_API_URL: 'https://api.asonts.com/api',
        NEXTAUTH_URL: 'http://localhost:3000',
        NEXTAUTH_SECRET: 'eQNTCuuDStNOELBXjIqHeEgEpJYOhQd9x6eMej+toGg='
    }
}

module.exports = nextConfig;