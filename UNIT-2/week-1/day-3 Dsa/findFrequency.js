function runProgram(input) {
  var newInput = input.split("\n");

  var data = newInput[1].trim().split("").sort();

  var obj = {};

  for (var i = 0; i < data.length; i++) {
    if (obj[data[i]] == undefined) {
      obj[data[i]] = 1;
    } else {
      var result = obj[data[i]];
      obj[data[i]] = result + 1;
    }
  }
  for (key in obj) {
    var final = key + "-" + obj[key];
    console.log(final);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`4
aman`); //write test case here
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
