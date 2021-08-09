function findPossibleWays(data) {
  if (data == 0) {
    return 1;
  } else if (data < 0) {
    return 0;
  } else {
    return findPossibleWays(data - 4) + findPossibleWays(data - 8);
  }
}

function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  for (let a = 1; a <= testCase; a++) {
    let data = +newInput[a];
    // console.log('data:', data)

    let output = findPossibleWays(data);
    console.log(output);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2
  12
  28`); //write test case here
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
