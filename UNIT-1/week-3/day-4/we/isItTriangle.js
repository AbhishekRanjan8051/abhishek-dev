function triangle(data) {
  var testCase = Number(newInput[0]);
  var result = "";
  for (var a = 1; a <= testCase; a++) {
    var data = newInput[a].split(" ").map(Number);
    var i = data[0];
    var j = data[1];
    var k = data[2];

    if (i + j > k && i + k > j && j + k > i) {
      result += "Yes";
    } else {
      result += "No";
    }
  }
  return result;
}
function runProgram(input) {
  var newInput = input.split("\n");
  var data = newInput[a].split(" ").map(Number);
  for (var a = 1; a <= testCase; a++) {
    console.log(triangle(data));
  }
}

if (process.env.USERNAME === "abhis") {
  runProgram(`4
4 5 13
7 1 8
2 5 4
2 2 2`); //write test case here
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
