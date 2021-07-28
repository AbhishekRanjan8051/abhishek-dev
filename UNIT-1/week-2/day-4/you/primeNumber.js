function runProgram(input) {
  var newInput = input.split(" ");
  var a = Number(newInput[0]);
  var b = Number(newInput[1]);
  var result = "";

  if (a == 1) {
    a = 2;
  }

  for (var i = a; i <= b; i++) {
    var isPrime = true;
    for (var j = 2; j ** 2 <= i; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      result = result + i + " ";
    }
  }
  console.log(result);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2 5`); // put test case here
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
