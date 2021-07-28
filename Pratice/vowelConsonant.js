function runProgram(input) {
  var newInput = input.split("\n");
  var testCase = +newInput[0];
  for (var a = 0; a < testCase; a++) {
    var data = newInput[a + 2].split("");
    var n = data.length;
    var result = "";
    var result1 = "";

    for (var i = 0; i < n; i++) {
      if (
        data[i] == "a" ||
        data[i] == "e" ||
        data[i] == "i" ||
        data[i] == "o" ||
        data[i] == "u"
      ) {
        result += data[i];
      }
    }

    for (var i = 0; i < n; i++) {
      if (
        data[i] != "a" &&
        data[i] != "e" &&
        data[i] != "i" &&
        data[i] != "o" &&
        data[i] != "u"
      ) {
        result1 += data[i];
        //   console.log(result);
      }
    }
    var final = result + result1;
    console.log(final);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`1
6
rutwik`); //write test case here
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
