var express = require('express');
var mongosse = require('mongoose');
var bodyParser = require('body-parser');
var axios = require('axios');
var morgan = require('morgan');

// require('bootstrap');
var boards = require('../database-mongo');
var PORT = process.env.PORT || 3000;
var app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());

app.get('/boards', function (req, res) {
  console.log('get board', req.query);
  boards.retrieveBoard(req.query, function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/boards', function(req, res){
  console.log('axios saveboard');
  console.log('REQUEST',req.body);
  boards.newBoard(req.body, function(err,data){
    if(err) {
      res.sendStatus(300);
    } else {
      res.json(data);
    }
  });
})

app.listen(PORT, function() {
  console.log('listening on port' + PORT + '!');
});

