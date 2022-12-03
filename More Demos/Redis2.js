//3)to send data to all listening clients use 
//socket.broadcast.emit("message", 'Hello');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var redis = require("redis");
var clientredis = redis.createClient();

clientredis.on("error", function (err) {
    console.log("Error " + err);
});

clientredis.on('connect', function() {
    console.log('connected');
});

//its req to send message when user 
io.on('connection', function(client) {
	console.log('Client connected...');
	//to listen to msg event from client
	client.on("message", function(data){
		console.log("message Event from client " + data);
		clientredis.set("message3",data);
		clientredis.get("message3",function(err,data){
			console.log(data)
			
		});
		
		// broadcast msg to all listening clients
		client.broadcast.emit("message", 'Hello ALL Clients ; data sent is:'+data);
		
	});
	
	//emit event to browser sending hello obj
	//client.emit("message",{hello:"helloAll"});

});

app.get('/', function (req, res) {
res.sendFile(__dirname + '/index3.html');
});



server.listen(3000);