/*You are given an array A of size N.

You have to modify the array such that all the values, at even indexes are incremented by 5, and all the values at the odd indexes are incremented by 7.

Find the sum of all the elements of the modified array.

Note: The indexing in the array starts from 0.

Input = 5
      1 2 3 4 5
Output = 44
*/

function runProgram(input) {
  var newInput = input.split("\n");
  var data = newInput[1].split(" ").map(Number);
  var n = data.length;
  var even = 0;
  var odd = 0;
  //var result = 0;

  for (var i = 0; i < n; i++) {
    if (i % 2 == 0) {
      even += data[i] + 5;
    } else {
      odd += data[i] + 7;
    }
  }
  var final = even + odd;
  console.log(final);
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
