var express = require("express");
var app = express();

//express has function names after http verbs
app.get("/",function(req,res){
	
	res.send("hello world!");
	
}).listen(3000,function(){
	console.log("ready to recieve requests")
});

//__dirname:current directory