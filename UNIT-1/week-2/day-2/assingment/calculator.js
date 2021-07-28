function runProgram(input) {
  var newInput = input.split(" ");
  var a = Number(newInput[0]);
  var b = String(newInput[1]);
  var c = Number(newInput[2]);

  switch (b) {
    case "+":
      console.log(a + c);
      break;
    case "-":
      console.log(a - c);
      break;
    case "*":
      console.log(a * c);
      break;
    case "/":
      var d = a % c;
      var e = a - d;
      console.log(e / c);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`55 / 2`); // put test case here
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
