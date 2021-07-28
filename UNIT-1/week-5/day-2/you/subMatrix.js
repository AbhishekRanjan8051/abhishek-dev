var data = [
  [1, 2, 3],
  [5, 6, 7],
  [7, 8, 9],
];

var rows = data.length;
var cols = data[0].length;

var stratRow = 1;
var stratCol = 1;

var endRow = 2;
var endCol = 2;

for (var i = stratRow; i < rows; i++) {
  var result = "";
  for (var j = stratCol; j < cols; j++) {
    if (i >= stratRow && i <= endRow && j >= stratCol && j <= endCol) {
      result += data[i][j] + " ";
    }
  }
  console.log(result);
}
