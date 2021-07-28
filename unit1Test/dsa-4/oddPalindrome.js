function runProgram(input) {
  var newInput = input.split("\n");

  var n = +newInput[0];

  var data = newInput[1].trim().split("");

  //   console.log(data);
  var result = "";

  for (var i = 0; i < data.length; i++) {
    if (i % 2 != 0) {
      result += data[i];
    }
  }
  var output = result;
  var palindrome = "";
  for (var j = output.length - 1; j >= 0; j--) {
    palindrome += output[j];
  }
  if (output === palindrome) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`6
abcdeb`); //write test case here
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
