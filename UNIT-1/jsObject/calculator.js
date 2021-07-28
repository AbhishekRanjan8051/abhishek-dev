var number = {};
number["a"] = 4;
number["b"] = 2;

number.addition = function () {
  console.log(this.a + this.b);
};

number.subtraction = function () {
  console.log(this.a - this.b);
};

number.multiplication = function () {
  console.log(this.a * this.b);
};

number.division = function () {
  console.log(this.a / this.b);
};

console.log(number);

number.addition();
number.subtraction();
number.multiplication();
number.division();
