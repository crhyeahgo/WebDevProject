const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
   // Creates HTML file to serve the webpack bundles. Otherwise developer would have to manually update the script tags in the
   // HTML file each time a bundle is changed
    new HtmlWebpackPlugin({
      title: 'Charlotte\'s WebDev Project',
      template: path.resolve(__dirname, './src/index.html'),
    }),
  ],
  devServer: {
    static: './dist',  // Look for files in dist folder
    port: 8080
  }
};