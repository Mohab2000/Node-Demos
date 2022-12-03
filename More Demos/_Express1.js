var express = require("express");
var app = express();
var names = "ali";
//express has function names after http verbs
app.get("/",function(req,res){
	//res.send("hello world!");
	//res.render("_expressIndex.jade",{names:names});
	res.render("index.jade",{names:names});
	//           template,var used within template
});
app.listen(3000,function(){
	console.log("ready to recieve requests")
});

//__dirname:current directory