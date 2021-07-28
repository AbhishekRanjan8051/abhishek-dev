function runProgram(input) {
  var data = Number(input);

  for (var i = 1; i <= data; i++) {
    var result = "";
    for (var j = 1; j <= data; j++) {
      if (i == j || i + j == data + 1) {
        result += "* ";
      } else {
        result += "  ";
      }
    }
    console.log(result);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`5`); //write test case here
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
