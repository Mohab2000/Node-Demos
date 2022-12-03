var express = require('express');
var app = express();

app.use(express.static('Resources'));
//app.use(express.static('style'));

app.get('/', function (req, res) {
   res.sendFile(`${__dirname}/ExpressHelloWorld-StaticFiles.html`)
});

// app.get('/img', function (req, res) {
//    res.send('<img src="images/pic2.jpg">');
// });

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})

/*
run the server and try 
http://127.0.0.1:8081/images/pic2.jpg
*/