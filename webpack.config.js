var path = require('path');
var webpack = require('webpack');
var ExtractText = require('extract-text-webpack-plugin');
var BundleTracker = require('webpack-bundle-tracker');
module.exports = {
  entry:  path.join(__dirname, 'assets/src/js/index'),  output: {
    path: path.join(__dirname, 'assets/dist'),
    filename: '[name]-[hash].js'
  },  plugins: [
    new BundleTracker({
      path: __dirname,
      filename: 'webpack-stats.json'
    }),
    new ExtractText({
      filename: '[name]-[hash].css'
    }),
  ],
    module: {
        rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          loader: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: ExtractText.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          }),
        }
        ]
    },


}