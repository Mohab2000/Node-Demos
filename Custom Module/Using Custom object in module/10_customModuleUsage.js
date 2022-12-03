var cart = require("./10_customModule");

cart.addItem("ABC",3);
cart.addItem("xyz",3);
cart.addItem("MNO",3);

console.log(cart.total());

var cart2 = require("./10_customModule");

cart2.addItem("O",5);
cart2.addItem("N",5);
cart2.addItem("M",5);

console.log(cart2.total());
