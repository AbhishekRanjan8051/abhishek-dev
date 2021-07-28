/*Given three integers A, B and C. Find the value of the expression

Expression = A * (B + C)

Input = 3 4 5
Output = 27
*/

function runProgram(input) {
  var data = input.split(" ");
  var A = Number(data[0]);
  var B = Number(data[1]);
  var C = Number(data[2]);

  var result = A * (B + C);

  console.log(result);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`3 4 5`); //write test case here
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
