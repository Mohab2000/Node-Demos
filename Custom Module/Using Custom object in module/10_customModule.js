var items = [];

function addItem(item, price) {
    items.push({
        item_nm: item,
        item_price: price
    });
}



exports.addItem = addItem;

exports.total = function() {
    /*return items.reduce(function(prev,curr){
    	return prev+curr.item_price;
    },0);*/
    var t = 0;

    for (var i in items) {
        t += parseInt(items[i].item_price);
    }
    return t;
};


/*
//arr.reduce(callback[, initialValue])
[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, currentIndex, array) {
  return previousValue + currentValue;
});
*/