function runProgram(input) {
  var newInput = input.split("\n");

  var N = Number(newInput[0]);

  var data = newInput[1].trim().split(" ").map(Number);

  var tom = 0;

  var cheery = 0;

  var result = "";

  for (var i = 0; i < N; i++) {
    if (data[i] == 1) {
      tom++;
    } else {
      cheery++;
    }
  }
  if (tom > cheery) {
    result += "tom";
  } else if (cheery > tom) {
    result += "cheery";
  } else {
    result += "Another_Round";
  }
  console.log(result);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`10
    1 1 1 1 1 0 0 0 0 0`); //write test case here
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
