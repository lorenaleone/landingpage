/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/landingpage',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true, // obrigatório no export estático
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;
