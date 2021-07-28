function runProgram(input) {
  var data = input;
  var n = input.length;  
  var count = 0;

  for (var i = 0; i < n; i++) {
    if (
      data[i] != "a" &&
      data[i] != "e" &&
      data[i] != "i" &&
      data[i] != "o" &&
      data[i] != "u"
    ) {
        count++;
    } 
  }
  console.log(count);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`masaischool`);
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
