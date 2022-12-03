function Cart() {
    this.items = [];
    this.addItem = function(item, price) {
        this.items.push({
            item_nm: item,
            item_price: price
        });
    };

    this.total = function() {
        var t = 0;
        for (var i in this.items) {
            t += parseInt(this.items[i].item_price);
        }
        return t;
    };
}

module.exports = Cart;




//exports.addItem = addItem;
//exports.total = total;


/*
//arr.reduce(callback[, initialValue])
[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, currentIndex, array) {
  return previousValue + currentValue;
});
*/