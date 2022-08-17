/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ['en', 'en-US', 'pt', 'pt-BR'],
        defaultLocale: 'en',
        localeDetection: false
    }
}

module.exports = nextConfig
