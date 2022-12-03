var util = require("util");
var myEvent = require("events");

//inheritance
function personList() {
  this.list = [];
  //myEvent.call(this);
  this.add = function (name) {
    this.list.push(name);
    this.emit("NewUserAdded");
  };

  this.display = function () {
    for (var p in this.list) console.log(this.list[p]);
  };
}

util.inherits(personList, myEvent);

/*Person.prototype.add=function(name){
	this.list.push(name);
	this.emit('newUsr', name);	
}

util.inherits(Person,myEvent);

var me= new Person();
me.on("newUsr",function(name){
	console.log("hello " +name);
	
});*/

var p = new personList();
var p1 = new personList();

p.on("NewUserAdded", function () {
  console.log("New user Added to person list");
});

// p1.on("NewUserAdded", function(){
// 	console.log("New user Added to person list");
// });

p.add("ALI");
p.add("KAREEM");

p1.add("ALI2");
p1.add("KAREEM2");

p.display();
p1.display();
