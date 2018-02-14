var webpack = require('webpack');
var path = require('path');
var SRC_DIR = path.resolve(__dirname,"src");
var DEST_DIR = path.resolve(__dirname,"public");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: SRC_DIR+"/index.js",
  output:{
    filename:"bundle-[hash].js",
    path:DEST_DIR,
  },
  resolve:{
    extensions:['.js','.jsx'],
  },
  module:{
    rules:[
      {
        test:/\.jsx?$/,
        loader: 'babel-loader',
        exclude:/node_modules/,
        include: SRC_DIR
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ]
  },
  plugins: [
  new HtmlWebpackPlugin({  // Also generate a test.html
    template: 'src/index.html'
  })
  ],
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000,
    inline: true
  }
};

module.exports = config;
