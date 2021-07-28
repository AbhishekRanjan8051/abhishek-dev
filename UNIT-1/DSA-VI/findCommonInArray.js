/*You are given 2 arrays of N integers. Your task is to write a program that finds the one integer which is common in both arrays.
Note: There is always one integer common in both arrays.

Input = 3
      4 5 7
      9 2 5
Output = 5
*/

function findCommon(data, data1) {
  var result = [];

  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data1.length; j++) {
      if (data[i] == data1[j]) {
        result.push(data[i]);
      }
    }
  }
  return result;
}

function runProgram(input) {
  var newInput = input.split("\n");

  var data = newInput[1].split(" ").map(Number);
  var data1 = newInput[2].split(" ").map(Number);

  var common = findCommon(data, data1) + " ";

  console.log(common);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`3
4 5 7
9 8 5`); //write test case here
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
