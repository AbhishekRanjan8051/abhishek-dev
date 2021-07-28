function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  for (var a = 1; a <= testCase; a++) {
    var LM = newInput[a * 2 - 1].trim().split(" ").map(Number);
    var M = +LM[1];

    // console.log(LM);
    var data = newInput[a * 2].trim().split(" ").map(Number);

    var count = 0;

    for (var i = 0; i < data.length; i++) {
      for (var j = i + 1; j < data.length; j++) {
        if ((data[i] + data[j]) % M != 0) {
          count++;
        }
      }
    }
    console.log(count);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2
  3 2
  1 3 2
  5 4
  3 2 2 1 5`); //write test case here
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
