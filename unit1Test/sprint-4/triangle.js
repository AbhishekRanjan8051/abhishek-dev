var triangle = {};
triangle["side1"] = 4;
triangle["side2"] = 3;

triangle.hypotenuse = function () {
  console.log((this.side1 ** 2 + this.side2 ** 2) ** (1 / 2));
};
console.log(triangle);
triangle.hypotenuse();
