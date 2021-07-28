function runProgram(input) {
  var newInput = input.split("\n");
  var testCase = Number(newInput[0]);
  var result = "";
  var result1 = "";

  for (var a = 0; a <= testCase; a = a + 2) {
    var integer = newInput[a + 1].split(" ").map(Number);
    var M = Number(integer[1]);
    // console.log(M);
  }

  for (var i = 1; i <= testCase; i++) {
    var data = newInput[i * 2].split(" ").map(Number);
    for (var j = 0; j < data.length; j++) {
      if (data[j] % M == 0) {
        result += data[j]+" ";
      } else {
        result += -1;
      }
    }
    console.log(result);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2
3 3
1 3 2
5 3
3 3 2 9 7`); //write test case here
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
