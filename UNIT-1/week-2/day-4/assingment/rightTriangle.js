function runProgram(input) {
  var n = Number(input);

  for (var i = 1; i <= n; i++) {
    var result = "";
    for (var j = 1; j <= n - i; j++) {
      result = result + "  ";
    }

    for (var k = 1; k <= i; k++) {
      result = result + "* ";
    }
    console.log(result);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`5`); // put test case here
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
