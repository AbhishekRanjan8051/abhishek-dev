function disxtinct(data, k) {
  var result = "";

  for (var i = 0; i < k.length; i++) {}
}

function runProgram(input) {
  var newInput = input.split("\n");

  var [l, k] = newInput[0].split(" ").map(Number);

  var data = newInput[1].trim().split("");
  var res = "";
  for (var i = 0; i < data.length; i++) {
    var result = "";
    for (var j = i; j < data.length; j++) {
      result += data[j];
    }
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`4 2
  abcc`); //write test case here
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
