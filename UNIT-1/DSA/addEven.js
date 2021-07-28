/*You are given a number N, find sum of all even numbers which occur before N (inclusive of N if N is even)

Input = 8
Output = 20
*/

function runProgram(input) {
  var n = Number(input);
  var sum = 0;

  for (var i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  console.log(sum);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`8`); //write test case here
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
