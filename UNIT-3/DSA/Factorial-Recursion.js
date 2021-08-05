function Factorial_Recursion(n) {
  // var result = 1;

  // for (var i = 1; i <= N; i++) {
  //   result = result * i;
  // }
  // return result;
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * Factorial_Recursion(n - 1);
  }
}
function runProgram(input) {
  var data = +input;

  var output = Factorial_Recursion(data);
  console.log(output);
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
