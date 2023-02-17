/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    env: {
        NEXT_PUBLIC_HOSTNAME: 'http://192.168.1.7:3000',
        NEXT_PUBLIC_API_URL: 'http://192.168.1.7:3000/api',
        SERVER_PUBLIC_HOSTNAME: 'http://192.168.1.7:8000',
        SERVER_PUBLIC_API_URL: 'http://192.168.1.7:8000/api',
        NEXTAUTH_URL: 'http://192.168.1.7:3000',
        NEXTAUTH_SECRET: 'eQNTCuuDStNOELBXjIqHeEgEpJYOhQd9x6eMej+toGg='
    }
}

module.exports = nextConfig;