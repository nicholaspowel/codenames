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
  words: []
});

var Board = mongoose.model('Board', BoardSchema);

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