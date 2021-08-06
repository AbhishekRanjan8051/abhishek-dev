function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  for (var a = 1; a <= testCase; a++) {
    
    var data = newInput[a].trim().split("");
    console.log("data:", data);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`1
  4 4
  ebcd
  fghr
  aaaa
  bbbb`); //write test case here
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
