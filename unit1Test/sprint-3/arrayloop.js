function runProgram(input) {
  var newInput = input.split("\n");
  var testCase = Number(newInput[0]);

  for (var a = 1; a <= testCase; a++) {
    var data = newInput[a * 2].split(" ").map(Number);
    var n = data.length;
    var result = "";
    var isLoop = false;

    for (var i = 0; i < n; i++) {
      for (var j = i + 1; j < n; j++) {
        if (data[i] == data[j]) {
          isLoop = true;
          break;
        }
      }
    }

    if (isLoop) {
      result += "Loop";
    } else {
      result += "No Loop";
    }
    console.log(result);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2
5
1 2 3 4 5
6
1 2 3 4 6 6 `); //write test case here
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
