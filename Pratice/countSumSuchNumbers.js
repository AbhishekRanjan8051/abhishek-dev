function check(X) {
  var flag = true;
  for (var i = 2; i < X; i++) {
    if (X % i == 0) {
      flag = false;
      break;
    }
  }
  return flag && X != 1;
}

function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  for (var a = 1; a <= testCase; a++) {
    var data = newInput[a * 2].trim().split(" ").map(Number);

    var count = 0;
    var sum = 0;

    for (var i = 0; i < data.length; i++) {
      var result = check(data[i]);

      if (result == true) {
        sum += data[i];
      }
    }
    console.log(sum);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2
  3
  1 2 3
  5
  2 2 2 2 1`); //write test case here
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
