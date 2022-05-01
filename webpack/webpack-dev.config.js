const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ForkTsCheckerNotifierPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const commonConfig = require('./common-config');
const { HMR, DEV_SERVER_PORT } = require('./environment');

const DEFAULT_PORT = 3000;

module.exports = merge(commonConfig, {
  devtool: 'eval-source-map',
  mode: 'development',
  devServer: {
    hot: true,
    port: DEV_SERVER_PORT ?? DEFAULT_PORT,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
      },
      {
        test: /\.(jpg|png)$/,
        type: 'asset',
        generator: {
          filename: '[path][name]_[contenthash].[ext]',
        },
      },
    ],
  },
  plugins: [
    HMR && new webpack.HotModuleReplacementPlugin(),
    HMR &&
      new ReactRefreshPlugin({
        overlay: {
          sockIntegration: 'wds',
        },
      }),
    new ForkTsCheckerNotifierPlugin({
      excludeWarnings: false,
      skipSuccessful: true,
      title: 'TypeScript',
    }),
    new webpack.WatchIgnorePlugin({ paths: [/node_modules/] }),
  ].filter(Boolean),
  stats: {
    all: false,
    builtAt: true,
    colors: true,
    errors: true,
    moduleTrace: true,
    timings: true,
    version: true,
    warnings: true,
  },
  output: {
    pathinfo: true,
    publicPath: 'auto',
  },
});
