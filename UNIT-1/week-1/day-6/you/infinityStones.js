function runProgram(input) {
  var newInput = input.split(" ");
  var a = Number(newInput[0]);
  var b = Number(newInput[1]);
  var c = Number(newInput[2]);
  var d = Number(newInput[3]);
  var e = Number(newInput[4]);
  var f = Number(newInput[5]);

  var result = b * 2 + c * 3 + d * 3 + e * 2 + f * 2 + a;

  console.log(result);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`1 2 3 4 5 6`); // put test case here
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
