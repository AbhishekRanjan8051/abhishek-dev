function runProgram(input) {
  var data = input;
  var n = data.length;
  var result = "";

  for (var i = n - 1; i >= 0; i--) {
    result += data[i];
  }
  console.log(result);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`masaischool`);
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
