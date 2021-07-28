function runProgram(input) {
  var data = String(input);
  var n = data.length;
  var first = Math.floor(n / 2);
  var result = "";
  var result1 = "";
  var final = "";
  // console.log(first);

  if (data.length % 2 == 0) {
    for (var i = first - 1; i >= 0; i--) {
      result += data[i];
    }
    for (var j = n - 1; j >= first; j--) {
      result1 += data[j];
    }
    final = result + result1;
    console.log(final);
  } else {
    for (var i = first - 1; i >= 0; i--) {
      result += data[i];
    }

    result += data[first];

    for (var j = n - 1; j >= first + 1; j--) {
      result1 += data[j];
    }
    final = result + result1;
    console.log(final);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`abcdxyz`); //write test case here
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
