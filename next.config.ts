import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',  // Set to a suitable size (e.g., 10mb)
    },
  },
};

export default nextConfig;
