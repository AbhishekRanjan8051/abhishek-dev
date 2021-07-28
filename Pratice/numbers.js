function runProgram(input) {
    var n = Number(input);
    var count = 0;
  
    for (var i = 1; i <= n; i++) {
      var result = "";
  
      for (var j = 1; j <= n; j++) {
        count++;
        result = result + count + " ";
      }
      console.log(result);
    }
  }
  if (process.env.USERNAME === "abhis") {
    runProgram(`4`); // put test case here
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
  