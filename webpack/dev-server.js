const app = require('express')();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const devConfig = require('./webpack-development.config');
const { HMR, DEV_SERVER_PORT } = require('./environment');

const compiler = webpack(devConfig);

app.use(
  webpackDevMiddleware(compiler, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    methods: ['GET'],
    publicPath: devConfig?.output?.publicPath || 'auto',
    serverSideRender: false,
  })
);

if (HMR) {
  app.use(
    webpackHotMiddleware(compiler, {
      log: false,
    })
  );
}

app.listen(DEV_SERVER_PORT, error => {
  if (error) {
    console.error(error);
  } else {
    console.info(`Dev server is listening at ${DEV_SERVER_PORT} port`);
  }
});
