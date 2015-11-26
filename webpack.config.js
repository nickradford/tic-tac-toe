var webpack = require('webpack');

module.exports = {
  entry: './src/app.js',

  output: {
    filename: 'app.js',
    path: __dirname + '/public'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }

    ]
  }
}
