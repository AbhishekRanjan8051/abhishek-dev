function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  for (var a = 1; a <= testCase; a++) {
    var data = newInput[a].trim().split("");

    let stack = [];
    let sta = [];

    for (var i = 0; i < data.length; i++) {
      if (data[i] == "(" || data[i] == "{" || data[i] == "[") {
        stack.push(data[i]);
      } else if (data[i] == ")" || data[i] == "}" || data[i] == "]") {
        sta.push(data[i]);
      }
    }
    // if (stack.length <= 0) {
    //   console.log("balanced");
    // } else {
    //   console.log("not balanced");
    // }
    let k = 0;
    let j = stack.length - 1;
    while (k < j) {
      if (stack[k] == sta[j]) {
        console.log("Possible");
      } else {
        console.log("no");
      }
      k++;
      j--;
    }
    // console.log("sta:", sta);

    // console.log("stack:", stack);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`1
  [{({})}]
`); //write test case here
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
