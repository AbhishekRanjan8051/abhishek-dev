function runProgram(input) {
  var newInput = input.split("\n");

  var xy = newInput[0].trim().split(" ").map(Number);
  var x = +xy[0];
  var y = +xy[1];
  //   console.log(y);

  var data = newInput.slice(1).map(function (arr) {
    return arr.split(" ").map(Number);
  });

  var sum = 0;
  for (var i = 0; i < x; i++) {
    for (var j = 0; j < y; j++) {
      if (data[i][j] % 3 == 0) {
        sum += data[i][j];
      }
    }
  }
  console.log(sum);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2 3
3 8 6
5 8 6`); //write test case here
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
