function runProgram(input) {
  var newInput = input.split(" ");
  var a = Number(newInput[0]);
  var b = Number(newInput[1]);
  var c = Number(newInput[2]);

  if (a ** 2 + b ** 2 == c ** 2) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`3 4 5`); // put test case here
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
