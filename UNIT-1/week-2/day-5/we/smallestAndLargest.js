function runProgram(input) {
  var newInput = input.split("\n");
  var data = newInput[1].split(" ").map(Number);
  var n = data.length;
  var min = 0;
  var max = 0;

  for (var i = 0; i < n; i++) {
    if (data[i] <= min) {
      min = data[i];
    } else if (data[i] >= max) {
      max = data[i];
    }
  }
  console.log(min);
  console.log(max);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`4
-2 0 8 4`); // put test case here
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
