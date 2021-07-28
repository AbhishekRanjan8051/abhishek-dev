function runProgram(input) {
  var data = input;
  var result = "";
  var count = 0;
  var temp = data[0];

  for (var i = 0; i < data.length; i++) {
    var subs = "";
    for (var j = 1; j < data.length; j++) {
      subs += data[j];
      if (subs[i] == subs[j + 1] && subs[0] == subs[subs.length - 1]) {
        result += subs.length + " ";
      }
    }
  }
  var maximum = result[0];
  for (var i = 0; i < result.length; i++) {
    if (result[i] > maximum) {
      max = result[i];
    }
  }
  console.log(result);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`ATTCGGGA`); //write test case here
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
