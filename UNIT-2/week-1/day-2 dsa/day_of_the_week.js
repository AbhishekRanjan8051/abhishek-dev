function runProgram(input) {
    var newInput = input.split("\n");
  
    var day = newInput[0];
    var number = +newInput[1];
  
    var add = number % 7;
  
    var data = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var output = "";
  
    for (var a = 0; a < data.length; a++) {
      var result = "";
      //   console.log(data[1]);
      if (data[a] === day) {
        result += a + add;
        if (result < 7) {
          output = result;
          break;
        } else if (result >= 7) {
          output = result - 7;
        }
      }
      }
      console.log(data[output]);
  
  }
  if (process.env.USERNAME === "abhis") {
    runProgram(`Wednesday
    8`); //write test case here
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