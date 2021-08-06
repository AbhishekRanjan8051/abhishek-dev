function find(decimalNumber) {
  if (decimalNumber == 0) {
    return 0;
  } else {
    return (decimalNumber % 2) + 10 * find(parseInt(decimalNumber / 2));
  }
}
function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  for (var a = 1; a <= testCase; a++) {
    let data = +newInput[a];
    // console.log("data:", data);

    var output = find(data);
    console.log(output);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`4
  53629
  19446
  97285
  52431`); //write test case here
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
