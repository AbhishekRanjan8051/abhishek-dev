//You are provided an integer N, print "Yes" (without quotes) if the given integer is prime, else print "No" (without quotes).

//Input = 13;
//Output = Yes

function runProgram(input) {
  var data = Number(input);
  var isPrime = true;
  if (data !== 2) {
    for (var i = 2; i ** 2 <= data; i++) {
      if (data % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
  if (data === 2) {
    console.log("Yes");
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`4`); // put test case here
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
