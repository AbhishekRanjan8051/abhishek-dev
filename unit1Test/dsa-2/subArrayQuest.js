function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  for (var a = 1; a <= testCase; a++) {
    var data = newInput[2 * a].trim().split(" ").map(Number);
    var count = 0;

    for (var i = 0; i < data.length; i++) {
      var result = [];

      for (var j = i; j < data.length; j++) {
        result.push(data[j]);
        // console.log(result);
        if (result[0] % 2 != 0 && result[result.length - 1] % 2 != 0) {
          count++;
        }
      }
    }
    console.log(count);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`1
      5
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
