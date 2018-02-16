var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'lib')));
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('listening on port', port);
});
