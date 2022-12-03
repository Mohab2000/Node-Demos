//2)to listen to msg event from client
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

//its req to send message when user 
io.on('connection', function(client) {
	console.log('Client connected...');
	//to listen to msg event from client
	client.on("message", function(data){
		console.log("message Event from client " + data);
		
	});
	//emit event to browser sending hello obj
	client.emit("message",{hello:"helloAll"});

});

app.get('/', function (req, res) {
res.sendFile(__dirname + '/index2.html');
});

//__dirname:current directory
server.listen(3000);