function runProgram(input) {
  var data = input;
  var n = data.length;
  var result = "";
  var arr = data[0];
  var count = 1;

  for (var i = 1; i < n; i++) {
    if (data[i] == arr) {
      count++;
    } else {
      result += arr + count;
      count = 1;
      arr = data[i];
    }
  }
  result += arr + count;
  console.log(result);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`aaabbbbcc`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
