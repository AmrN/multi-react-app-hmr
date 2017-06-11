var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (appName) {
  return {
    devtool: 'cheap-module-eval-source-map',
    entry: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      path.join(__dirname, appName, 'index'),
    ],
    output: {
      path: path.join(__dirname, 'dist', appName),
      filename: 'bundle.js',
      publicPath: '/'+appName+'/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, appName, 'index.html'),
      }),
    ],
    module: {
      loaders: [{
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      }]
    },
  };
};
