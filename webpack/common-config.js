const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const ReactRefreshTypeScript = require('react-refresh-typescript');

const { HMR } = require('./environment');

const ROOT_PATH = path.resolve(__dirname, '..');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  context: ROOT_PATH,
  entry: { app: `${ROOT_PATH}/app/index.tsx` },
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
        include: [/app/],
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
                  before: [isDevelopment && ReactRefreshTypeScript()].filter(Boolean),
                }),
              }),
              happyPackMode: true,
              transpileOnly: isDevelopment,
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
      template: path.resolve(`${ROOT_PATH}/app/index.html`),
    }),
  ],
  resolve: {
    extensions: ['.json', '.tsx', '.ts', '.js'],
    modules: ['node_modules', ROOT_PATH, 'app'],
  },
};
