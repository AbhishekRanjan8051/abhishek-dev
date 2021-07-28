function runProgram(input) {
  var n = Number(input);

  for (var i = 0; i < n; i++) {
    var result = "";
    for (var j = 0; j < n; j++) {
        
    }
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2`);
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
