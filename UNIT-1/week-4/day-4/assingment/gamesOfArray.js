/*Pavan is very fond of numbers.He made an array of numbers of length N, and he wants to know the pattern after rotating it to the left by k times. He got confused in the middle since the array is very big can you help him to find the rotated array?

First line consists of two integers N and k separated by space,

Second line contains an array of N integers separated by space.

Input = 6 4
   1 2 5 4 0 6
Output = 0 6 1 2 5 4
*/

function runProgram(input) {
  var newInput = input.split("\n");
  var line1 = newInput[0].split(" ");
  var dataLength = line1[0];
  var l = line1[1];
  var k = l % dataLength;

  var data = newInput[1].split(" ").map(Number);

  var result = data.splice(0, k);

  for (var i = 0; i < l; i++) {
    data.push(result[i]);
  }
  var f = data.join(" ");

  console.log(f);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`6 4
1 2 5 4 0 6`); //write test case here
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
