function runProgram(input) {
  var N = Number(input);

  for (var i = 1; i <= 10; i++) {
    console.log(`${N} X ${i} = ${N * i}`);
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
