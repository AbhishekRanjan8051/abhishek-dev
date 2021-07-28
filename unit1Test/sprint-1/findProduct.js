/*Given 5 values A, B, C, D, and E, find the product of those 5 values.

Input = 1 2 3 4 5
Output = 120
*/

function runProgram(input) {
  var data = input.split(" ");
  var A = Number(data[0]);
  var B = Number(data[1]);
  var C = Number(data[2]);
  var D = Number(data[3]);
  var E = Number(data[4]);

  var result = A * B * C * D * E;

  console.log(result);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`1 2 3 4 5`); //write test case here
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
