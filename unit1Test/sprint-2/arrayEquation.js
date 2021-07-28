/*You are given a mathematical equation A * (X) + B * (Y) = Z, where X is the sum of even numbers in the array, and Y is the sum of odd numbers in the array, and A = 2 and B = 3 are constants.

Input = 5
        1 2 3 4 5
Output = 39
*/

function runProgram(input) {
  var A = 2;
  var B = 3;
  var newInput = input.split("\n");
  var data = newInput[1].split(" ").map(Number);
  var n = data.length;
  var X = 0;
  var Y = 0;

  for (var i = 0; i < n; i++) {
    if (data[i] % 2 == 0) {
      X += data[i];
    } else {
      Y += data[i];
    }
  }

  var Z = A * X + B * Y;
  console.log(Z);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`5
  1 2 3 4 5`);
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
