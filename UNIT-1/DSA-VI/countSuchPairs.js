function runProgram(input) {
  var newInput = input.split("\n");

  var line1 = newInput[0].split(" ").map(Number);

  var K = +line1[1];
  var count = 0;

  var data = newInput[1].split(" ").map(Number);

  for (var i = 0; i < data.length; i++) {
    for (var j = i + 1; j < data.length; j++) {
      if (data[i] + data[j] == K) {
        count++;
      }
    }
  }
  console.log(count);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`5 9
3 0 6 2 7`); //write test case here
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
