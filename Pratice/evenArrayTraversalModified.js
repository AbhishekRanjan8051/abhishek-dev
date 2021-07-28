function runProgram(input) {
  var newInput = input.split("\n");

  var n = +newInput[0];

  var data = newInput[1].trim().split(" ").map(Number);

  var result = "";

  for (var i = 0; i < n; i++) {
    if (i % 2 == 0) {
      if (data[i] % 2 == 0) {
        result += i + " " + data[i] + "\n";
      }
    }
  }
  console.log(result);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`5
  2 1 4 3 5`); //write test case here
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
