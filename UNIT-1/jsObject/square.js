var square = {};

square["length"] = 6;
square["breadth"] = 5;

square.area = function () {
  console.log(this.length * this.breadth);
};

square.premeter = function () {
  console.log(2 * this.length + this.breadth);
};

console.log(square);
square.area();

square.premeter();
