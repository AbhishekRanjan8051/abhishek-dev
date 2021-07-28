function runProgram(input) {
  var newInput = input.split(" ");

  var a = Number(newInput[0]);
  var b = Number(newInput[1]);
  var result = "";

  for (var i = a; i <= b; i = i * 2) {
    result = result + i + " ";
  }
  console.log(result);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`4 10`); // put test case here
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
