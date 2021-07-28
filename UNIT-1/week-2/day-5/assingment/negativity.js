function runProgram(input) {
  var newInput = input.split("\n");
  var data = newInput[1].split(" ").map(Number);
  var n = data.length;
  var count = 0;

  for (var i = 0; i < n; i++) {
    if (data[i] < 0) {
      count++;
    }
  }
  console.log(count);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`5
-3 0 -5 9 8`); // put test case here
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
