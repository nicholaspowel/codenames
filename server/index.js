var express = require('express');
var bodyParser = require('body-parser');
require('bootstrap');
var boards = require('../database-mongo');

var app = express();


app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/boards', function (req, res) {
  boards.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

