//3)to send data to all listening clients use 
//socket.broadcast.emit("message", 'Hello');
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
		// broadcast msg to all listening clients
		client.broadcast.emit("message", 'Hello ALL Clients ; data sent is:'+data);
		
	});
	//emit event to browser sending hello obj
	//client.emit("message",{hello:"helloAll"});

});

app.get('/', function (req, res) {
	res.render("aaa.jade",{})
res.sendFile(__dirname + '/index3.html');
});

//__dirname:current directory

server.listen(3000);