function runProgram(input) {
  var newInput = input.split("\n");

  var data = newInput[1].split(" ");
  var count = 0;
  var result = [];

  for (var i = 0; i < data.length; i++) {
    if (
      data[i] == "a" ||
      data[i] == "e" ||
      data[i] == "i" ||
      data[i] == "o" ||
      data[i] == "u"
    ) {
      result = result.push(data[i]);
    }
    console.log(result);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`4
uuuu`); //write test case here
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
