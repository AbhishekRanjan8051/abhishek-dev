/*Given an array, A, of N integers, print the smallest and largest element present in the array

Input = 4
       -2 0 8 4
  Output = -2
            8
     */

function runProgram(input) {
  var newInput = input.split("\n");
  var data = newInput[1].split(" ").map(Number);
  var temp = data[0];
  var result = "";

  for (var i = 0; i < data.length; i++) {
    if (data[i] <= temp) {
      temp = data[i];
      result = data[i];
    }
  }
  console.log(result);
  for (var i = 0; i < data.length; i++) {
    if (data[i] > temp) {
      temp = data[i];
      result = data[i];
    }
  }
  console.log(result);
}

if (process.env.USERNAME === "abhis") {
  runProgram(`4
2 0 8 -1`); //write test case here
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
