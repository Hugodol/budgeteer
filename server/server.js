var express = require('express');
var path = require('path');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
};

// Router
var router = require('./routes.js');

var app = express();
// module.exports.app = app;

app.set('port', process.env.PORT || 3000);

app.use(allowCrossDomain);
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// Set up routes
app.use('/budget', router);

// serve client files
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(app.get('port'), function () {
  console.log('listening on port', app.get('port'));
});