function runProgram(input) {
  var data = input.split(" ").map(Number);
  var N = +data[0];
  var M = +data[1];
  var result = "";

  for (var i = 0; i <= N && i <= M; i++) {
    if (N % i == 0 && M % i == 0) {
      result = i;
    }
  }
  console.log(result);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`51 68`); //write test case here
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
