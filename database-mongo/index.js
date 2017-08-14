var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var BoardSchema = new mongoose.Schema({
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
  console.log('data.board', data.board);
  Board.create({ board: data.board, theme: data.theme}, function(err, data) {
    if (err) {
      return callback(err, null);
    } 
    return callback(err, data);

  });
}

module.exports.retrieveBoard = retrieveBoard;
module.exports.newBoard = newBoard;