function runProgram(input) {
    let newInput = input.trim().split("\n");
    let testCase = Number(newInput[0]);
    for (var a = 1; a <= testCase; a++) {
      let array = newInput[2 * a].split(" ").map(Number);
      let stack = [];
      let str = [];
      var str1 = "";
      for (var i = array.length - 1; i >= 0; i--) {
        while (stack[stack.length - 1] <= array[i]) {
          stack.pop();
        }
        if (stack.length === 0) {
          str.push(-1);
        } else {
          str.push(stack[stack.length - 1]);
        }
  
        stack.push(array[i]);
      }
      for (j = str.length - 1; j >= 0; j--) {
        str1 = str1 + str[j] + " ";
      }
      console.log(str1);
    }
  }
  if (process.env.USERNAME === "abhis") {
    runProgram(`1
    4
  1 3 2 4`); //write test case here
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