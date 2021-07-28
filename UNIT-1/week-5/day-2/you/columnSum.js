var data = [
  [1, 2, 3],
  [5, 6, 7],
  [7, 8, 9],
  //13  16 19  
];

var colums = data[0].length;

for (var i = 0; i < data.length; i++) {
  var sum = 0;
  for (var j = 0; j < colums; j++) {
    sum += data[j][i];
  }
  console.log(sum);
}
