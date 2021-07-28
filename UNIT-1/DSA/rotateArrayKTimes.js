function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = Number(newInput[0]);

  for (var i = 0; i < testCase; i++) {
    var LK = newInput[i * 2 + 1].split(" ").map(Number);
    var data = newInput[i * 2 + 2].split(" ").map(Number);

    var K = Number(LK[1]);
    var n = data.length;

    var MOD = K % n;

    var result = "";
    for (var j = 0; j <= n - MOD - 1; j++) {
      result += data[j] + " ";
    }

    var output = "";
    for (var k = n - MOD; k <= n - 1; k++) {
      output += data[k] + " ";
    }
    

    console.log(output + result);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`3
3 1
1 2 3
2 2
1 2
2 3
1 2`); //write test case here
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
