function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  for (var a = 1; a <= testCase; a++) {
    var data = newInput[2 * a].trim().split("").map(Number);
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
      sum += data[i];
      //   console.log(data[i]);
    }
    console.log(sum);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2
5
12 14 16 17 29
6
1 2 3 4 5 51`); //write test case here
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
