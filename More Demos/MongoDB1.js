var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

//require the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/students';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
		//We are connected.
		console.log('Connection established to', url);

		//its req to send message when user 
		io.on('connection', function(client) {
			console.log('Client connected...');
			//to listen to msg event from client
			client.on("message", function(data){
				console.log("message Event from client " + data);
				
				var collection = db.collection('student');

				// Insert some users
				collection.insert({"name":"abcd","age":12,"message":data}, function (err, result) {
					if (err) {
						console.log(err);
					} else {
						console.log('Inserted data');
					}
				});
				
				var x = collection.find({"name":"ali"}).toArray(function(err,data){
					console.log(data);
					console.log(data[0].age);
					
				});
				
				
				/*
				var y =JSON.parse(collection.find({"name":"ali"},{"salary":"true"}));
				console.log(y);
				console.log(y.salary);
			*/
				// broadcast msg to all listening clients
				client.broadcast.emit("message", 'Hello ALL Clients ; data sent is:'+data);
				
				//Close connection
				//db.close();
			});	
			
		});
	}
});

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index3.html');
});


server.listen(3000);