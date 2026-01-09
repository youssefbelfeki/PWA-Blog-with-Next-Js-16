import withPWA from "next-pwa";

const nextConfig = {
  reactStrictMode: true,
  turbopack: {},
  images: {
    domains: ['techcrunch.com', 'thenextweb.com','platform.theverge.com','gizmodo.com','media.zenfs.com','s.yimg.com'],
  },
};

export default withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
})(nextConfig);
