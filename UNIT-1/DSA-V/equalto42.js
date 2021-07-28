/*You are given an array of N integers. Output "Yes" if 42 is present in array, else print "No".

  Input = 5
          3 7 0 9 8
   Output = No
   */

function runProgram(input) {
  var newInput = input.split("\n");
  var data = newInput[1].trim().split(" ").map(Number);
  var result = "";

  for (var i = 0; i < data.length; i++) {
    if (data[i] == 42) {
      result = "Yes";
      break;
    } else {
      result = "No";
    }
  }
  console.log(result);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`5
  3 7 42 9 8`); //write test case here
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
