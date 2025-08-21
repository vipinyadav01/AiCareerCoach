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
	// Disable static file generation to prevent file scanning
	output: 'standalone',
	// Disable static optimization
	experimental: {
		optimizePackageImports: [],
	},
	// Disable file system watching
	webpack: (config) => {
		// Disable file watching completely
		config.watchOptions = {
			ignored: ['**/*'],
		};
		return config;
	},
};

export default nextConfig;
