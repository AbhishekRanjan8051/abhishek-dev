function runProgram(input) {
    var newInput = input.split("\n");
    //   console.log(newInput.length);
    // var testCase = +newInput[0];
  
    for (var a = 1; a < newInput.length; ) {
      var n = +newInput[a];
  
      var data = newInput.slice(a + 1, a + 1 + n).map(function (el) {
        return el.trim().split(" ").map(Number);
      });
      // console.log(data);
  
      for (var i = n - 1; i >= 0; i--) {
        var result = "";
        for (var j = n - 1; j >= 0; j--) {
          result += data[i][j] + " ";
        }
        console.log(result);
      }
      a = a + n + 1;
    }
  }
  if (process.env.USERNAME === "abhis") {
    runProgram(`2
    3 
    1 2 3
    4 5 6
    7 8 9
    4
    1 2 3 4
    5 6 7 8
    9 0 1 2
    3 4 5 6`); //write test case here
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
  