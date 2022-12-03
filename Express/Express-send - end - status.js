var express = require('express');
var app = express();



app.get('/test', function (req, res) {
    res.send("request received");
    res.send('<p>some html</p>');
    res.end(); //Use to quickly end the response without any data. If you need to respond with data, instead use methods such as res.send() and res.json().

    //sending JSON data
    res.send({ some: 'json' });
    res.json({ user: 'tobi' });
    res.status(500).json({ error: 'message' });
    res.send(404,"Sorry, not found");
    //res.sendFile("path");


    //http status
    res.status(400).send('Bad Request');
    res.end();

});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
/*
run the server, and try it
http://127.0.0.1:8081/ExpressGetDemo
*/