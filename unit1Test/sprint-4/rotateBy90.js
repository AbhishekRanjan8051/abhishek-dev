function runProgram(input) {
  var newInput = input.split("\n");
  var n = +newInput[0];

  var mat = newInput.slice(1).map(function (arr) {
    return arr.split(" ").map(Number);
  });
  //   console.log(mat);

  for (var i = n - 1; i >= 0; i--) {
    var result = "";
    for (var j = 0; j < n; j++) {
      result += mat[j][i] + " ";
    }
    console.log(result);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8`); //write test case here
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
