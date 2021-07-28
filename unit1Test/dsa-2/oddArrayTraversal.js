function oddArray(data) {
  var n = data.length;
  var result = "";

  for (var i = 0; i < n; i++) {
    if (i % 2 != 0) {
      result += data[i] + " ";
    }
  }
  return result;
}

function runProgram(input) {
  var newInput = input.split("\n");

  var data = newInput[1].trim().split(" ").map(Number);

  var final = oddArray(data);

  console.log(final);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`5
  1 2 3 4 5`); //write test case here
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
