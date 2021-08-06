function power(x, y) {
  if (y == 0) {
    return 1;
  } else if (y % 2 == 0) {
    return power(x, parseInt(y / 2, 10)) * power(x, parseInt(y / 2, 10));
  } else {
    return x * power(x, parseInt(y / 2, 10)) * power(x, parseInt(y / 2, 10));
  }
}

function runProgram(input) {
  var data = input.split(" ").map(Number);
  let x = +data[0];
  let y = +data[1];
//   console.log("data:", data);
  var output = power(x, y);
  console.log(output)
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2 4`); //write test case here
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
