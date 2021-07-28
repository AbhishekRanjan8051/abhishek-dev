function runProgram(input) {
  var newInput = input.split("\n");
  var data = newInput[1].split(" ").map(Number);

  var result = "";

  var dataSort = data.sort(function (a, b) {
    return a - b;
  });
  // console.log(dataSort);

  var final = dataSort.join(" ");

  console.log(final);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`5
3 5 0 9 8`); //write test case here
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
