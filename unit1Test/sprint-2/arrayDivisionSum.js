/*You are given an array A of size N.

You have to divide the entire array into pairs of two each, and find the product of each pair.

After that, find the sum of all the pairs after dividing the array.

Refer the sample I/O for better understanding.

Note: The value of N will always be even.

Input = 6
    1 2 3 4 5 6
Output = 44
*/
function runProgram(input) {
  var newInput = input.split("\n");
  var data = newInput[1].split(" ").map(Number);
  var n = data.length;
  var sum = 0;

  for (var i = 0; i < n; i = i + 2) {
    var product = 1;
    product = data[i] * data[i + 1];
    sum = product + sum;
  }
  console.log(sum);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`6
1 2 3 4 5 6`); //write test case here
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
