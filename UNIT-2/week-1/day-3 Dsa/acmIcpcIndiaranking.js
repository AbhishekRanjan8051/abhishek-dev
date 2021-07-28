function runProgram(input) {
  var newInput = input.trim().split("\n");

  //   console.log(newInput);

  for (var i = 1; i < newInput.length; i++) {
    if (newInput[i] == "India") {
      console.log(i);
      break;
    }
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`5
Russia
USA
Japan
China
India`); //write test case here
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
