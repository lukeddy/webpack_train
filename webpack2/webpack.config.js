var path = require('path');

var config = {
  entry: {
    admin: './admin/index.js',
    product: './product/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js'
  }
};

module.exports = config;