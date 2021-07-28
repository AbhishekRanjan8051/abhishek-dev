function runProgram(input) {
  var year = Number(input);

  if (year % 100 == 0) {
    if (year % 400 == 0) {
      console.log("Leap Year");
    } else {
      console.log("Not a Leap Year");
    }
  } else {
    if (year % 4 == 0) {
      console.log("Leap Year");
    } else {
      console.log("Not a Leap Year");
    }
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2001`); // put test case here
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
