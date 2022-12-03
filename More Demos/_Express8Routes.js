var express = require("express"),
	bodyParser=require("body-parser");
	
var app = express();
var names =[];


//3rd party Middleware
app.use(bodyParser.urlencoded({
  extended: true// to avoid depricated warning
}));

/*
app.route("/")
.all(callback)
.get(cb2)
.post(cb3);

*/

//DRY, Refactoring code
app.route("/")
.all(function(req,res,next){
	//res.send("testingAll");
	console.log("from ALL");
	next();
})
.get(function(req,res){
	//res.send("hello world!");
	res.render("_expressIndex.jade",{names:names});
	//res.render("index.jade",{names:names});
})
.post(function(req,res){
	
	names.push(req.body.name);
	//name is sent in http req body
	// its not parsed in express hence body-parser is needed
	
	res.redirect("/");
	//re-render the page
	
});

app.route("/name/:name")
.all(function(req,res,next){console.log("next name");next();}).get(function(req,res){
	res.send("welcome "+req.params.name);
	//res.send("welcome "+req.name);
});


app.listen(3000,function(){
	console.log("ready to recieve requests")
});
