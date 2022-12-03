var scope = require("./10_scope");

console.log(scope.one);//undefined
//console.log(scope.two());//err

console.log(scope.three);//undefined
//console.log(scope.four());//err

console.log(scope.five);
console.log(scope.six());