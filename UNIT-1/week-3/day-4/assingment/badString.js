function goodString(data) {
  var result = "";
  var count = 1;
  var n = data.length;
  var arr = data[0];

  for (var i = 0; i < n; i++) {
    if (data[i] == arr) {
      count++;
    } else {
      result = result + arr;
      count = 1;
      arr = data[i];
    }
  }
  result += arr;
  return result;
}

function runProgram(input) {
  var newInput = input.split("\n");
  var testCase = Number(newInput[0]);

  for (var i = 1; i <= testCase; i++) {
    var data = newInput[i];
    var final = goodString(data);

    console.log(final);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`3
abb
aaab
ababa`); //write test case here
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
