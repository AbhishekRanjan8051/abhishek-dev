function nextGreaterEven(data) {
  let stack = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i] < data[i + 1]) {
      if (data[i + 1] % 2 == 0) {
        stack.push(data[i]);
      }
    }
  }
  return stack;
}
function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  for (let a = 1; a <= testCase; a++) {
    let data = newInput[2 * a].trim().split(" ").map(Number);
    // console.log('data:', data)

    var sum = 0;
    var output = nextGreaterEven(data);
    for (let i = 0; i < output.length; i++) {
      sum += output[i];
    }
    console.log(sum);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`1
  5
  2 4 5 8 3`); //write test case here
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
