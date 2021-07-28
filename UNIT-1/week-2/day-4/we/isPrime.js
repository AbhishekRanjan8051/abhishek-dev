function runProgram(input) {
  var n = Number(input);
  var isPrime = true;
  if (n !== 2) {
    for (var i = 2; i ** 2 <= n; i++) {
      if (n % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log("Prime");
    } else {
      console.log("Not Prime");
    }
  }
  
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2`); // put test case here
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
