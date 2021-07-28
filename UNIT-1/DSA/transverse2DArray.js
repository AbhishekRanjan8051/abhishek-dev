function runProgram(input) {
  var newInput = input.split("\n");

  var rc = newInput[0].split(" ").map(Number);

  var r = rc[0];
  var c = rc[1];
  // console.log(c);

  var data = newInput.slice(1).map(function (arr) {
    return arr.split(" ").map(Number);
  });

  // console.log(data);
  var result = "";

  for (var i = 0; i < c; i++) {
    for (var j = r - 1; j >= 0; j--) {
      result += data[j][i] + " ";
    }
  }
  console.log(result);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`4 3
1 8 9
2 7 10
3 6 11
4 5 12`); //write test case here
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
