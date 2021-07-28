var data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
];

var rows = data.length;
var cols = data[0].length;

for (var i = 0; i < cols; i++) {
  var result = "";
  for (var j = 0; j < rows; j++) {
    result += data[j][i] + " ";
  }

  console.log(result);
}
