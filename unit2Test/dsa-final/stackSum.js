function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  var S = 0;

  var stack = [];

  for (var a = 1; a <= testCase; a++) {
    var data = newInput[a].trim().split(" ").map(Number);
    // console.log('data:', data)

    if (data[0] == 1) {
      stack.push(data[1]);
    }
    if (data[0] == 2) {
      if (stack.length > 0) {
        S += stack[stack.length - 1];
        stack.pop();
      } else {
        S = S - 1;
      }
    }
  }
  console.log(S);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`5
  1 2
  1 3
  2 
  2
  2`); //write test case here
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
