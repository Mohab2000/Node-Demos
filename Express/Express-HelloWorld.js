// //http:
// var http =require ("http");
// var httpServer=http.createServer();
// httpServer.on("request",function (req, res){
//    //if (req.url)
//    //if(req.method)
// });
// httpServer.listen();

//Express
var express = require("express");
var app = express(); //FACTORY DP

app.listen(8081, function () {
  //var host = server.address().address
  //var port = server.address().port
  //console.log("Example app listening at http://%s:%s", host, port);
  console.log("Example app listening");
});

app.get("/", function (req, res) {
  res.send("<h1>Hello Get</h1>");
});

app.get("/welcome", function (req, res) {
  res.send("<h1>Hello Get, again</h1>");
});

app.post("/", function (req, res) {
  res.send("Hello Post");
});
