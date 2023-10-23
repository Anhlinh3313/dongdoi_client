/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images.unoptimized : true,
  swcMinify: true,
  images: {
    domains: ["vncdn.sabasports.com", "thethao789.b-cdn.net"],
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  env: {
    NEXT_PUBLIC_API_DOMAIN: "https://api.dongdoi.com/",
    NEXT_PUBLIC_SCHEMA_NAME: "dongdoi",
    NEXT_PUBLIC_SCHEMA_URL: "https://dongdoi.com",
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
};

module.exports = nextConfig;
