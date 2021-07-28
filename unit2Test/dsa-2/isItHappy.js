function runProgram(input) {
  var newInput = input.split("\n");
  var testCase = +newInput[0];

  for (var a = 1; a <= testCase; a++) {
    var data = newInput[a].split("").map(Number);
    // console.log(data);
    var sum = 0;
    var sum1 = 0;

    for (var i = 0; i < data.length; i++) {
      sum += data[i] ** 2;
    }
    console.log(sum);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`3
19
2
312082396
`); //write test case here
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
