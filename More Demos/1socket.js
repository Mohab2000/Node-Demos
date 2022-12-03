// express applications have become request handler functions that you pass to http or http Server instances. You need to pass the Server to socket.io, and not the express application function.
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
	console.log('Client connected...');
	//emit event to browser sending hello obj
	client.emit("message",{hello:"helloAll"});

});

app.get('/', function (req, res) {
res.sendFile(__dirname + '/index.html');
});

server.listen(3000);