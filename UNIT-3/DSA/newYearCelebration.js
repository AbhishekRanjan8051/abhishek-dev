function runProgram(input) {
    var input = input.split("\n");
    
    
  var testCases = Number(input[0]);

  var stack = [];
  var queue = [];
  for (var i = 1; i <= testCases; i++) {
    var data = input[i].split(" ").map(Number);

    if (data[0] == 1) {
      queue.push(data[1]);
    }
    if (data[0] == 2) {
      stack.push(data[1]);
    }
    if (data[0] == 3) {
      if (queue.length == 0) {
        console.log(-1);
      } else {
        console.log(queue[0]);
      }
    }
    if (data[0] == 4) {
      if (stack.length == 0) {
        console.log(-1);
      } else {
        console.log(stack[stack.length - 1]);
      }
    }
    if (data[0] == 5) {
      stack.push(queue[0]);

      if (queue.length == 0) {
        console.log(-1);
      } else {
        queue.shift();
      }
    }
    }
    
}
if (process.env.USERNAME === "abhis") {
  runProgram(`7
  1 4
  2 3
  1 2
  3
  4
  5
  4`); //write test case here
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
