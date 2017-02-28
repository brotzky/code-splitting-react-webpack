/**
 * Webpack Dev Server
 * This file is used to run our local enviroment
 */
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig = './webpack.config';
import path from'path';

// always dev enviroment when running webpack dev server
const env = { dev: process.env.NODE_ENV };

const devServerConfig = {
  contentBase: path.join(__dirname, '../../src/'),
  historyApiFallback: { disableDotRule: true }, // Need historyApiFallback to be able to refresh on dynamic route
  stats: { colors: true } // Pretty colors in console
};

const server = new WebpackDevServer(webpack(webpackConfig(env)), devServerConfig);

server.listen(3000, 'localhost');
