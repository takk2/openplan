/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['unsplash.com', 'images.unsplash.com', 'picsum.photos']
  },
  transpilePackages: ['@repo/ui'],
  webpack: config => {
    config.resolve.extensionAlias = {
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mtsx', '.mjs', '.mjsx']
    }
    return config
  }
}

export default nextConfig
