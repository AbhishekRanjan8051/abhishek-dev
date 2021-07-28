function runProgram(input) {
  var data = input;
  var result = "";
  var output = "";

  for (var i = data.length - 1; i >= 0; i--) {
    output += data[i];
  }
  //   console.log(output);

  if (data != output) {
    result = "No";
  } else {
    result = "Yes";
  }
  console.log(result);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`12`); //write test case here
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
