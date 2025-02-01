import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/makyo-dropdown',
  assetPrefix:
    process.env.NODE_ENV === 'production' ? '/makyo-dropdown/' : '',
  images: {
    loader: 'imgix',
    path: '',
  },
};

export default nextConfig;
