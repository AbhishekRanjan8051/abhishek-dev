function runProgram(input) {
  var newInput = input.split("\n");
  var arr_rc = newInput[0].split(" ").map(Number);

  var rows1 = +arr_rc[0];
  var cols1 = +arr_rc[1];

  var rows2 = +arr_rc[2];
  var cols2 = +arr_rc[3];

  var matrixOne = newInput.slice(1, rows1 + 1).map(function (row) {
    return row.split(" ").map(Number);
  });

  var matrixTwo = newInput.slice(rows1 + 1).map(function (row) {
    return row.split(" ").map(Number);
  });

  for (var i = 0; i < rows1; i++) {
    var result = "";
    for (var j = 0; j < cols1; j++) {
      result += matrixOne[i][j] + matrixTwo[i][j] + " ";
    }
    if (rows1 == rows2 && cols1 == cols2) {
      console.log(result);
    }
  }
  if (rows1 != rows2 || cols1 != cols2) {
    console.log(-1);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2 2 2 2
1 2
3 4
2 3
4 5`); //write test case here
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
