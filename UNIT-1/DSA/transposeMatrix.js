function runProgram(input) {
  var newInput = input.split("\n");

  var rc = newInput[0].split(" ").map(Number);

  var r = rc[0];
  var c = rc[1];

  var data = newInput.slice(1).map(function (matrix) {
    return matrix.split(" ").map(Number);
  });
  // console.log(data);

  for (var i = 0; i < c; i++) {
    var result = "";
    for (var j = 0; j < r; j++) {
      result += data[j][i] + " ";
    }
    console.log(result);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`4 4
0 0 0 0
1 1 1 1
2 2 2 2
3 3 3 3`); //write test case here
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
