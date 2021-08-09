function sumWithRecursionAgain(data) {
  if (data.length == 1) {
    return 0;
  } else {
    let sum = data.length;

    return Math.abs(data[1] - data[0]) + sumWithRecursionAgain(data.slice(1));
  }
}

function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  for (let a = 1; a <= testCase; a++) {
      var data = newInput[a * 2].trim().split(" ").map(Number);
      
      var output = sumWithRecursionAgain(data)
      console.log(output)
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2
  3
  1 5 2
  5
  3 5 6 1 8`); //write test case here
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
