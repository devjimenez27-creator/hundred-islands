/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/hundred-islands",
  assetPrefix: "/hundred-islands/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;