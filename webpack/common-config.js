const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const ReactRefreshTypeScript = require('react-refresh-typescript');

const ROOT_PATH = path.resolve(__dirname, '..');

const { HMR } = require('environment');

module.exports = {
  context: ROOT_PATH,
  entry: { index: path.resolve(__dirname, 'src', 'index.tsx') },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.(m?js|tsx?)$/,
        include: [/src/],
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: 4,
            },
          },
          {
            loader: 'ts-loader',
            options: {
              ...(HMR && {
                getCustomTransformers: () => ({
                  before: [ReactRefreshTypeScript()],
                }),
              }),
              happyPackMode: true,
              transpileOnly: process.env.NODE_ENV !== 'production',
            },
          },
        ],
      },
      {
        test: /\.(otf|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          declaration: false,
          global: false,
          syntactic: true,
          semantic: true,
        },
      },
    }),
    new CircularDependencyPlugin({
      cwd: ROOT_PATH,
      exclude: /node_modules/,
      failOnError: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(ROOT_PATH),
    }),
  ],
  resolve: {
    extensions: ['.json', '.tsx', '.ts', '.js'],
    modules: ['node_modules', ROOT_PATH],
  },
};
