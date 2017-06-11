var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config1 = require('./webpack.config')('app1');
var config2 = require('./webpack.config')('app2');

var app = express();

[config1, config2].forEach((config) => {
  var compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
});


// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

app.listen(3000, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});