module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "res.cloudinary.com",
      "mitul.ca",
      "www.dpreview.com",
    ],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/generate-sitemap");
    }

    return config;
  },
  experimental: { images: { allowFutureImage: true } },
};
