function findExel(data) {
    var chars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  
    var num = 0;
  
    for (var i = 0; i < data.length; i++) {
      num = data[i].charCodeAt() - 64 + num * 26;
    }
    return num;
  }
  
  function runProgram(input) {
    var newInput = input.split("\n");
  
    var testCase = +newInput[0];
  
    for (var a = 1; a <= testCase; a++) {
      var data = newInput[a].trim().split("");
  
      var final = findExel(data);
      console.log(final);
    }
  }
  if (process.env.USERNAME === "abhis") {
    runProgram(`3
    A
    AB
    ZY`); //write test case here
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