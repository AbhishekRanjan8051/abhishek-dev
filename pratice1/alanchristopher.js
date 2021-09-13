function alan(data) {
  var arr = [];

  for (var i = 0; i < data.length; i++) {
    if (data[i] != "#") {
      arr.push(data[i]);
    } else {
      arr.pop();
    }
  }
  var result = arr.join("");
  return result;
}

function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  for (var a = 1; a <= testCase; a++) {
    var data = newInput[a].trim().split("");
    // console.log(data)

    var finalOutput = alan(data);
    console.log(finalOutput);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2
    ab#d
    a#bc`); //write test case here
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
