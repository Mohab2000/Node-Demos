var express = require('express');
var app = express();
var cors = require('cors');

app.use(express.json());

//app.use(()=>{express.json();next()});

app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: "*" }));

//var products=[];

var products = [{ "Name": "Laptop", "Price": 20000 },
    { "Name": "HDD", "Price": 500 },
    { "Name": "Mobile", "Price": 3000 }
];



app.get('/', function(req, res) {
    res.sendFile(__dirname + "/" + "Index.html");
});

app.get("/getProducts", function(reg, res) {
    res.status(200).send(products);
});

app.get("/add", function(req, res) {
    res.sendFile(__dirname + "/" + "AddProduct.html");
});



app.post('/insert', function(req, res) {
    console.log(req.body);
    products.push(req.body);

    // products.push({Name:req.body.pName, 
    //     Price:req.body.pPrice});
    res.redirect('/getProducts');
});

app.get('/del/:pName', (req, res) => {
    let productName = req.params.pName;
    for (let prdIndex in products) {
        if (products[prdIndex].Name == productName) {
            products.splice(prdIndex, 1);
        }
    }
    res.redirect('/getProducts');

});




app.listen(3000, function() {

    console.log("Example app listening...");
});