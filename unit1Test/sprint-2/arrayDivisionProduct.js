/*You are given an array A of size N.

You have to divide the entire array into pairs of two each, and find the sum of each pair.

After that, find the product of all the pairs after dividing the array.
Note: The value ofNwill always be even.

Input = 6
      1 2 3 4 5 6
Output = 231
*/

function runProgram(input) {
  var newInput = input.split("\n");
  var data = newInput[1].split(" ").map(Number);
  var n = data.length;
  var multiply = 1;

  for (var i = 0; i < n; i = i + 2) {
    var add = 0;
    add += data[i] + data[i + 1];
    multiply = multiply * add;
  }

  console.log(multiply);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`6
1 2 3 4 5 6`);
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
