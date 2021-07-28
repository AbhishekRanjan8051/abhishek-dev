/*Given a value of X, find the final value of X, if X is multiplied by 7 twice.

Input = 6
Output = 294
*/

function runProgram(input) {
  var data = Number(input);

  var X = data * 7 * 7;

  console.log(X);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`6`); //write test case here
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
