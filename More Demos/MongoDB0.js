//require the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
//var url = 'mongodb://localhost:27017/my_database_name';
var url = 'mongodb://localhost:27017/students';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //We are connected.
    console.log('Connection established to', url);
	
    // work with the database.
	
	var collection = db.collection('student');

    // Insert some users
   collection.insert({"name":"Mahmoud","age":25}, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Inserted data');
      }
	});
	
	
	console.log(collection.find({"name":"Amira"}));
	//console.log(collection.find({"name":"tareq"}).salary);//eee
	collection.find({"name":"Amira"}).toArray(function(err,data){
					console.log(data);
					console.log(data[0].salary);
					
				});
	
    //Close connection
   // db.close();
  }
});

