function runProgram(input) {
  var n = Number(input);
  var x = n + 1 - n;
  var y = 2 * n;

  for (var i = 1; i <= n; i++) {
    var result = "";
    for (var j = 1; j <= 2 * n; j++) {
      if (j == x) {
        result += "\\";
      } else if (j == y) {
        result += "/";
      } else {
        result += " ";
      }
    }
  }
  x++;
  y--;
  console.log(result + result);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`10`); //write test case here
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
