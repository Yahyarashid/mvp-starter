var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// UNCOMMENT FOR REACT
 app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/items', function (req, res) {

	items.selectAll(function(err,items){
		res.send(items)
})


	//res.send('hello iam there')




});


app.post('/items', function(req,res) {

	var message = req.body.message;
	items.saveData(message);
	res.send('world is amazing');
});


////////////////////////////////////////////////////////////////////////
app.post('/signup',function(req,res) {

});
app.get('/signup', function(req,res){

})
app.post('/login',function(req,res){

})
app.get('/login',function(req,res){
	
})

////////////////////////////////////////////////////////////////////////

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

