function runProgram(input) {
  var newInput = input.split("\n");

  var [row, col] = newInput[0].trim().split(" ").map(Number);

  var data = newInput.slice(1).map(function (items) {
    return items.trim().split(" ").map(Number);
  });
  //   console.log(data[0][1]);
  var result = "";

  for (var i = 0; i < row; i++) {
    if (i % 2 == 0) {
      for (var j = col - 1; j >= 0; j--) {
        result += data[i][j] + " ";
      }
    } else {
      for (var j = 0; j < col; j++) {
        result += data[i][j] + " ";
      }
    }
  }
  console.log(result);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`5 5
4 7 1 1 7
8 9 9 6 1
6 4 9 5 1
7 7 4 7 7
8 6 2 5 5`); //write test case here
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
