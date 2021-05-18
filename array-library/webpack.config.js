const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require("eslint-webpack-plugin") ;

module.exports = {
  entry: {
    "arrayLibrary": "./src/index.js",
    "arrayLibrary.min": "./src/index.js",
  },
  devtool: "source-map",
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  rules: [
    {
      test: /\.(js)$/,
      enforce: 'pre',
      use: [
        {
          options: {
            eslintPath: require.resolve('eslint'),
  
          },
          loader: require.resolve('eslint-loader'),
        },
      ],
      exclude: /node_modules/,
    },
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ESLintPlugin({
      extensions: ["js"],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      test: /\.min\.js(\?.*)?$/i,
    })],
  },
};