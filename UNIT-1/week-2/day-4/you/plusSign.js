function runProgram(input) {
  var n = Number(input);
  for (var i = 1; i <= n; i++) {
    var result = "";
    for (var j = 1; j <= n + 1; j++) {
      if (j !== n + 1) {
        result = result + " ";
      } else {
        result += "*";
      }
    }

    console.log(result);
  }
  var result = "";
  for (var i = 1; i <= n * 2 + 1; i++) {
    result += "*";
  }
  console.log(result);
  for (var i = 1; i <= n; i++) {
    var result = "";
    for (var j = 1; j <= n + 1; j++) {
      if (j !== n + 1) {
        result += " ";
      } else {
        result += "*";
      }
    }
    console.log(result);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2`); // put test case here
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
