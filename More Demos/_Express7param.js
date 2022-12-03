var express = require("express"),
	bodyParser=require("body-parser");
	
var app = express();
var names =[];


//3rd party Middleware
app.use(bodyParser.urlencoded({
  extended: true// to avoid depricated warning
}));

//custom Middleware
app.use(function(res,req,next){
	console.log("Middleware");
	next();
});

//running MD based on param
app.param('name',function(req,res,next,nm){
	console.log(nm);	
	req.nm="Kareem"
	//req.name=name.toLowerCase();
	next();
});

app.get("/name/:name",function(req,res){
	res.send("welcome "+req.params.name+" "  +req.nm);
	//res.send("welcome "+req.name);
});


app.listen(3000,function(){
	console.log("ready to recieve requests")
});


/*

//routeFunction Middleware
app.all()
app.get()
app.post()
*/
//built-in Middleware
app.use(express.static("./public"));

