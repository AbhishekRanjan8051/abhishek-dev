function runProgram(input) {
  var a = Number(input);

  for (var i = 0; i < a; i++) {
    var result = "";
    for (var j = 0; j < a; j++) {
      if (i == a - 1 || j == 0) {
        result += "* ";
      } else {
        result += " ";
      }
    }
    console.log(result);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`5`);
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
