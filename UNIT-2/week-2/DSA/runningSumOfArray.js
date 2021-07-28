function runProgram(input) {
  var newInput = input.split("\n");
  var testCase = +newInput[0];

  for (var a = 1; a <= testCase; a++) {
    var data = newInput[2 * a].trim().split(" ").map(Number);

    var sum = 0;

    var result = "";

    for (var i = 0; i < data.length; i++) {
      sum += data[i];
      result += sum + " ";
    }

    console.log(result);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`1
  5
  1 2 3 4 5`); //write test case here
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
