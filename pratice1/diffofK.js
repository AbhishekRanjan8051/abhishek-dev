function Difference(data, k) {
    var start = 0;
    var end = 1;
    var temp = false;
  
    while (start < data.length && end < data.length) {
      if (start != end && data[end] - data[start] == k) {
        temp = true;
        break;
      } else if (data[end] - data[start] < k) {
        end++;
      } else {
        start++;
      }
    }
  
    if (temp == true) {
      return "Yes";
    } else {
      return "No";
    }
  }
  
  function runProgram(input) {
    var newInput = input.split("\n");
  
    var testCase = +newInput[0];
  
    for (var a = 1; a <= testCase; a++) {
      var [l, k] = newInput[2 * a - 1].trim().split(" ").map(Number);
  
      var data = newInput[2 * a].trim().split(" ").map(Number);
  
      var finalOutput = Difference(data, k);
  
      console.log(finalOutput);
    }
  }
  if (process.env.USERNAME === "abhis") {
    runProgram(`2
    5 3
    1 2 3 4 5
    5 8
    1 2 3 4 5 `); //write test case here
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
  