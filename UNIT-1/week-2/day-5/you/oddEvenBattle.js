function runProgram(input) {
  var newInput = input.split("\n");
  var data = newInput[1].split(" ").map(Number);
  var n = data.length;
  var even = 0;
  var odd = 0;
  var result = "";

  for (var i = 0; i < n; i++) {
    if (data[i] % 2 == 0) {
      even += data[i];
    } else if (data[i] % 2 != 0) {
      odd += data[i];
    }
  }
//   console.log(even);
//   console.log(odd);
    if (even > odd) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`4
1 2 3 4`); // put test case here
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
