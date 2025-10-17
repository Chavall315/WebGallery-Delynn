/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
    ignoreDuringBuilds: true,
  },
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  api: {
    bodyParser: false, // penting untuk formData
  },
  experimental: {
    serverActionsBodySizeLimit: '10mb', // optional, untuk action server
  },
};

export default nextConfig;
