function runProgram(input) {
  var newinput = input.split("\n");

  var testCase = +newinput[0];
  var result = "";

  for (var a = 1; a <= testCase; a++) {
    var [n, k] = newinput[a * 2 - 1].trim().split(" ").map(Number);
    // console.log(k);
    var data = newinput[a * 2].trim().split(" ").map(Number);

    for (var i = 0; i < n; i++) {
      for (var j = i + 1; j < n; j++) {
        if (data[i] + data[j] == k) {
          result += "1";
          break;
        } else if (data[i] + data[j] == k) {
          result += "-1";
        }
      }
    }
    console.log(result);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`1
  5 2
  3 4 0 2 7`); //write test case here
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
