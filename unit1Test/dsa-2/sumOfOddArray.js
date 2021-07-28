function runProgram(input) {
  var newInput = input.split("\n");
  var testCase = Number(newInput[0]);

  for (var a = 1; a <= testCase; a++) {
    var data = newInput[2 * a].trim().split(" ").map(Number);
    var sum = 0;

    var result = [];
    for (var j = 0; j < data.length; j++) {
      // console.log(result);
      if (data[j] % 2 == 1) {
        result.push(data[j]);
      }
    }

    for (var k = 0; k < result.length; k++) {
      sum += result[k];
    }
    console.log(sum);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2
      3
      1 2 3
      5
      2 2 2 2 1`); //write test case here
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
