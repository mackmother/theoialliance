/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
      {
        protocol: "https",
        hostname: "webresources.commscope.com",
      },
      {
        protocol: "https",
        hostname: "wifi.edge-core.com",
      },
      {
        protocol: "https",
        hostname: "www.netexperience.com",
      },
      {
        protocol: "https",
        hostname: "vectorseek.com",
      },
      {
        protocol: "https",
        hostname: "docs.fortinet.com",
      },
      {
        protocol: "https",
        hostname: "www.freeradius.org",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "be-net.com",
      },
    ],
  },
};

export default nextConfig;
