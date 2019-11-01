const path = require('path');

module.exports = {
  entry:{
    home: './src-js/home.js',
    sub: './src-js/sub.js',
  },
  output:{
    filename: '[name].js',
    path: path.resolve(__dirname, './js'),
    publicPath: '/js'
  },
  module:{
    rules:[{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }]
  },
  devServer: {
    overlay: true
  }
}