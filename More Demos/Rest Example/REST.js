var express = require('express');
var app = express();

//var fs = require("fs");
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
//to ensure all body is parsed
app.use(bodyParser.urlencoded({
    extended: true// to avoid depricated warning
}));



var users = [];

app.get('/listUsers', function (req, res) {
    
    console.log(JSON.stringify(users));
    res.end(JSON.stringify(users));

});


app.get('/new', function (req, res) {
    res.sendFile(__dirname + "/" + "Rest.html");
})

app.post('/addUser', function (req, res) {
    // First read existing users.
    var user = {};
    user.FirstName = req.body.first_name;
    user.LastName = req.body.last_name;

    users.push(user);

    res.redirect("/listUsers");
});

app.get('/user/:fname', function (req, res) {
    for (user of users)
        if (user.FirstName == req.params.fname)
            res.end(JSON.stringify(user));
    
});


app.get('/deleteUser/:fname', function (req, res) {
    for (user in users)
        if (users[user].FirstName == req.params.fname)
            users.splice(user, 1);

    res.redirect("/listUsers");
});


var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});
/*


*/