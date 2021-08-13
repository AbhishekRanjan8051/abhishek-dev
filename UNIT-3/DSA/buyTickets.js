function runProgram(input) {
  var input = input.split("\n");

  var testCases = Number(input[0]);

  var queue = [];
  for (var i = 1; i <= testCases; i++) {
    var data = input[i].trim().split(" ");

    if (data[0] == "E") {
      queue.push(data[1]);
      console.log(queue.length);
    }
    if (data[0] == "D") {
      if (queue.length == 0) {
        console.log(-1, queue.length);
      } else {
        let remove = queue.shift();
        console.log(Number(remove), queue.length);
      }
    }
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`5
  E 2
  D
  D
  E 3
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
