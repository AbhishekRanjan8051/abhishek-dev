var data = ["Apple", "Windows", "Linux", "Kindle", "Quiz"];
var result = [];

var result1 = data.map(function (el) {
  if (el.length % 2 != 0) {
    return result.push(el.length);
  }
});

var sum = function (ac, el) {
  return ac + el;
};

console.log(result.reduce(sum));
