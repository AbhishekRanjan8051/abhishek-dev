function runProgram(input) {
  var newInput = input.split("\n");

  var [row, col] = newInput[0].trim().split(" ").map(Number);
  //   console.log(row, col);
  var count = 0;

  var mat = newInput.slice(1).map(function (items) {
    return items.trim().split("");
  });

  //   console.log(mat);

  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      if (i <= row - 4) {
        if (
          mat[i][j] == "s" &&
          mat[i + 1][j] == "a" &&
          mat[i + 2][j] == "b" &&
          mat[i + 3][j] == "a"
        ) {
          count++;
        }
      }

      if (j <= col - 4) {
        if (
          mat[i][j] == "s" &&
          mat[i][j + 1] == "a" &&
          mat[i][j + 2] == "b" &&
          mat[i][j + 3] == "a"
        ) {
          count++;
        }
      }
      if (i <= row - 4 && j <= col - 4) {
        if (
          mat[i][j] == "s" &&
          mat[i + 1][j + 1] == "a" &&
          mat[i + 2][j + 2] == "b" &&
          mat[i + 3][j + 3] == "a"
        ) {
          count++;
        }
      }
      if (i >= 3 && j <= col - 4) {
        if (
          mat[i][j] == "s" &&
          mat[i - 1][j + 1] == "a" &&
          mat[i - 2][j + 2] == "b" &&
          mat[i - 3][j + 3] == "a"
        ) {
          count++;
        }
      }
    }
  }
  console.log(count);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`5 5
safer
amjad
babol
aaron
songs`); //write test case here
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
