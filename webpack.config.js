// In webpack.config.js
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

var FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.(png|jpg)$/, loader: 'file-loader' }
    ]
  },
  plugins: [HTMLWebpackPluginConfig, new FaviconsWebpackPlugin(__dirname + '/app/assets/images/logo.png')]
};
