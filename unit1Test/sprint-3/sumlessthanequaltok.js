function runProgram(input) {
  var newInput = input.split("\n");
  var firstLine = newInput[0].split(" ").map(Number);
  var K = Number(firstLine[1]);

  var data = newInput[1].split(" ").map(Number);
  var n = data.length;

  var sum = 0;

  for (var i = 0; i < n; i++) {
    if (data[i] <= K) {
      sum += data[i];
    }
  }
  console.log(sum);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`4 2
1 2 3 4`); //write test case here
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
