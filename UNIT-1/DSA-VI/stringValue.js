function runProgram(input) {
  var data = input;

  var sum = 0;

  for (var i = 0; i < data.length; i++) {
    sum += data.charCodeAt(i) - 96;
  }
  console.log(sum);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`aba`); //write test case here
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
