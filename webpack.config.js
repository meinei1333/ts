const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const { ProvidePlugin } = require('webpack');

const ROOT = path.resolve(__dirname, '');
const DESTINATION = path.resolve(__dirname, 'dist');

webpackConfig = module.exports = {
  context: ROOT,
  entry: {
    main: `./src/index.ts`,
  },
  output: {
    filename: '[name].bundle.js',
    path: DESTINATION,
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [ROOT, 'node_modules'],
    alias: {
      assets: path.join(__dirname, 'assets/'),
    },
  },
  devtool: 'cheap-module-source-map',
  devServer: {},
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyPlugin([
      { from: './index.html', to: DESTINATION },
      { from: './src/assets', to: 'assets' },
    ]),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 8080,
      server: { baseDir: ['./dist'] },
    }),
  ],
};
