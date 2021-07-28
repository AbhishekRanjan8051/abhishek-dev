function runProgram(input) {
  var N = Number(input);

  var result = (N * (N + 1)) / 2;

  console.log(result);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`3`); // put test case here
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
