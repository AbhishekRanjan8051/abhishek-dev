var data = [
  [1, 2, 3, 4],
  [5, 6, 7, 6],
  [7, 8, 9, 9],
  [2, 4, 1, 3],
];

var sum = 0;
var sum1 = 0;
var result = "";

var rows = data.length;
var cols = data[0].length;

for (var i = 0; i < rows; i++) {
  for (var j = 0; j < cols; j++) {
    if (i == j) {
      sum += data[i][j];
    }
  }
}
for (var i = 0; i < rows; i++) {
  for (var j = 0; j < cols; j++) {
    if (i + j == rows - 1) {
      sum1 += data[i][j];
    }
  }
}
if (sum > sum1) {
  result = sum - sum1;
} else {
  result = sum1 - sum;
}

console.log(result);
