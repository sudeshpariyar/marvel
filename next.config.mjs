/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["i.annihil.us", "gateway.marvel.com"],
  // },
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "gateway.marvel.com",
      //   pathname: "**",
      // },
      {
        protocol: "http",
        hostname: "i.annihil.us",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
