function runProgram(input) {
  var newInput = input.split(" ");
  var a = Number(newInput[0]);
  var b = Number(newInput[1]);
  var c = Number(newInput[2]);
  if (a > b && a > c) {
    console.log(a);
  } else if (b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`13 1 5`); // put test case here
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
