var express = require("express"),
	bodyParser=require("body-parser");
	
var app = express();
var names =[];

//to ensure all body is parsed
app.use(bodyParser.urlencoded({
  extended: true// to avoid depricated warning
}));
//app.use(bodyParser.json());

//all() run over all http verbs
app.all("/",function(req,res,next){
	//res.send("testingAll");
	console.log("from ALL");
	next();
});

//express has function names after http verbs
//we can have multiple callbach, hence its important to add next
app.get("/",function(req,res,next){
	console.log(names);
	next();
},function(req,res){
	//res.send("hello world!");
	res.render("_expressIndex.jade",{names:names});
	//res.render("index.jade",{names:names});
});

app.post("/",function(req,res){
	
	names.push(req.body.name);
	//name is sent in http req body
	// its not parsed in express hence body-parser is needed
	
	res.redirect("/");
	//re-render the page
	
});


app.listen(3000,function(){
	console.log("ready to recieve requests")
});

//__dirname:current directory