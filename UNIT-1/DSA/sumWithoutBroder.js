function sum_without_broder(matrix, row, col) {
  var sum = 0;

  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      if (i != 0 && j != 0 && i != row - 1 && j != col - 1) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  var j = 1;
  for (var a = 1; a <= testCase; a++) {
    var [row, col] = newInput[j++].trim().split(" ").map(Number);
    var arr = [];
    // console.log(row, col);
    for (var b = 0; b < row; b++) {
      arr.push(newInput[j++].trim().split(" ").map(Number));
    }
    // console.log(arr);
    var result = sum_without_broder(arr, row, col);
    console.log(result);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2
      3 4
      1 2 3 4
      4 5 6 5
      7 8 9 9
      3 3
      1 2 3
      4 5 6
      7 8 9`); //write test case here
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
