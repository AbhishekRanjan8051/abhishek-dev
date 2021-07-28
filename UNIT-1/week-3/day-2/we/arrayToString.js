function runProgram(input) {
  var newinput = input.split("\n");
  var data = newinput[1].split(" ").map(Number);
  var n = data.length;
  var result = "";

  for (var i = 0; i < n; i++) {
    if (data[i] <= 0) {
      result += 0;
    } else {
      result += data[i];
    }
  }
  console.log(result);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`5
2 -4 6 8 -9`);
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
