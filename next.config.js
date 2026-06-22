const nextTranslate = require("next-translate-plugin");

module.exports = {
  ...nextTranslate({}, { turbopack: true }),
  reactStrictMode: true,
  images: {
    qualities: [25, 75],
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/montreal-metro",
        destination: "/montreal-in-motion",
        permanent: true,
      },
    ];
  },
};
