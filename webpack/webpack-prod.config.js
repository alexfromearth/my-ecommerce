const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const commonConfig = require('./common-config');

module.exports = merge(commonConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.svg$/,
        type: 'asset',
        generator: {
          filename: '[name]_[contenthash].[ext]',
        },
        use: [
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      convertColors: {
                        shorthex: false,
                      },
                      convertPathData: false,
                    },
                  },
                },
              ],
            },
          },
        ],
      },
      {
        test: /\.(jpg|png)$/,
        type: 'asset',
        generator: {
          filename: '[name]_[contenthash].[ext]',
        },
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 100,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  output: {
    chunkFilename: '[name]-[chunkhash].js',
    filename: '[name]-[chunkhash].js',
    path: path.resolve(__dirname, '../build'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      chunkFilename: '[id]-[contenthash].css',
      filename: '[name]-[contenthash].css',
    }),
  ],
  stats: {
    children: false,
  },
});
