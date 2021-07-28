function indexArray(data) {
  var n = data.length;
  var result = "";
  var isPresent = false;

  for (var i = 0; i < n; i++) {
    if (data[i] == 2 && i < n - 1) {
      isPresent = true;
      result += data[i + 1];
      break;
    }
  }
  if (!isPresent) {
    result += -1;
  }
  return result;
}

function runProgram(input) {
  var newInput = input.split("\n");
  var data = newInput[1].split(" ").map(Number);

  console.log(indexArray(data));
}
if (process.env.USERNAME === "abhis") {
  runProgram(`5
3 4 5 5 6`); //write test case here
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
