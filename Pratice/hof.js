var numbers = "231 312 23 43 41 343 14 1 20 15 20 10 6";

var data = numbers.split(" ").map(Number);
var result = "";

for (var i = 0; i < data.length; i++) {
  if (data[i] % 2 == 0) {
    result += data[i] + " ";
  }
}
var final = result.trim().split(" ").map(Number);

var output = final.sort(function (a, b) {
  return a - b;
});
console.log(output);
