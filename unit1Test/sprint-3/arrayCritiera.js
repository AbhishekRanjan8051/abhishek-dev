var data = [2, 4, 5, 3, 6, 8];

var arr = function (el, index) {
  if (el % 2 == 0 && index % 2 == 0) {
    return el;
  }
};

var result = data.filter(arr);
console.log(result);
