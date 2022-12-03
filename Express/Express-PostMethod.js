var express = require("express");
var app = express();

var bodyParser = require("body-parser");

// Create application/x-www-form-urlencoded parser
//to ensure all body is parsed
var urlencodedParser = bodyParser.urlencoded({ extended: true }); //{extended: false});//  avoid depricated warning
/*
If extended is false, you can not post "nested object"

person[name] = 'cw'

// Nested Object = { person: { name: "cw" } }
If extended is true, you can do whatever way that you like.

The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false)
 or the qs library (when true). The "extended" syntax allows for rich objects and arrays to be encoded 
 into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.

Defaults to true, but using the default has been deprecated. 

*/

//app.use(express.static('public'));

app.get("/home", function (req, res) {
  res.sendFile(__dirname + "/" + "Express-PostMethod.html");
});

app.post("/process_post", urlencodedParser, function (req, res) {
  // Prepare output in JSON format
  /*response = {  
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };*/

  //console.log(response);
  //res.end(JSON.stringify(response));
  res.end("<b>Welcome</b>: " + req.body.first_name + " " + req.body.last_name);
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
/*
    you should install body-parser module to run this demo
     -- npm install body-parser 
    run the server, and try it
    http://127.0.0.1:8081/ExpressPostMethod
    */
