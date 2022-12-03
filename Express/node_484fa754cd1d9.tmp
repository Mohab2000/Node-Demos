var express = require('express');
var app = express();
//First-match wins
// This responds with "Hello World" on the homepage
app.get('/', function(req, res) {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');
});

// This responds a POST request for the homepage
app.post('/', function(req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
});

// This responds a PUT request for the homepage
app.put('/', function(req, res) {
    console.log("Got a PUT request for the homepage");
    res.send('Hello PUT');
});

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function(req, res) {
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE');
});

// This responds a GET request for the /home page.

//requests handling order differs here, to not conflict between /home, and /:id

app.get('/home', function(req, res) {
    console.log("Got a GET request for /home");
    res.send('home route');
});

//First match wins
app.get('/abcd', function(req, res, next) {
    console.log("Got a GET request for /home");
    //next();
    res.send('abcd route');
    //res.redirect('/home');
});

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
});

app.get('/getProduct/:id', function(req, res) {
    console.log("Got a GET request for /:id");
    res.send("id: " + req.params.id);
});
//URL Params: localhost:8081/getProduct/10


app.get('/test/:id([0-9]{5})', function(req, res) {
    res.send('id: ' + req.params.id);
});
//localhost:8081/test/12345

//Other routes here
app.get('*', function(req, res, next) {
    //res.send('Sorry, this is an invalid URL.');
    // next(); // will execute the next matching route
});

//Responds to all HTTP verbs (This method is generally used for defining middleware)
app.all('*', function(req, res) {
    res.send("Sorry, Page not found...");
});

var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})



/*
More:
    https://expressjs.com/en/guide/routing.html
run the server and try access different functions
http://127.0.0.1:8081/list_user
http://127.0.0.1:8081/abcd
http://127.0.0.1:8081/abcdefg
http://127.0.0.1:8081/test/12345
*/