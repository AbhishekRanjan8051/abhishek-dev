function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  var stack = [];

  for (var a = 1; a <= testCase; a++) {
    var data = newInput[a].trim().split(" ").map(Number);

    if (data[0] == 1) {
      if (stack.length == 0) {
        console.log("No Food");
      } else {
        console.log(stack[stack.length - 1]);
        stack.pop(data[1]);
      }
    }
    if (data[0] == 2) {
      stack.push(data[1]);
    }
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`6
1
2 5
2 7
2 9
1
1`); //write test case here
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
