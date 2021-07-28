function runProgram(input) {
  var newInput = input.split(" ").map(Number);
  var n = newInput.length;
  var N = newInput.length + 1;
  var sum = 0;
  var totalSum = (N * (N + 1)) / 2;

  for (var i = 0; i < n; i++) {
    sum += newInput[i];
  }
  var missing = totalSum - sum;
  console.log(missing);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`4 5 1 3`); // put test case here
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
