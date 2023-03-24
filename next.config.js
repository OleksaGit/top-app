/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }
//
// module.exports = nextConfig

module.exports = {
  images: {
    domains: ['google.com']
  },
  webpack(config, options) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      issuer: /\.[jt]sx?$/,
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          // plugins: [{ removeViewBox: false }],
          plugins: [{
            name: 'preset-default',
            params: {
              override: {
                removeViewBox: false
              }
            }
          }],
        },
        titleProp: true,
      },
      test: /\.svg$/,
      // use: ['@svgr/webpack'],
    });

    return config;
  },
};
