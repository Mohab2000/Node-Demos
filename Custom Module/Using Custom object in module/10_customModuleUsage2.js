var myCart = require("./10_customModule2");

var cart = new myCart();
cart.addItem("ABC", 3);
cart.addItem("xyz", 3);
cart.addItem("MNO", 3);

var cart2 = new myCart();

cart2.addItem("O", 5);
cart2.addItem("N", 5);
cart2.addItem("M", 5);


console.log(cart.total());
console.log(cart2.total());