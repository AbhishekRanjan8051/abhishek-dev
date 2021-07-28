var array = [1, 2, 3, 4, 5, 6, 7, 8];

var divisible = function (el) {
  return el % 3 == 0;
};

var cubes = function (el) {
  return el ** 3;
};

var sum = function (ac, el) {
  return el + ac;
};
console.log(array.filter(divisible).map(cubes).reduce(sum));
