var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test3');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});
var Schema = mongoose.Schema;
var BoardSchema = new Schema({
  boardId: {type: Schema.Types.ObjectId, auto: true},
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