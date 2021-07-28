function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];
  //   console.log(testCase);
  var count = 0;

  for (var i = 0; i < testCase; i++) {
    var K = newInput[i * 3 + 3];
    // console.log(K);

    var data = newInput[i * 3 + 2].split(" ").map(Number);
    // console.log(data);
    var sum = 0;

    for (var j = 0; j < data.length; j++) {
      if (data[j] < K) {
        if (data[j] % 2 == 0) {
          sum += data[j];
        }
      }
    }
    console.log(sum);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2
5
1 2 3 4 5
10
4
2 2 2 2
11`); //write test case here
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
