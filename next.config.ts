import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/tour/uniworldpuja25", destination: "/uniworldpuja25/", permanent: true },
      { source: "/tour/ahiritolasapuja25", destination: "/ahiritolasapuja25/", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
      { protocol: "https", hostname: "www.figma.com" },
    ],
  },
};

export default nextConfig;
