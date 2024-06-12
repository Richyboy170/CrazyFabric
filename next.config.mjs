// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// next.config.mjs
export default {
    webpack(config, { isServer }) {
      if (!isServer) {
        config.module.rules.push({
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        });
      }
      return config;
    },
  };
  