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
  _boardId: Schema.types.ObjectId,
  boardName: String,
  theme: String,
  words: []
});

var Board = mongoose.model('Board', boardSchema);

var selectAll = function(callback) {
  Board.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;