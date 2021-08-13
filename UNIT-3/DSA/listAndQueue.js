function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  var queue = [];

  for (let a = 1; a <= testCase; a++) {
    let data = newInput[a].trim().split(" ");

    if (data[0] == "E") {
      queue.push(data[1]);
    }
    if (data[0] == "D") {
      if (queue.length != 0) {
        console.log(queue[0]);
        queue.shift();
      } else {
        console.log("Empty");
      }
    }
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`4
  E 2
  E 3
  D
  D`); //write test case here
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
