var array = [1, 2, 3, 4, 5, 6, 7, 8];

var isOdd = function (el) {
  return el % 2 == 1;
};

console.log(array.filter(isOdd));
