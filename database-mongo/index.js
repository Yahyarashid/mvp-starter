var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  posts: String,

});

var Item = mongoose.model('Item', itemSchema);


var saveData = function(data){
  var obj = {
    posts:data.message,

  }
  console.log('daaaaaa',data)
  var a = new Item(obj)
  a.save();
}

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.saveData = saveData;