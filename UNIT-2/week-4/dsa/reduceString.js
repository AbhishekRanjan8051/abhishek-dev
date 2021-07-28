function runProgram(input) {
    var data = input.split("");
  
    var n = data.length;
    var temp = data[0];
    var count = 1;
    var result = "";
    for (var i = 1; i < n; i++) {
      if (temp == data[i]) {
        count++;
      } else {
        if (count % 2 == 0) {
          result = result + "";
          temp = data[i];
          count = 1;
        } else {
          result = result + temp;
          temp = data[i];
          count = 1;
        }
      }
    }
    if (count % 2 == 0) {
      result = result + "";
    } else {
      result = result + temp;
    }
    if (result == "") {
      console.log("Empty String");
    } else {
      console.log(result);
    }
  }
  if (process.env.USERNAME === "abhis") {
    runProgram(`aaabbbccddd`);
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
  