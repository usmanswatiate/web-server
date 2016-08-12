
var express = require('express');
	var app = express();
var portNumber = process.env.PORT || 3000;

// app.get('/', function(req, res){
// 	res.send("hello usman");
// });
var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send('it is about page');
});

app.use(express.static(__dirname + '/public'));


app.listen(portNumber, function(){
	console.log("server is startd");
	console.log('at port: '+portNumber);
});