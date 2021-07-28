function runProgram(input) {
  var newInput = input.split("\n");
  var data = newInput[1].split(" ").map(Number);
  var n = data.length;
  var result = "";

  for (var i = n - 1; i >= 0; i--) {
    result += data[i] + " ";
  }
  console.log(result);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`11
1 1 1 1 1 1 1 0 0 -4 -31`); // put test case here
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
