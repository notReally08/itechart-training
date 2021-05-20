const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    'arrayLibrary': './src/index.js',
    'arrayLibrary.min': './src/index.js'
  },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.min\.js$/
      })],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ESLintPlugin({
      extensions: ["js"],
    }),
  ]
};