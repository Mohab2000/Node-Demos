// to store datausing redis
//6376
var redis = require("redis");
var client = redis.createClient();

client.on("error", function (err) {
    console.log("Error " + err);
});

client.on('connect', function() {
    console.log('connected');
});
//set(key,value)
client.set("message1","hello this is message1");
client.set("message2","hello this is message2");
client.set("message3","hello this is message3");


//get
client.get("message1",function(err,data){
	console.log(data)
	
});