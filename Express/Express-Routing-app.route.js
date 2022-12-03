var express = require("express"),
    bodyParser = require("body-parser");

var app = express();


/*
app.route("/")
.all(callback)
.get(cb2)
.post(cb3);

*/

//DRY, Refactoring code
//next(): passes control to the next matching route.
app.route("/")
    /*.all(function (req, res, next) {
        res.send("testingAll");
        console.log("from ALL");
        next();//waits for next requests
    })*/
    .get(function (req, res) {
        res.send("Hello from get");
    })
    .post(function (req, res) {

        res.send("Hello from post");
        //name is sent in http req body
        // its not parsed in express hence body-parser is needed

        res.redirect("/");
    })
    .delete(function (req, res) {

        res.send("Hello from delete");
        //name is sent in http req body
        // its not parsed in express hence body-parser is needed

        res.redirect("/");
    });

app.route("/name/:name")
    .all(function (req, res, next) {
        console.log("next name");
        next();//waits for next requests
    }).get(function (req, res) {
        res.send("welcome " + req.params.name);
    });


app.listen(3000, function () {
    console.log("ready to recieve requests")
});
