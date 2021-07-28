var product = {
  items: [],
};

(product.addItem = function (name, quantity, price) {
  this.items.push({ name: name, quantity: quantity, price: price });
}),
  
  (product.total = function () {
    var priceItem = this.items.map(function (ac) {
      return ac.quantity * ac.price;
    });

    var totalPrice = priceItem.reduce(function (ac, el) {
      return ac + el;
    }, 0);
    return totalPrice;
  }),
  product.addItem("rice", 2, 60);
product.addItem("dal", 3, 50);
product.addItem("salt", 1, 20);

console.log(product.items);

console.log(product.total());
