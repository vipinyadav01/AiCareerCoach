/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com'],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    webpack: (config, { isServer }) => {
        // Add fallbacks for Node.js modules in the browser
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
                os: false,
                path: false,
            };
        }
        
        // Configure webpack to ignore system directories that cause permission errors
        config.watchOptions = {
            ...config.watchOptions,
            ignored: [
                /node_modules/,
                /.git/,
                /.next/,
                /Application Data/,
                /AppData/,
                /Program Files/,
                /Windows/,
            ],
        };

        // Disable file system watching for build
        if (process.env.NODE_ENV === 'production') {
            config.watchOptions.poll = false;
            config.cache = false;
        }

        return config;
    },
};

export default nextConfig;
