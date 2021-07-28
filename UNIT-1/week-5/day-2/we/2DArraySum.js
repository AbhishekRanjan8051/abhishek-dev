var data = [
  [1, 2, 3], //6
  [5, 6, 7], //18
  [7, 8, 9], //24
];

var sum = 0;

for (var i = 0; i < data.length; i++) {
  for (var j = 0; j < data[i].length; j++) {
    sum += data[i][j];
  }
}

console.log(sum);
