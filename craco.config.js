const cracoLess  = require('craco-less')
const path = require('node:path');
const { plugins } = require('./.eslintrc');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@api': path.resolve(__dirname, 'src/api'),
    },
  },
  plugins: [
    {
      plugin: cracoLess,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
        cssLoaderOptions: {
          modules: {
            localIdentName: '[local]_[hash:base64:5]',
          }
        },
      },
    },
  ],
  devServer: {
    proxy: {
      '/api': {
        target: 'https://httpbin.org',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
