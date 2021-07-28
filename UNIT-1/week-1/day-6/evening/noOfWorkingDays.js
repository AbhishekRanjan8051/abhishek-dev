function runProgram(input) {
  var n = Number(input); // n = weeks
  var days = 6; // no. Of Working days Is 6 , beacuse Sunday is Holiday

  //No. of working days in weeks

  var result = n * days;

  console.log(result);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
