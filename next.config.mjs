import withPWA from '@ducanh2912/next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com'],
    },
    webpack: (config, { isServer }) => {
        // Prevent webpack from scanning protected system directories
        config.watchOptions = {
            ...config.watchOptions,
            ignored: [
                '**/node_modules/**',
                '**/.*',
                '**/*.swp',
                '**/*.swo',
                '**/*~',
                '**/Application Data/**',
                '**/AppData/**',
                '**/.next/**',
            ],
        };
        return config;
    },
};

export default withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching: [
        {
            urlPattern: /^https?.*/,
            handler: 'NetworkFirst',
            options: {
                cacheName: 'offlineCache',
                expiration: {
                    maxEntries: 200,
                    maxAgeSeconds: 24 * 60 * 60,
                },
            },
        },
    ],
})(nextConfig);
