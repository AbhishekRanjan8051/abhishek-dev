function table(data) {
  var result = "";

  for (var i = 1; i <= 10; i++) {
    result += data * i;
    if (i != 10) {
      result += " ";
    }
  }
  return result;
}

function runProgram(input) {
  var newInput = input.split("\n");
  var testCase = Number(newInput[0]);

  for (var i = 1; i <= testCase; i++) {
    var data = newInput[i];

    var printTable = table(data);

    console.log(printTable);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2
2
3`); //write test case here
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
