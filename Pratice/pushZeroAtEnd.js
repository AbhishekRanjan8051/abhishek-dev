function runProgram(input) {
  var newInput = input.split("\n");
  var testCase = Number(newInput[0]);

  for (var a = 1; a <= testCase; a++) {
    var data = newInput[a * 2].split(" ").map(Number);
    var n = data.length;
    var result = "";
    var result1 = "";
    // console.log(data);
    for (var i = 0; i < n; i++) {
      if (data[i] != 0) {
        result += data[i] + " ";
        // console.log(result);
      } else {
        result1 += data[i] + " ";
      }
    }
    var final = result + result1;
    console.log(final);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2
5
0 1 2 3 0
5
0 0 1 5 3`); //write test case here
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
