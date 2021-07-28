var data = [
  [2, 1, 2],
  [1, 2, 1],
  [2, 1, 2],
];

var data1 = [
  [1, 2, 3],
  [5, 6, 7],
  [7, 8, 9],
];

var sum = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

var rows = data.length;
var colums = data[0].length;

for (var i = 0; i < rows; i++) {
  for (var j = 0; j < colums; j++) {
    sum[i][j] = data[i][j] + data1[i][j];
  }
}
console.log(sum);
