function checkPrime(N) {
  var flag = true;

  for (var i = 2; i < N; i++) {
    if (N % i == 0) {
      flag = false;
      break;
    }
  }
  return flag && N != 1;
}

function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  for (var a = 1; a <= testCase; a++) {
    var data = newInput[a * 2].trim().split(" ").map(Number);
    // console.log(data);

    var count = 0;
    for (var i = 0; i < data.length; i++) {
      var result = checkPrime(data[i]);

      if (result == true) {
        count++;
      }
    }
    console.log(count);
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
