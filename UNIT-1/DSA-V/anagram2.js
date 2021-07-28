function runProgram(input) {
    var newInput = input.split("\n");
  
    var str1 = newInput[0].split("").sort().join("").trim();
    var str2 = newInput[1].split("").sort().join("").trim();
  
    if (str1 == str2) {
      console.log("True");
    } else {
      console.log("False");
    }
  }
  if (process.env.USERNAME === "abhis") {
    runProgram(`sachin tendulkar is sachin tendulkar
     si sachin hsacin tendulkar tedulkad`); //write test case here
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
  