function FibonacciRecursion(n) {
  if (n <= 1) {
    return n;
  } else {
    return FibonacciRecursion(n - 1) + FibonacciRecursion(n - 2);
  }
}

function runProgram(input) {
  var data = +input;
  // console.log('data:', data)

  var output = FibonacciRecursion(data);
  console.log(output);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`4`); //write test case here
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
