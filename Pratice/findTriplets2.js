function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = newInput[0];

  for (var i = 1; i <= testCase; i++) {
    var LM = newInput[i * 2 - 1].trim().split(" ").map(Number);

    var M = +LM[1];
    // console.log(M);

    var data = newInput[i * 2].trim().split(" ").map(Number);

    var count = 0;

    for (var j = 0; j < data.length; j++) {
      for (var k = j + 1; k < data.length; k++) {
        for (var l = k + 1; l < data.length; l++) {
          if (data[j] - data[k] + data[l] == M) {
            count++;
          }
        }
      }
    }
    console.log(count);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2
    3 0
    1 2 3
    5 4
    3 2 3 1 5`); //write test case here
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
