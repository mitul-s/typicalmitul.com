const nextTranslate = require("next-translate-plugin");

module.exports = {
  ...nextTranslate({}, { turbopack: true }),
  reactStrictMode: true,
  images: {
    qualities: [25, 75],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "mitul.ca" },
      { protocol: "https", hostname: "www.dpreview.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/concerts",
        destination: "/gallery/concerts",
        permanent: true,
      },
      {
        source: "/architecture",
        destination: "/gallery/architecture",
        permanent: true,
      },
      {
        source: "/montreal-metro",
        destination: "/montreal-in-motion",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/gallery/concerts",
        destination: "/gallery?type=concerts",
      },
      {
        source: "/gallery/architecture",
        destination: "/gallery?type=architecture",
      },
      {
        source: "/gallery/street",
        destination: "/gallery?type=street",
      },
      {
        source: "/gallery/nature",
        destination: "/gallery?type=nature",
      },
      {
        source: "/gallery/outdoors",
        destination: "/gallery?type=outdoors",
      },
      {
        source: "/gallery/all",
        destination: "/gallery?type=all",
      },
    ];
  },
};
