const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devtool: 'source-map',  // switch to 'inline-source-map' to only provide sourcemap with webpack-dev-server
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'] // Required for module resolution. ts files not resolved by default.
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
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