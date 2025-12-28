/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  // Explicitly disable export output to avoid static generation issues
  // with dynamic routes that don't have generateStaticParams
  output: undefined,
};

export default nextConfig;
