function runProgram(input) {
  var newInput = input.split("\n");

  var data = newInput[1].trim().split(" ").map(Number);

  for (var i = 0; i < data.length; i++) {
    var result = [];
    for (var j = i; j < data.length; j++) {
      result.push(data[j]);

      // for (var k = 0; k < result[result.length]; k++){

      // }
    }  
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`3
  1 2 3`); //write test case here
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
