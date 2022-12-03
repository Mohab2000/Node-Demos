var mathModule = require("./myModule");


var result = mathModule(10);
//console.log(mathModule.x);
console.log(result);

result = mathModule.calcCubic(10);
console.log(result);