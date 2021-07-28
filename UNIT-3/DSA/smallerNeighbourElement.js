function smallerNeighbourElement(data) {
  let stack = [];
  let arr = "";
  for (let i = 0; i < data.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] >= data[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      arr = arr + "-1" + " ";
    } else {
      arr = arr + stack[stack.length - 1] + " ";
    }
    

    stack.push(data[i]);
  }
  return arr;
}

function runProgram(input) {
  let newInput = input.split("\n");

  let data = newInput[1].trim().split(" ").map(Number);

  var finalOutput = smallerNeighbourElement(data);
  console.log(finalOutput);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`8
  39 27 11 4 24 32 32 1`); //write test case here
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
