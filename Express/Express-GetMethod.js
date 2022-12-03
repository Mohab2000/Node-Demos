var express = require('express');
var app = express();

//You simply needs to pass the name of the directory where you keep your static assets, to the express.static middleware to start serving the files directly. For example, if you keep your images, CSS, and JavaScript files in a directory named public, you can do this:
//app.use(express.static('public'));
app.get('/home', function(req, res) {
    //console.log(__dirname);
    res.sendFile(__dirname + "/" + "Express-GetMethod.html");
})

app.get('/process_get', function(req, res) {

    // Prepare output in JSON format
    /*var r = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(r);
    res.end(JSON.stringify(response));
    res.end("<b>Welcome</b>: " +r.first_name + " " + r.last_name);*/

    res.end("<b>Welcome</b>: " + req.query.first_name + " " + req.query.last_name);
})

var server = app.listen(8080, function() {

        var host = server.address().address
        var port = server.address().port

        console.log("Example app listening at http://%s:%s", host, port)

    })
    /*
    run the server, and try it
    http://127.0.0.1:8081/ExpressGetDemo
    */