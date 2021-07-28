/*You are given a number X. Find the value of X, if

1. X is multiplied by 3

2. 10 is added to the new value of X.

Input = 3
Output = 19
*/

function runProgram(input) {
  var data = Number(input);

  var X = data * 3 + 10;

  console.log(X);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`3`); //write test case here
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
