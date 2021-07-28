function runProgram(input) {
  var newInput = input.split("\n");
  var length = Number(newInput[0]);
  var data = newInput[1].split(" ").map(Number);
  /* Write your code here */
  var result = "";

  for (var i = 0; i < length; i++) {
    if (data[i] == 42) {
      result += "Yes";
      break;
    } else if (i == length - 1) {
      result += "No";
    }
  }
  console.log(result);
  // for (var i = 0; i < length; i++) {
  //   if (data[i] == 42) {
  //     console.log("Yes");
  //     break;
  //   } else {
  //     console.log("No");
  //     break;
  //   }
  // }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`5
3 7 0 9 8`); // put test case here
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
