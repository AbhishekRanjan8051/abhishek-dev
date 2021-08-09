function excelColumnNumber(data) {
  let columnNumber = 0;



  for (let i = 0; i < data.length; i++) {
    columnNumber = data[i].charCodeAt() - 64 + columnNumber * 26;
  }

  return columnNumber;
}

function runProgram(input) {
  var newInput = input.split("\n");

  let testCase = +newInput[0];

  for (var i = 1; i <= testCase; i++) {
    let data = newInput[i].trim().split("");

    let output = excelColumnNumber(data);
    console.log(output);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`3
  A
  AB
  ZY`); //write test case here
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
