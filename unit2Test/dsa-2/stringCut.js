function runProgram(input) {
  var data = input.split("");

  var n = Math.floor(data.length / 2);
  //   console.log(n);
  var result = "";
  if (data.length % 2 != 0) {
    for (var i = n - 1; i >= 0; i--) {
      result += data[i];
    }
    result += data[n];

    for (var j = data.length - 1; j > n; j--) {
      result += data[j];
    }
    console.log(result);
  } else {
    for (var i = n - 1; i >= 0; i--) {
      result += data[i];
    }

    for (var j = data.length - 1; j >= n; j--) {
      result += data[j];
    }
    console.log(result);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`abcxyz`); //write test case here
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
