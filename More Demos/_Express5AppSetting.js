var express = require("express"),
	bodyParser=require("body-parser");
	
var app = express();
var names =[];

//to ensure all body is parsed
app.use(bodyParser.urlencoded({
  extended: true// to avoid depricated warning
}));

//application Settings
app.set("view engine","jade");
app.set("views","templates");

//app.enable("view cache");

//app.enable("case sensitive routing");//disabled by default (/hello !=/Hello)
//app.enable("strict routing");//enabled by default (/hello =/hello/)

app.disable("x-powered-by");//enabled by default



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
	res.render("_expressIndex",{names:names,title:"welcomeAll"});
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