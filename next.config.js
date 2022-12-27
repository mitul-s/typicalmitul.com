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
  experimental: { images: { allowFutureImage: true } },
  async rewrites() {
    return [
      {
        source: "/gallery/concerts",
        destination: "/gallery?type=concerts",
      },
    ];
  },
};
