var express =   require("express");
var multer  = require('multer');
var app =   express();

// Configure multer
var fileStorage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
    //'./uploads':  Folder path where the file will be created
  },
  filename: function (req, file, callback) {
      console.log(file.mimetype);
    callback(null, Date.now() + file.originalname);// + '-' + Date.now() + ".jpg");
    //concate date.now to differinciate is there are many files with the same name
  }
});

//This will return object that will be used to save the file
var upload = multer({ storage : fileStorage})
  .single('fileInput');//name of file upload input in the form
//fileInput: is the name of file upload input in the form

app.get('/',function(req,res){
      res.sendFile(__dirname + "/Fileupload.html");
});

app.post('/upload_file',function(req,res){
    
    //call upload object created before
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file." +err.toString());
        }
        res.end("File is uploaded");
    });
});

app.listen(3000,function(){
    console.log("Working on port 3000");
});

/*
//Code for older version
var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');//for multi-part form data

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}));

app.get('/home', function (req, res) {
    res.sendFile(__dirname + "/" + "Fileupload.html" );
})

app.post('/file_upload', function (req, res) {

   console.log(req.files.file.name);
   console.log(req.files.file.path);
   console.log(req.files.file.type);

   var file = __dirname + "/" + req.files.file.name;
   fs.readFile( req.files.file.path, function (err, data) {
        fs.writeFile(file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'File uploaded successfully',
                   filename:req.files.file.name
              };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})*/