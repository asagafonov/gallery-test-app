const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  devServer: {
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html',
    }),
    new NodemonPlugin(),
  ],
  module: {
    rules:
      [
        {
          test: /\.(css|scss|sass)$/,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
      ],
  },
});
