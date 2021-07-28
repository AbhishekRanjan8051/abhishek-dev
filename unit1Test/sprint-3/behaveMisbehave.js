function runProgram(input) {
  var newInput = input.split("\n");
  var testCase = Number(newInput[0]);

  for (var a = 1; a <= testCase; a++) {
    var data = newInput[2 * a ].split(" ").map(Number);
    var present = false;

    // console.log(data);
    for (var i = 0; i < data.length; i++) {
      if (data[i] % 2 == 1 && data[i + 1] % 2 == 1 && data[i + 2] % 2 == 1) {
        present = true;
        break;
      }
    }
    if (present == true) {
      console.log("Misbehave!");
    } else {
      console.log("Behave!");
    }
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2
6
1 3 3 4 5 6
5
1 2 3 4 5`); //write test case here
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
