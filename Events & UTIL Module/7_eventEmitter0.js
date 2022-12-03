// Import events module
var events = require("events");
// Create an eventEmitter object

function personList() {
  this.list = [];
  //new events().emit();
  this.personEvents = new events();
  //myEvent.call(this);
  this.add = function (name) {
    this.list.push(name);
    //new events().emit();
    this.personEvents.emit("NewUserAdded");
  };

  this.display = function () {
    for (let p of this.list) console.log(p);
  };
}

var p = new personList();
var p1 = new personList();

p.personEvents.on("NewUserAdded", function () {
  console.log("New user Added to person list");
});

// Need to enhance the code to the following:
//p.on("NewUserAdded", function(){});

p.add("ALI");
p.add("KAREEM");

p1.add("ALI2");
p1.add("KAREEM2");

/*
// When the event will fire
function myTestFun()
{
	//......
	console.log("Test Function called");
	myEventEmitter.emit("myFirstEvent");
}

 
// Handl the event
myEventEmitter.on('myFirstEvent', function(){
   console.log('Your first Event fired now');
});
console.log("Before Event Firing.");
//Calling function that fire the event
myTestFun();
*/
console.log("Program Ended.");
