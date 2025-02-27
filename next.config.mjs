/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'wp1.themevibrant.com',
      },
      {
        hostname: 'res.cloudinary.com',
      },
      { hostname: 'med.gov.bz' },
    ],
  },
};

export default nextConfig;
