var gcd = function (a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  for (var i = 1; i <= testCase; i++) {
    let data = newInput[i].trim().split(" ").map(Number);

    let a = +data[0];
    let b = +data[1];

    var output = gcd(a, b);
    console.log(output);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2
  6 9
  2 25`); //write test case here
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
