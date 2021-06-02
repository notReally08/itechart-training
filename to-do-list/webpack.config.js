const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
    },
    mode: argv.mode === 'development' ? 'development' : 'production',
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ],
  }
}