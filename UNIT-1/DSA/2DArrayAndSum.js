function runProgram(input) {
  var newInput = input.split("\n");

  var [row, col, sum] = newInput[0].trim().split(" ").map(Number);
  //   console.log(row, col, sum);
  var count = 0;

  var mat = newInput.slice(1).map(function (item) {
    return item.trim().split(" ").map(Number);
  });
  //   console.log(mat);

  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      if (j <= col - 3) {
        // this is for horizontal;
        if (mat[i][j] + mat[i][j + 1] + mat[i][j + 2] == sum) {
          count++;
        }
      }
      if (i <= row - 3) {
        if (mat[i][j] + mat[i + 1][j] + mat[i + 2][j] == sum) {
          count++;
        }
      }
      if (i <= row - 3 && j <= col - 3) {
        if (mat[i][j] + mat[i + 1][j + 1] + mat[i + 2][j + 2] == sum) {
          count++;
        }
      }
      if (i >= 2 && j <= col - 3) {
        if (mat[i][j] + mat[i - 1][j + 1] + mat[i - 2][j + 2] == sum) {
          count++;
        }
      }
    }
  }

  console.log(count);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`3 3 6
  3 2 1
  2 2 2
  1 5 1`); //write test case here
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
