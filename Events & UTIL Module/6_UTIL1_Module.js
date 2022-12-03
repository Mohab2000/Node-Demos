var util=require("util");

//inheritance
function Person(){
	//
	//
}

Person.prototype.logIn=function(){
	return "this will be the displayed string for inheritance";
};

function User(){
	//
	//
}

util.inherits(User,Person);//User inherets all functions of Person on its protoype
//User.prototype=Person.prototype

var me= new User();
console.log(me.logIn());
////////////////////////
//formating
var obj={name:"ali", age:23, skills:["javaScript","nodeJS"]};

//%s ill print the object as string
//%j ill print the object as json
console.log(util.format("Object as string:%s, obj as json :%j",obj,obj));

console.log(util.format("Name:%s, Age :%d",obj.name,obj.age));

/////////////////////////
//debugging

/*var log=util.debuglog("ABC");
log("this is debugging message");

//NODE_DEBUG=ABC,net,tls.
*/