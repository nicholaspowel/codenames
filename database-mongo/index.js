var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var BoardSchema = mongoose.Schema({
  boardId: mongoose.Schema.Types.ObjectId,
  boardName: String,
  theme: String,
  board: []
});

var Board = mongoose.model('Board', BoardSchema);

var retrieveBoard = function(callback) {
  Board.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

var newBoard = function(data, callback) {
  var board = new Board({
    board: data.board,
    theme: data.theme
  });
}

module.exports.retrieveBoard = retrieveBoard;
module.exports.newBoard = newBoard;