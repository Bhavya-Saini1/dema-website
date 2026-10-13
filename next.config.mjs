/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/team",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
